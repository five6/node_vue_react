module.exports = app => {
	class Topic  extends app.Service{
		constructor(ctx) {
      		super(ctx);
      		this.root = 'https://cnodejs.org/api/v1';
    	}
    	* create (params){
			const result = yield this.ctx.curl(`${this.root}/topics`,{
		 		method: 'post',
		        data: params,
		        dataType: 'json',
		        contentType: 'json',
			});
	  		this.checkSuccess(result);
	      	return result.data.topic_id;
    	}
    	* topics (params){
            const result = yield this.ctx.curl(`${this.root}/topics`,{
                method: 'get',
                dataType: 'json',
                contentType: 'json',
            });
            this.checkSuccess(result);
            return result;
		}
		*putTopic(params){
            const result = yield this.ctx.curl(`${this.root}/topics`,{
                method: 'put',
				data:params,
                dataType: 'json',
                contentType: 'json',
            });
            this.checkSuccess(result);
            return result;
		}
		*deleteTopic(params){
            const result = yield this.ctx.curl(`${this.root}/topics`,{
                method: 'delete',
                data:params,
                dataType: 'json',
                contentType: 'json',
            });
            this.checkSuccess(result);
            return result;
		}
    	checkSuccess(result){
    		 if (result.status !== 200) {
		        const errorMsg = result.data && result.data.error_msg ? result.data.error_msg : 'unknown error';
		        this.ctx.throw(result.status, errorMsg);
		      }
		      if (!result.data.success) {
		        this.ctx.throw(500, 'remote response error', { data: result.data });
		      }
    	}
	}
	return Topic;
}
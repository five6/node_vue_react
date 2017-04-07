module.exports = ()=>{
	return function* (next){
		console.log(this);
		if(this.isAuthenticated()){
			yield next;
		}else{
	 		   this.app.emit('error', 'not login error', this);
		       const error = {
			      	 message:"not login error",
			      	 status:500
		      }
		      this.body = {error};
		      this.status = error.status;
	    	}
		}
}
import axios from 'axios'; 
export default {
	getNewsList({newsId,page,per_page},cb){
        var options = {
            params: {
                newsId: newsId,
                page:page,
                perPage:per_page
            }
        }
		axios.get("/api/news").then(function(response){
			console.log(response);
			cb(null,response.data);	
		}).catch(function(err){
			console.log(err);
			cb(err);
		})
	},
	getMoreNews({newsId,page,per_page},cb){
        var options = {
            params: {
                newsId: newsId,
                page:page,
                perPage:per_page
            }
        }
        axios.get("/api/news",options).then(function(response){
            console.log(response);
            cb(null,response.data);
        }).catch(function(err){
            console.log(err);
            cb(err);
        })
	}
}
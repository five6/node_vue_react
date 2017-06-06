import axios from 'axios'; 
export default {
	getNewsList(cb){
		axios.get("/api/news").then(function(response){
			console.log(response);
			cb(null,response.data);	
		}).catch(function(err){
			console.log(err);
			cb(err);
		})
	}
}
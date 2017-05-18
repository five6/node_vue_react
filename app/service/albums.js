'use strict';
const _ = require('lodash');

const mongoose  = require('mongoose');
module.exports = app => {
    class AlbumsService extends app.Service{
        * albumList(albumId){
            yield app.model.albums.find();
        }
        * oneAlbum(albumId){
        	const cond = {
    			_id:new mongoose.Types.ObjectId(albumId)
        	};
        	yield app.model.albums.findOne(cond);
        }
        * updateAlbum(albumId,body){
        	let sets = {
        		_id:new mongoose.Types.ObjectId(albumId)
        	}
        	if(body.name){
        		sets.name = body.name;
        	}
        	if(body.tag){
        		sets.tag = body.tag;
        	}
        	sets.update_at = new Date();
        	return yield app.model.albums.updateOne(cond,{"$set":sets});
        }
        * deleteAlbum(albumId){
    		const cond = {
        		_id:new mongoose.Types.ObjectId(albumId)
        	}
			return yield app.model.albums.deleteOne(cond);	
        }
        * createAlbum(query){
        	const body = {
        		name:body.name||"",
        		tag:body.tag||"",
        		photos:[],
        		create_at:new Date(),
        		update_at:new Date()	
        	}
			const albums = new app.model.album(body);
			albums.save();
        }
        * uploadPhotos(ctx){
        	const body = ctx.body ||{};
        	const albumId = ctx.params.id;
        	/***
        		文件路径和md5值保存在数据库，文件保存在文件夹
				文件的md5值由albumId +文件名+时间戳 md5后保存。s

        	***/
        	



        } 
        * deletePhotos(ctx){
        	let idList = [];
        	const body = ctx.body;
        	const ids = body.ids;
        	_.each(ids,function(id){
				idList.push(new mongoose.Types.ObjectId(id));
        	});
			const cond = {
        		_id:{"$in":idList}
        	}
			return yield app.model.albums.delete(cond);	
        }
    }
    return AlbumsService;
}

function imgMd5(name){
    var md5 = crypto.createHash('md5');
    return md5.update(name).digest('hex');

}
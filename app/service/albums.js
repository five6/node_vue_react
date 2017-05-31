'use strict';
const _ = require('lodash');
const path = require('path');
const mongoose  = require('mongoose');
const multiparty = require('multiparty');
const moment = require("moment");
const async = require('async');
module.exports = app => {
    class AlbumsService extends app.Service{
        * albumList(ctx){
        	const cond = {
        		userId: ctx.user._id
			}
            return yield app.model.album.find(cond);
        }
        * oneAlbum(albumId){
        	const cond = {
    			_id:new mongoose.Types.ObjectId(albumId)
        	};
        	yield app.model.album.findOne(cond);
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
        	return yield app.model.album.updateOne(cond,{"$set":sets});
        }
        * deleteAlbum(albumId){
    		const cond = {
        		_id:new mongoose.Types.ObjectId(albumId)
        	}
			return yield app.model.album.deleteOne(cond);
        }
        * createAlbum(ctx){
            const query = ctx.request.body;
        	const body = {
        		name:query.name,
                userId:ctx.user._id,
                description:query.description,
        		photos:[],
				preview: "",
                topic:query.topic,
                authority:query.authority,
        		create_at:new Date(),
        		update_at:new Date()	
        	}
			const albums = new app.model.album(body);
			return yield albums.save();
        }
        * uploadPhotos(ctx){
        	const body = ctx.body ||{};
        	const albumId = ctx.params.id;
            let result = {};
            let photoPath = path.join(app.config.baseDir, "photos");
            try {
                result = yield parseForm(ctx,photoPath);
                console.log(result);
                const photo = new app.model.photo(result);
                yield photo.save();
            } catch (err) {
                console.log(err);
                result= {};
            }
            return result;
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
			return yield app.model.album.delete(cond);
        }
    }
    return AlbumsService;
}
function parseForm(ctx,photoPath) {
    return new Promise((resolve, reject) => {
        var form = new multiparty.Form();
        form.parse(ctx.req, function(err, fields, files) {
            if(err){
                reject(err);
            }
            else{
                var photoList = files.file||[];
                var tasks = [];
                for(var index in photoList){
                    var photo = photoList[index];
                    tasks.push(function (callback) {
                        var path = photo.path;
                        var md5Name = getMd5Str(path);
                        var fileReadStream=fs.createReadStream(path);
                        var fileWriteStream = fs.createWriteStream(photoPath+"/"+md5Name);
                        fileReadStream.pipe(fileWriteStream);
                        fileWriteStream.on('close',function(){
                            callback(null,{"path":md5Name});
                        });
                    })
                }
                async.parallel(tasks,function (err,result) {
                    result = result || [];
                    resolve({
                        photos:result
                    });
                })
            }
        });
  });
}

function imgMd5(content){
    var extraName= "";
    var dotIndex = content.lastIndexOf(".");
    if(dotIndex !== -1){
        extraName = content.substr(content.lastIndexOf("."));
    };
    var md5 = crypto.createHash("md5");
    return md5.update(content).digest("base64")+moment().format("YYYYMMDDHHmmss")+extraName;
}
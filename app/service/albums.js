'use strict';
const _ = require('lodash');
const path = require('path');
const mongoose  = require('mongoose');
const multiparty = require('multiparty');
const moment = require("moment");
const async = require('async');
const crypto = require('crypto');
const fs = require('fs');
module.exports = app => {
    class AlbumsService extends app.Service{
        * albumList(ctx){
        	const cond = {
        		userId: ctx.user._id
			}
            return yield app.model.album.find(cond);
        }
        * oneAlbum(albumId){
            let objectId = new mongoose.Types.ObjectId(albumId);
            let album = yield app.model.album.findOne({_id:objectId});
            let photos = yield app.model.photo.find({albumId:albumId});
            let albumInfo = {
                _id:album._id+"",
                name:album.name,
                userId:album.userId,
                description:album.description,
                topic:album.topic,
                authority:album.authority,
                create_at:album.create_at,
                update_at:album.update_at,
                photos:photos
            };
            return albumInfo;
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
        	console.log(cond)
			return yield app.model.album.deleteOne(cond);
        }
        * createAlbum(ctx){
            const query = ctx.request.body;
        	const body = {
        		name:query.name,
                userId:ctx.user._id,
                description:query.description,
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
            let photos =[];
            let photoPath = path.join(app.config.baseDir, "app/public/ufiles/photos");
            try {
                const results = yield parseForm(ctx,photoPath);
                photos = results.photos || [];
                console.log("***********************");
                photos = _.map(photos,function(pho){
                    return {
                        path:pho.path,
                        albumId:albumId,
                        description:"",
                        create_at:new Date()
                    }
                });
                yield app.model.photo.insertMany(photos);
            } catch (err) {
                console.log("******************* err ***********************");
            }
            return photos;
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
                console.log("photos length : "+photoList.length);
                var tasks = [];
                for(let index in photoList){
                    tasks.push(function (callback) {
                        var photo = photoList[index];
                        var path = photo.path;
                        var md5Name = imgMd5(path);
                        var fileReadStream=fs.createReadStream(path);
                        var fileWriteStream = fs.createWriteStream(photoPath+"/" + md5Name);
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
    // var dotIndex = content.lastIndexOf(".");
    // if(dotIndex !== -1){
    //     extraName = content.substr(content.lastIndexOf("."));
    // };
    var md5 = crypto.createHash("sha1");
    const str =  md5.update(content).digest("hex")+moment().format("YYYYMMDDHHMMSSss")+extraName;
    console.log(str);
    return str;
}
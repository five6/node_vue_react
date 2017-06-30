'use strict';
const _ = require('lodash');
const path = require('path');
const mongoose = require('mongoose');
const multiparty = require('multiparty');
const moment = require("moment");
const async = require('async');
const crypto = require('crypto');
const fs = require('fs');
module.exports = app => {
    class AlbumsService extends app.Service {
        * albumList(ctx) {
            const cond = {
                userId: ctx.user._id
            }
            return yield app.model.album.find(cond);
        }
        
        * oneAlbum(albumId) {
            let objectId = new mongoose.Types.ObjectId(albumId);
            let album = yield app.model.album.findOne({_id: objectId});
            let photos = yield app.model.photo.find({albumId: albumId});
            let albumInfo = {
                _id: album._id + "",
                name: album.name,
                userId: album.userId,
                description: album.description,
                topic: album.topic,
                authority: album.authority,
                create_at: album.create_at,
                update_at: album.update_at,
                photos: photos
            };
            return albumInfo;
        }
        
        * updateAlbum(albumId, body) {
            let sets = {
                _id: new mongoose.Types.ObjectId(albumId)
            }
            if (body.name) {
                sets.name = body.name;
            }
            if (body.tag) {
                sets.tag = body.tag;
            }
            sets.update_at = new Date();
            return yield app.model.album.updateOne(cond, {"$set": sets});
        }
        
        * deleteAlbum(ctx) {
            const albumId = ctx.params.id
            const cond = {
                _id: new mongoose.Types.ObjectId(albumId)
            }
            const photoPath = path.join(app.config.baseDir, "app/public/ufiles/photos");
            const photos = yield app.model.photo.find({"albumId":albumId});
            
            let _ids =[];
            _.each(photos,function(p){
                _ids.push(p._id);
            });
            yield app.model.photo.remove({_id:{"$in":_ids}});
            yield deleteAlbumPhotos(ctx,photos,photoPath);
            yield app.model.album.deleteOne(cond);
            return;
        }
        
        * createAlbum(ctx) {
            const query = ctx.request.body;
            const body = {
                name: query.name,
                userId: ctx.user._id,
                description: query.description,
                preview: "",
                topic: query.topic,
                authority: query.authority,
                create_at: new Date(),
                update_at: new Date()
            }
            const albums = new app.model.album(body);
            return yield albums.save();
        }
        
        * uploadPhotos(ctx) {
            const body = ctx.body || {};
            const albumId = ctx.params.id;
            let photos = [];
            let photoPath = path.join(app.config.baseDir, "app/public/ufiles/photos");
            try {
                const results = yield parseForm(ctx, photoPath);
                photos = results.photos || [];
                console.log("***********************");
                photos = _.map(photos, function (pho) {
                    return {
                        path: pho.path,
                        albumId: albumId,
                        description: "",
                        create_at: new Date()
                    }
                });
                yield app.model.photo.insertMany(photos);
            } catch (err) {
                console.log("******************* err ***********************");
            }
            return photos;
        }
        
        * deletePhotos(ctx) {
            let idList = [];
            const body = ctx.body;
            const ids = body.ids;
            _.each(ids, function (id) {
                idList.push(new mongoose.Types.ObjectId(id));
            });
            const cond = {
                _id: {"$in": idList}
            }
            return yield app.model.album.delete(cond);
        }
        * setBackground(ctx){
            let photoPath = path.join(app.config.baseDir, "app/public/ufiles/photos");
            let bkImg;
            try{
                let bkImgObj = yield parseForm(ctx, photoPath,"albumId")||{};
                let albumId = bkImgObj.albumId;
                let photos = bkImgObj.photos||[];
                photos = photos[0]||{};
                bkImg = photos.path||"";
                if(bkImg && albumId){
                    const objId = new mongoose.Types.ObjectId(albumId);
                    yield app.model.album.updateOne({_id:albumId},{"$set":{"preview":bkImg}});
                }
            }catch (e){
                console.log(e);
            }
            return bkImg;
        }   
    }
    return AlbumsService;
}

function deleteAlbumPhotos(ctx,photos,photoPath){
    return new Promise((resolve, reject) => {
        let tasks = [];

        _.each(photos,function(photo){
            tasks.push(function(callback){
                const photoPathStr = photoPath+"/"+ photo.path;
                fs.unlink(photoPathStr, function () {
                    ctx.logger.info("删除相册照片：" + photo.path);
                    callback(null,{"photo":photo});
                });
            })
        })
        async.parallel(tasks, function (err, result) {
            if(err){
                reject(err);
            }else{
                resolve({
                    photos: result
                });
            }
        });
    })
}

function parseForm(ctx, photoPath,paramName) {
    return new Promise((resolve, reject) => {
        var form = new multiparty.Form();
        form.parse(ctx.req, function (err, fields, files) {
            var paramValue = fields[paramName]||[];
            paramValue = paramValue[0]||"";
            if (err) {
                reject(err);
            }
            else {
                var photoList = files.file || [];
                console.log("photos length : " + photoList.length);
                var tasks = [];
                for (let index in photoList) {
                    tasks.push(function (callback) {
                        var photo = photoList[index];
                        var path = photo.path;
                        var md5Name = imgMd5(path);
                        var fileReadStream = fs.createReadStream(path);
                        var fileWriteStream = fs.createWriteStream(photoPath + "/" + md5Name);
                        fileReadStream.pipe(fileWriteStream);
                        fileWriteStream.on('close', function () {
                            callback(null, {"path": md5Name});
                        });
                    })
                }
                async.parallel(tasks, function (err, result) {
                    result = result || [];
                    var obj = {
                        photos: result,
                    };
                    if(paramName){
                        obj[paramName] = paramValue;
                    }
                    resolve(obj);
                })
            }
        });
    });
}

function imgMd5(content) {
    var extraName = "";
    // var dotIndex = content.lastIndexOf(".");
    // if(dotIndex !== -1){
    //     extraName = content.substr(content.lastIndexOf("."));
    // };
    var md5 = crypto.createHash("sha1");
    const str = md5.update(content).digest("hex") + moment().format("YYYYMMDDHHMMSSss") + extraName;
    console.log(str);
    return str;
}
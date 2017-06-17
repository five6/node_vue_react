'use strict';
const _ = require("lodash");
const async = require("async");
module.exports = app => {
    class AlbumsController extends app.Controller{
        * albums(ctx){
            const result = yield ctx.service.albums.albumList(ctx);
            ctx.body = {code:0,msg:"success",albums:result};
        }
        * album(ctx){
            const result = yield ctx.service.albums.oneAlbum(ctx.params.id);
            ctx.body = {code:0,msg:"success",album:result};
        }
        * updateAlbum(ctx){
            return yield ctx.service.albums.updateAlbum(ctx.params.id,ctx.body);
        }
        * deleteAlbum(ctx){
            const result = yield ctx.service.albums.deleteAlbum( ctx.params.id);
            ctx.body = {code:0,msg:"success",data:result};
        }
        * createAlbum(ctx){
            const album = yield ctx.service.albums.createAlbum(ctx);
            ctx.body = {code:0,msg:"success",album:album};
        }
        * uploadPhotos(ctx){
            const photos = yield ctx.service.albums.uploadPhotos(ctx);
             ctx.body = {code:0,msg:"success",photos:photos};
        }
        * deletePhotos(ctx){
            return yield ctx.service.albums.deletePhotos(ctx);
        }
    };
    return AlbumsController;
}
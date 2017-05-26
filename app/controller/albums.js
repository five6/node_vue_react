'use strict';
const _ = require("lodash");
const async = require("async");
module.exports = app => {
    class AlbumsController extends app.Controller{
        * albums(ctx){
            const result = yield ctx.service.albums.albumList(ctx);
            ctx.body = result;
        }
        * album(ctx){
            return yield ctx.service.albums.oneAlbum(ctx.params.id);
        }
        * updateAlbum(ctx){
            return yield ctx.service.albums.updateAlbum(ctx.params.id,ctx.body);
        }
        * deleteAlbum(ctx){
            return yield ctx.service.albums.deleteAlbum( ctx.params.id);
        }
        * createAlbum(ctx){
            return yield ctx.service.albums.createAlbum(ctx);
        }
        * uploadPhotos(ctx){
            return yield ctx.service.albums.uploadPhotos(ctx);
        }
        * deletePhotos(ctx){
            return yield ctx.service.albums.deletePhotos(ctx);
        }
    };
    return AlbumsController;
}
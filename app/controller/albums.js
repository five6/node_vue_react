'use strict';
const _ = require("lodash");
const async = require("async");
module.exports = app => {
    class AlbumsController extends app.Controller{
        * albums(ctx){
            return yield app.service.albums.albumList();
        }
        * album(ctx){
            return yield app.service.albums.oneAlbum(ctx.params.id);
        }
        * updateAlbum(ctx){
            return yield app.service.albums.updateAlbum(ctx.params.id,ctx.body);
        }
        * deleteAlbum(ctx){
            return yield app.service.albums.deleteAlbum( ctx.params.id); 
        }
        * createAlbum(ctx){
            const body = ctx.body;
            return yield app.service.albums.createAlbum(body);
        }
        * uploadPhotos(ctx){
            return yield app.service.albums.uploadPhotos(ctx);
        }
        * deletePhotos(ctx){
            return yield app.service.albums.deletePhotos(ctx);
        }
    };
    return AlbumsController;
}
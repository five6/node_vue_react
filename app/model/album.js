'use strict';
module.exports = mongoose =>{
    const albumsModel = new mongoose.Schema({
        url:{type:String},
        description:{type:String},
        userId:{type:String},
        topic:{type:Number},
        preview:{type:String},
        authority:{type:Number},
        create_at:{type:Object},
        update_at:{type:Object}
    },{collection: "albums"});
    return mongoose.model('albums', albumsModel)
};
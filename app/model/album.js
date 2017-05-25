'use strict';
module.exports = mongoose =>{
    const albumsModel = new mongoose.Schema({
        name:{type:String},
        description:{type:String},
        topic:{type:Number},
        photos:{type:Array},
        create_at:{type:Object},
        update_at:{type:Object}
    },{collection: "albums"});
    return mongoose.model('albums', albumsModel)
};
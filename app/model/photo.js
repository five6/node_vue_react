'use strict';
module.exports = mongoose =>{
    const photosModel = new mongoose.Schema({
        path:{type:String},
        albumId:{type:String},    
        description:{type:String},
        create_at:{type:Object}
    },{collection: "photos"});
    return mongoose.model('photos', photosModel)
};
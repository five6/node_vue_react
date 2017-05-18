'use strict';
module.exports = mongoose => {
    const UserSchema = new mongoose.Schema({
    	_id: {type: String},
        sex: { type: Number},
        create_at:{type:Object},
        last_login:{type:Object},
        password: { type: String}
    },{collection: "user"});
    return mongoose.model('user', UserSchema);
}

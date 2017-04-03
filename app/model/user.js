'use strict';
module.exports = mongoose => {
    const UserSchema = new mongoose.Schema({
    	_id: {type: String},
        sex: { type: Number},
        password: { type: String}
    });
    return mongoose.model('user', UserSchema);
}

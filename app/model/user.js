'use strict';
module.exports = mongoose => {
    const UserSchema = new mongoose.Schema({
        userName: { type: String  },
        password: { type: String  }
    });

    return mongoose.model('user', UserSchema);
}

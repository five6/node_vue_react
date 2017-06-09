const basicAuth = require('basic-auth');
module.exports = () => {
    return function*(next) {
        if (this.isAuthenticated()) {
            yield next;
        } else {
            let userObj = basicAuth(this)||{};
            console.log("******************************************************");
            console.log(userObj);
            console.log("******************************************************");
    
            const cond = {
                _id: userObj.name,
                password: this.app.getPassword(userObj.pass||"")
            };
            const user = yield this.app.model.user.findOne(cond);
            if (user) {
                yield this.login(user);
                yield next;
            } else {
                this.app.emit('error', 'not login error', this);
                const error = {
                    message: "not login error",
                    status: 500
                };
                this.body = {error};
                this.status = error.status;
            }
        }
    }
};
/**
 * create by five6 at 20170326 17:54
 */
 var crypto = require('crypto');
module.exports = app => {
    class User extends app.Service {
        * login(body) {
            // use below later
            // const userName = body["userName"];
            // const devTest =  app.mysql.get("dbTest");
            // const user = yield devTest.query(`select * from user where name = ${userName}`);
            // return user;
            const cond = {
                _id:body['userName'],
                password:getPassword(body['password'])
            };
            const user = yield app.model.user.findOne(cond);
            return user;
        }
        * register(body){
            // const devTest =  app.mysql.get("dbTest");
            const cond ={
                _id:body['userName'],
                sex:body['sex'],
                password:getPassword(body['password'])

            };
            const user = new app.model.user(cond);
            const result = user.save();
            return null;
        }
    }
    return User;
};

function getPassword(psd){
    var md5 = crypto.createHash('md5');
    return md5.update(psd).digest('hex');

}
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
                userName:body['userName']
            };
            const user = yield app.model.user.find(cond);
            return user;
        }
        * register(body){
            // const devTest =  app.mysql.get("dbTest");
            const cond ={
                userName:body['userName'],
                password:getPassword(body['password'])

            };
            console.log(cond);
            return null;
        }
    }
    return User;
};

function getPassword(psd){
    var md5 = crypto.createHash('md5');
    return md5.update(psd).digest('hex');

}
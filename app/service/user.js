/**
 * create by five6 at 20170326 17:54
 */
module.exports = app => {
    class User extends app.Service {
        * login(body) {
            // use below later
            // const userName = body["userName"];
            // const devTest =  app.mysql.get("dbTest");
            // const user = yield devTest.query(`select * from user where name = ${userName}`);
            // return user;
            const cond = {
                userName:body["userName"]
            }
            console.log(this.ctx.model.User);
            const user = yield this.ctx.model.User.find(cond);
            return user;
        }
        * register(body){
            const devTest =  app.mysql.get("dbTest");
            return {};
        }
    }
    return User;
};
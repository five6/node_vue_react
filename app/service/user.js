/**
 * create by five6 at 20170326 17:54
 */
module.exports = app => {
    class User extends app.Service {
        * findOne(uid) {
            const devTest =  app.mysql.get("dbTest");
            const user = yield devTest.query(`select * from user where id = ${uid}`);
            return user;
        }
        * userList(){
            const devTest =  app.mysql.get("dbTest");
            const users = yield devTest.query('select * from user');
            return users;
        }
    }
    return User;
};
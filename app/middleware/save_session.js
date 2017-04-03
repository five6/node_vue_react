module.exports = () => {
    return function* (next) {
        yield next;
        // 如果 Session 是空的，则不保存
        if (!this.session.userName) return;
        this.session.save();
    };
};
// config/config.default.js
// 在配置文件中引入中间件
exports.middleware = [ 'saveSession' ];
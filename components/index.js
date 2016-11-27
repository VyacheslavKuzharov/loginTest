module.exports = function (ngModule) {

    // Auth components
    require('../assets/stylesheets/login.css');
    require('./auth/auth.ctrl')(ngModule);
    require('./auth/auth.service')(ngModule);
};
var angular = require('angular');
var uiRouter = require('angular-ui-router');
var ngMessages = require('angular-messages');
var storage = require('angular-storage');
var jwt = require('angular-jwt');
var modal = require('angular-ui-bootstrap/src/modal');

var ngModule = angular.module('ngOptimizer', [
    uiRouter,
    ngMessages,
    storage,
    jwt,
    modal
]);

require('./config')(ngModule);
require('./components')(ngModule);
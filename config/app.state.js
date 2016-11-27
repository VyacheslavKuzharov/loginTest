module.exports = function (ngModule) {

    ngModule
        .config([
            '$stateProvider',
            '$urlRouterProvider', function(
                $stateProvider,
                $urlRouterProvider) {

                $urlRouterProvider.otherwise('/');
                $stateProvider
                    .state('login', {
                        url: '/login',
                        template: require('../components/auth/templates/auth.tpl.html'),
                        controller: 'authController',
                        controllerAs: 'authCtrl'
                    });
            }]);
};
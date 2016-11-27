module.exports = function (ngModule) {
    ngModule.controller('authController', authController);


    function authController( $location, auth, store) {

        var self = this;
        self.registerOpen = registerOpen;
        self.loginSubmit = loginSubmit;

        auth.openLoginDialog();

        function registerOpen() {
            // $uibModalInstance.close();
            auth.openRegisterDialog();
        }

        function loginSubmit(user_credentials, authType) {
            var serviceType = authType.isLogin ? auth.login(user_credentials) : auth.register(user_credentials);


            serviceType.then(function (response) {
                $uibModalInstance.close();
                store.set('token', response.data.token);
                $location.path('/');
            }, function (response) {
                self.signInErrorMsg = response.data.error;
                self.showError = true;
            })
        }
    }
};
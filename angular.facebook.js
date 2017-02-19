(function() {

'use strict';


angular.module('fbService', [])

.factory('facebookService', ['$rootScope', '$q', 'facebookLibService', function ($rootScope, $q, facebookLibService) {

    var login,
        ensureUserLoggedIn,
        postToFacebook,
        FB = facebookLibService;

    // init facebook feed when service is injected
    FB.init({
        appId: '1665429333751461',
        secret: '1ead76274011a1e200ce53876313e795',
        status: true,
        cookie: true,
        xfbml: true,
        version: 'v2.4'
    });

    login = function () {

        var deferred = $q.defer();

        FB.login(function (response) {
            if (response.authResponse) {
                // resolve promise and propagate via digest
                $rootScope.$apply(function() {
                    deferred.resolve({msg : 'successfully logged in', response : response});
                });
            } else {
                // reject promise and propagate via digest
                $rootScope.$apply(function() {
                    deferred.reject({msg : 'failed to login', response : response});
                });
            }
        });

        return deferred.promise;
    };

    ensureUserLoggedIn = function () {

        var deferred = $q.defer();

        facebookLibService.getLoginStatus(function (response) {
            if (response.status === 'connected') {
                // login promise resolved
                deferred.resolve({msg : 'connected', response : response });
            } else if (response.status === 'not_authorized') {
                // not authorized
                login().then(

                    function (logInSuccess) {
                        deferred.resolve({msg : 'logged in', response : logInSuccess });
                    },
                    function (logInFailure) {
                        deferred.reject({msg : 'failed to log in', response : logInFailure});
                    }
                );
            } else {
                // not logged in
                login().then(

                    function (logInSuccess) {
                        deferred.resolve({msg : 'logged in', response : logInSuccess });
                    },
                    function (logInFailure) {
                        deferred.reject({msg : 'failed to log in', response : logInFailure});
                    }
                );
            }
        }, function(error) {console.info('error..: ', error)});

        return deferred.promise;
    };

    postToFacebook = function(config) {

        var deferred = $q.defer();

        FB.ui(config, function(response) {
            if (response && response.post_id) {
                $rootScope.$apply(function() {
                    deferred.resolve({msg: 'successfully posted to facebook', response : response });
                });
            } else {
                $rootScope.$apply(function() {
                    deferred.reject({msg : 'facebook post failed', response : response });
                });
            }
        });

        return deferred.promise;
    };

    return {
        post : function(config) {

            var deferred = $q.defer();

            ensureUserLoggedIn().then(
                // user successfully authenticated
                function(logInSuccess) {
                	console.info('logInSuccess..', logInSuccess);
                    postToFacebook(config).then( 
                                                
                        function(postSuccess) {
                            deferred.resolve({msg : 'success', response : postSuccess});
                        },

                        function(postFail) {
                            deferred.reject({msg : 'failed', response : postFail});
                        }
                    );
                },
                // user not logged in and/or not authenticated, handle error...
                function(logInFailure) {
                    console.error(logInFailure);
                    deferred.reject({msg : 'facebook post failed', response : logInFailure });
                }
            );

            return deferred.promise;
        },
        getName: function() {
            var deferred = $q.defer();
            FB.api('/me', { fields: 'first_name' }, 
        	  function(response) {
            	console.info('response, ', response);
                if (!response || response.error) {
                    deferred.reject('Error occured');
                } else {
                    deferred.resolve(response);
                }
            });
            return deferred.promise;
        }
    }
}])

.factory('facebookLibService', function ($window) { 
    return $window.FB; 
});


})()
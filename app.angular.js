(function() {

  'use strict';

  var app = angular.module('LojaVirtual', ['ngFacebook']);

  app.config(function($facebookProvider) {
  	$facebookProvider.setAppId('1665429333751461');
  })

  // app.config(function('FacebookProvider') {

  // 	FacebookProvider.setAppId('1665429333751461');

  // });

  app.controller('PaymentCtrl', ['$scope', '$facebook', function($scope, $facebook) {

  	$scope.dados = {
  		descricao: 'teste'
  	}

  	$scope.publicar = function() {
  		console.info('button pressed', $facebook.ui('feed').then(
  			function(response){console.info('response: ', response)}, 
  			function(error)   {console.info('error:    ', error)}
  			));


	  $facebook.api("/me").then( 
        function(response) {
          $scope.welcomeMsg = "Welcome " + response.name;
        },
        function(err) {
          $scope.welcomeMsg = "Please log in";
        });
  		
  	}


  }]);


})()
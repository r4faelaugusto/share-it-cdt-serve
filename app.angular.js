(function() {

  'use strict';

  var app = angular.module('LojaVirtual', ['fbService']);

  app.controller('PaymentCtrl', ['$scope', 'facebookService', function($scope, facebookService) {

  	console.info('fbservice: ', facebookService);

  	$scope.dados = {
  		descricao: 'teste'
  	}

  	$scope.publicar = function() {
  		// console.info('button pressed', $facebook.ui('feed').then(
  		// 	function(response){console.info('response: ', response)}, 
  		// 	function(error)   {console.info('error:    ', error)}
  		// 	));
  		console.info('button pressed');

	  // $facebook.api("/me").then( 
   //      function(response) {
   //        $scope.welcomeMsg = "Welcome " + response.name;
   //      },
   //      function(err) {
   //        $scope.welcomeMsg = "Please log in";
   //      });
  		
  	}


  }]);


})()
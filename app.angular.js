(function() {

  'use strict';

  var app = angular.module('LojaVirtual', ['socialsharing']);


	app.config(['$sceDelegateProvider', function($sceDelegateProvider) {
	  // We must whitelist the JSONP endpoint that we are using to show that we trust it
	  $sceDelegateProvider.resourceUrlWhitelist([
	    'self',
	    'http://shareitclub-com-br.umbler.net/***'
	  ]);
	}])

  app.config(function($fbProvider, $twtProvider) {
      $fbProvider.init('1665429333751461', {});
      $twtProvider.init()
        .trimText(true);
   });



  app.controller('PaymentCtrl', ['$scope', '$fb', '$http', function($scope, $fb, $http) {
	
  	$scope.dados = {
  		descricao: 'teste'
  	}

  	$scope.publicar = function() {	

  		var dados = {
  		  name: 'SMARTPHONE ANDROID F500',
	      link: 'shareitclub-com-br.umbler.net',
	      picture: 'https://getmdl.io/templates/android-dot-com/images/more-from-1.png',
	      caption: 'compra online',
	      description: 'Acabei de comprar uma nada no valor de nada...',
          caption: "WebStore"
  		};

	console.info('dados em publicar: ', dados);

  	  $fb.feed(dados, function(response) {
      	  
      	  console.info('postId: ', response.post_id);

      	  var dataApi = {
      	  	"descricao":dados.description,
      	  	"preco":"R$ 4.000,00",
      	  	"metodo-pagamento":"Cart\u00e3o-Cr\u00e9dito",
      	  	"satisfacao":"5",
      	  	"url":null,
      	  	"idLoja":1,
      	  	"idPostFacebook": response.post_id,
      	  };

		  $http({
		  	url: 'http://shareitclub-com-br.umbler.net/api.php/',
		  	method: 'post'
		  })
		    .then(function(response) {
				console.info('response: ', response);
			}, function (error) {
				console.info('error: ', error);
			});

		 //  $http.post('http://shareitclub-com-br.umbler.net/api.php/shared/', dataApi)
		 //    .success(function() {
			// 	$http.get('api.php/shared/').success(function(response) {
			// 		$scope.posts = response;
			// 	});
			// });

      	  
      });

  	}


  }]);


})()
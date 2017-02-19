(function() {

  'use strict';

  var app = angular.module('LojaVirtual', ['socialsharing']);


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
  		  name: 'Macbook i7 500GB SSD',
	      link: 'shareitclub-com-br.umbler.net',
	      picture: 'https://store.storeimages.cdn-apple.com/4974/as-images.apple.com/is/image/AppleInc/aos/published/images/M/AC/MACBOOKPRO/MACBOOKPRO?wid=1200&hei=630&fmt=jpeg&qlt=95&op_sharpen=0&resMode=bicub&op_usm=0.5,0.5,0,0&iccEmbed=0&layer=comp&.v=6xyk93',
	      caption: 'compra online',
	      description: 'Acabei de comprar um Macbook i7 no valor de R$ 4.000,00',
          caption: "WebStore",
preco: 'R$ 4.000,00'
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
		  	url: 'http://shareitclub-com-br.umbler.net/api.php/shared/',
		  	method: 'post',
		  	data: dataApi
		  })
		    .then(function(response) {
				console.info('response: ', response);
			}, function (error) {
				console.info('error: ', error);
			});

      	  
      });

  	}


  }]);


})()

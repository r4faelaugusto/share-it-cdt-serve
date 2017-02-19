(function() {

  'use strict';

  var app = angular.module('LojaVirtual', ['socialsharing']);


  app.config(function($fbProvider, $twtProvider) {

      $fbProvider.init('1665429333751461', {});
      console.info('fb: ', $fbProvider);
      $twtProvider.init()
        .trimText(true);
   });



  app.controller('PaymentCtrl', ['$scope', '$fb', function($scope, $fb) {
	console.info('FB> ', $fb);
  	$scope.dados = {
  		descricao: 'teste'
  	}

  	$scope.publicar = function() {	
  	  $fb.feed({
	      name: 'nome teste',
	      link: 'shareitclub-com-br.umbler.net',
	      picture: 'https://getmdl.io/templates/android-dot-com/images/more-from-1.png',
	      caption: 'compra online',
	      description: 'Acabei de comprar uma nada no valor de nada...',
          caption: "WebStore"
      });


	 //  var fbConfig = {
	 //      method: 'feed',
	 //      name: 'nome teste',
	 //      link: 'shareitclub-com-br.umbler.net',
	 //      picture: 'https://getmdl.io/templates/android-dot-com/images/more-from-1.png',
	 //      caption: 'compra online',
	 //      description: 'Acabei de comprar uma nada no valor de nada...'
	 //  };

	 //  console.info('fbConfig', fbConfig);

	 //  facebookService.post(fbConfig).then(
		// function (success) {
  //    		console.info('success...', success);
		// },
		// function (failure) {
		// 	console.info('algo deu erraod: mas nao vai dar...', failure);
		// });


		// facebookService.getName().then(function(response) {
		// 	console.info('response, ', response);
		// });


	 //  console.info('facebook service....', facebookService);
  	}


  }]);


})()
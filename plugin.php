<html lang="en" >
<head>
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <!-- Angular Material style sheet -->
  <link rel="stylesheet" href="http://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.css">
  		
</head>
<body ng-app="BlankApp" ng-cloak>
  <!--
    Your HTML content here
  -->  
  
  <!-- Angular Material requires Angular.js Libraries -->
  <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular.min.js"></script>
  <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-animate.min.js"></script>
  <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-aria.min.js"></script>
  <script src="http://ajax.googleapis.com/ajax/libs/angularjs/1.5.5/angular-messages.min.js"></script>

  <!-- Angular Material Library -->
  <script src="http://ajax.googleapis.com/ajax/libs/angular_material/1.1.0/angular-material.min.js"></script>
  
  <!-- Your application bootstrap  -->
  <script type="text/javascript">    
    /**
     * You must include the dependency on 'ngMaterial' 
     */
    var app = angular.module('BlankApp', ['ngMaterial']);

    app.controller('HomeCtrl', ['$scope', function($scope) {
    	
    	var dados = {
    		descricao: 'TV LED 60" PHILLIPS QH-X900',
    		preco: 'R$ 1.800,99',
    		metodoPagamento: 'Boleto',
    		satisfacao: '5',
    		idLoja: 1,
    		// idFacebook: null,
    		// idPostFacebook: null,
    		// data: null
    	};
    }]);
  </script>
  




</body>
</html>

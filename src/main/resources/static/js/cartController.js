	var app = angular.module('store',[]);

	app.controller('StoreController', ['$scope','$http', function($scope,$http){
		 $scope.showModal = false;
		  $scope.buttonClicked = "";
		  $scope.toggleModal = function(btnClicked) {
		    $scope.buttonClicked = btnClicked;
		    $scope.showModal = !$scope.showModal;
		  };
		$scope.products = productsData;
		$scope.cart = [];
		$scope.saveCart = [];
//		$scope.total = 0;
		
		$scope.getTotal = function() {
	        var total = 0;
	        angular.forEach($scope.cart, function(item) {
	            total += item.count * item.price;
	        });

	        return total;
	    }
		
		 $scope.increase = function(item) {
		        var items = $scope.cart;
		        
		        for(var i=0; i <items.length; i++){
		            if(items[i].id === item.id){
		                items[i].count += 1;
		            }
		        }
		    };
		    
		    $scope.decrease = function(item) {
		        var items = $scope.cart;
		        
		        for(var i=0; i<items.length; i++){
		            if(items[i].id === item.id){
		                items[i].count -= 1;
		            }
		        }
		    };
		    

		    $scope.removeItem = function(index) {
		        $scope.cart.splice(index, 1);
				 $scope.fetchData = $scope.cart;

		    };
		
		
		$scope.addItemToCart = function(product){
		  
		 	if ($scope.cart.length === 0){
		 		product.count = 1;
		 		$scope.cart.push(product);
		 	} else {
		 		var repeat = false;
		 		for(var i = 0; i< $scope.cart.length; i++){
		 			if($scope.cart[i].id === product.id){
		 				repeat = true;
		 				$scope.cart[i].count +=1;

		 			}
		 		}
		 		if (!repeat) {
		 			product.count = 1;
		 		 	$scope.cart.push(product);

		 		}
		 	}
		  $scope.total += parseFloat(product.price);
			 $scope.fetchData = $scope.cart;

		 };

		
		 
		 $scope.getCartDetails = function(){
			 $http.get("/products")
			    .then(function(response) {
			        $scope.fetchData = response.data;
			    });
		 };
		 
		 $scope.saveCartDetails = function(){
		        	$http.post("/saveCart",$scope.cart)
				    .then(function(response) {
				    	console.log("saved");
				    });
		 };
		 
		 $scope.showCart = function(){
			$scope.cart =  $scope.fetchData;
		 };
		 $scope.getCartDetails();
	}]);

	var productsData = [{
		id: 1,
		name: 'Mac',
		price: 100.0,
	},{
		id: 2,
		name: 'Lenovo',
		price: 14.5,
	},{
		id: 3,
		name: 'Samsung',
		price: 100.43,
	},{
		id: 4,
		name: 'Pixel',
		price: 99.9,
	}];
var c = angular.module("CtrlModule", []);

//Define a controller "Main Controller"
// Register a controller
// use ng-controller
// data should be available in scope
    c.controller("MainController", function($scope){    
        console.log("This is main controller function");    
        $scope.restaurantName = "<u>  Le Meridian  </u>";
    });

    c.config(function(){
        console.log("Ctrl App config");
    });

    c.run(function(){
        console.log("Ctrl App run");
    });

    c.controller("MenuController", function($scope){
        var menuItems = [
            {"code": "VG01", "name": "Sandwich", "price": 120, "description": "Veg Sandwich"},
            {"code": "VG02", "name": "Burger", "price": 60, "description": "Veg burger"},
            {"code": "NV01", "name": "Ch Hog Dog", "price": 150, "description": "Non Veg Chicken Hog Dog"},
            {"code": "NV02", "name": "Mutton tikka", "price": 220, "description": "Mutton tikka"}];

        $scope.itemsList = menuItems;    
        $scope.placeOrder = function(menuitem){
            var orderedItem = {"name": menuitem.name, "price": menuitem.price, "qty" :1};
        }
    });

    c.controller("OrderController", function($scope){    
       $scope.orderItems = [];
    });
    var c = angular.module("CtrlModule", ["SvcModule"]);

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


     c.controller("MenuController", function($scope, MenuServices, OrderServices){    
            $scope.itemsList = MenuServices.getAllMenuItems();    
            $scope.placeOrder = function(menuitem){
                var orderedItem = {"name": menuitem.name, "price": menuitem.price, "qty" :1,"amount":menuitem.price, "code": menuitem.code};
                OrderServices.addOrderedItem(orderedItem);
            }
            
             
        });

        c.controller("OrderController", function($scope, OrderServices){        
            $scope.orderItems = OrderServices.getOrderedItems();        
            $scope.cancelOrder = function(indx){
                OrderServices.deleteOrderedItem(indx);
            };

            $scope.totalAmount = function(){
                return OrderServices.getTotalAmount();            
            }
            
          
        });
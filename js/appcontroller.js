    var c = angular.module("CtrlModule", ["SvcModule","myDirectivesApp"]);

        c.controller("MainController", function($scope, $location, $rootScope){    
            console.log("This is main controller function");    
            $scope.restaurantName = "<u>  Le Meridian  </u>";
            $scope.$on("$routeChangeSuccess", function(){
                console.log("Route Chnage Success" + $location.path());
                if($location.path() == "/logout"){
                    $scope.isLogin = false;
                }
            });
            
            $scope.$on("$routeChangeStart", function(){
                if(!$rootScope.isLogin && $location.path() == "/manage")
                    $location.path("/login");
            });
        });

        c.config(function(){
            console.log("Ctrl App config");
        });

        c.run(function(){
            console.log("Ctrl App run");
        });

      c.controller("SignupController", function($scope){  
              $scope.stateList = [
                  {"stateId":1, "Name":"Karnataka"},
                  {"stateId":2, "Name":"Maharashtra"},
                   {"stateId":3, "Name":"Tamil Nadu"}
                ];
              //watches model          
              $scope.$watch("user.state", function(newval, oldval){
                  console.log("Old: " + oldval + " New : " + newval);
                  if(newval == 1){
                      $scope.cityList = [
                  {"cityId":101, "Name":"Bangalore"},
                  {"stateId":201, "Name":"Mangalore"},
                   {"stateId":301, "Name":"Mysore"}
                ];
                  } else if(newval == 2){
                      $scope.cityList = [
                   {"cityId":401, "Name":"Mumbai"},
                   {"stateId":501, "Name":"Pune"},
                   {"stateId":601, "Name":"Nagpur"}
                ];
                  }
              });
          
        });
                     

     c.controller("MenuController", function($scope, MenuServices, OrderServices){    
            $scope.itemsList = MenuServices.getAllMenuItems();    
            $scope.placeOrder = function(menuitem){
                var orderedItem = {"name": menuitem.name, "price": menuitem.price, "qty" :1,"amount":menuitem.price, "code": menuitem.code};
                OrderServices.addOrderedItem(orderedItem);
            }
            
             $scope.save = function(){
                if($scope.newmenuitem.id == undefined)
                    MenuServices.addMenuItem($scope.newmenuitem);
                 else 
                     MenuServices.updateMenuItem($scope.newmenuitem);
             }             
             
             $scope.delete = function(itemId, idx){
                 MenuServices.deleteMenuItem(itemId, idx);
             }
             
             $scope.edit = function (menuitem){
                 $scope.newmenuitem = angular.copy(menuitem);
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

       c.controller("LoginController", function($scope, $location, $rootScope){
          $scope.doLogin =  function(){
              
          } 
           
       });
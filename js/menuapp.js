
var app = angular.module("menuApp", ["CtrlModule","ngSanitize","ngRoute"]);

//only providers are available in root scope

app.config(function($routeProvider){
    console.log("Menu App config");
    $routeProvider.when("/", {templateUrl: "partials/home.html"});
    $routeProvider.when("/menu", {templateUrl: "partials/menu.html"});
    $routeProvider.when("/cart", {templateUrl: "partials/cart.html"});
    $routeProvider.when("/manage", {templateUrl: "partials/managemenu.html",controller : "MenuController"});
    $routeProvider.otherwise({template: " <img class='img-responsive home-page' src='media/404.png' alt='404'>"});
    $routeProvider.when("/signup",{templateUrl: "partials/signup.html", controller: "SignupController"});
});

app.run(function($rootScope){
    console.log("Menu App run");
    $rootScope.isLogin = false;
});

//custom filter
app.filter("truncate", function(){
    
    return function(input, param){
       return input.length<= param ? input : input.substring(0,param) + "...";
    }
});
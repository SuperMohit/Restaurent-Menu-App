//create a module demo app
var m = angular.module("demoApp",[]);

m.controller("FirstController", function(){
    //define a model
    this.msg = "This is a First controller message";
    //define a behaviour
    this.doIt = function(){
        alert("First Controller ALERT message");
    }
});


m.controller("DemoController", ["$scope",function(a){
    //define a counter model    
    a.counter= 0;
    a.incrementCounter = function(){
    a.counter++;
    }
    
    document.getElementById("mybutton").addEventListener("click",function(){        
        a.counter++;
        console.log("counter is", a.counter);     
      //trigger digest loop
        a.$apply();
    })
    
}]);
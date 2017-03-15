var m = angular.module("serviceApp", []);
// Serviuces V F S P C
m.controller("ServicesController", function($scope, appTitle,myFactory, empFactory, StudentService, myTest){
    
});

//factory must return a value {value can be anything}
m.factory("empFactory",function(){

   var name="John";
   return {
       name:name
   }
});

m.factory("myFactory",function(appTitle){
   console.log("My factory function");
    return "My factory function " + appTitle;
});

m.value("appTitle", "My Angular Title");


//append provider with Provider myTest[Provider]
m.config(function(myTestProvider, orgname){
   
    console.log("Config" + orgname);
     orgname = "ABC, Marathalli";
    console.log("Config" + orgname);
    
    console.log("Provider config");
    myTestProvider.setMyString("Soc Gen Blr");
    
});

m.run(function(StudentService, myTest){
    console.log("running");
});

//setting happens in config phase
// get happens 

m.provider("myTest", function(){
    console.log("This is my test function");
    var myString  = "This is my string";
    this.setMyString = function(newval){
        myString = newval;
    }
    this.$get = function(){
        console.log("This is $get function");
    }
    
});

m.constant("orgname", "My Org Name");

//Value, Factory, Service, Provider 
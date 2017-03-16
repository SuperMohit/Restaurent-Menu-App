var m = angular.module("myDirectivesApp", []);

m.directive("myDiv", function(){
    return {
        restrict : "E",
        template : "My first custom tag directive"
    }
});

m.directive("myName", function(){
    return {
        restrict : "E",
        scope : true, //own scope not shared
        template : "<h1>{{fullname}}</h1>" ,
        link : function(s,e,a){
            s.fullname = a.firstname + " " + a.lastname;          
        }
    }
    
});

m.directive("namer", function(){
    return {
        restrict : "E",
          scope : true, 
        template : "<h1>{{fullname}}</h1>" ,
        link : function(s,e,a){
            s.fullname = a.firstname + " " + a.lastname;
            
        }
    }
    
});

m.directive("cnamer", function(){
    return {
        restrict : "C",
        scope : true, 
        template : "<h1>{{fullname}}</h1>" ,
        link : function(s,e,a){
            s.fullname = a.firstname + " " + a.lastname;
            
        }
    }
    
});


m.directive("hello", function(){
    return {
        restrict : "A",
        //scope, element, attrs
        link : function(s,e,a){
            e.text("Hello Custom directive : " + a.orgname);
            
        }
    }
});
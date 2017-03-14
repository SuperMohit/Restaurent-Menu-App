
var app = angular.module("menuApp", ["CtrlModule","ngSanitize"]);

app.config(function(){
    console.log("Menu App config");
});

app.run(function(){
    console.log("Menu App run");
});

//Register Value object
app.value("vorders", []);
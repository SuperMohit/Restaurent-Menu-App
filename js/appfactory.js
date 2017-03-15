var f = angular.module("FactModule", ['ngResource']);


f.factory("MenuFactory", function($resource){
      
    var menuItems;
    
    var menuResource = $resource("http://localhost:2403/wsmenuitems",{"id" :"@mid"});
    
     return{
         getMenuItems : function (){
             menuItems = menuResource.query();
             return menuItems;
         },
         
         addMenuItem :  function(newmenuitem){
             menuResource.save(newmenuitem, function(res){
                 console.log("Item saved");
                 menuItems.push(res);                       
                 }, function(err){
                    console.log("Error");
             })
         },
         
         deleteMenuItem : function(mid,idx){
             menuResource.remove({"id" : mid}, 
                function(res){
                 console.log("Success in removing item");
                 menuItems.splice(idx,1);
             },  function(err){
                 console.log("Error in removing item");
             })
             
         },
           updateMenuItem :  function(newmenuitem){
             menuResource.save(newmenuitem, function(res){
                 console.log("update success");
                                     
                 }, function(err){
                    console.log("Error");
             })
         }
         
    
     }
     
});

// factory of functions
f.factory("OrderFactory", function(){    
    var orderedItems = [];    
    
    return {
        getOrderedItems : function (){
            return orderedItems;
        }
    ,   
    addOrderedItem : function(item){
        orderedItems.push(item);
    },
    
    deleteOrderedItem : function(idx){
        orderedItems.splice(idx, 1);
    }
}
});
 
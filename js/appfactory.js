var f = angular.module("FactModule", []);


f.factory("MenuFactory", function(){
      
    var menuItems = [
            {"code": "VG01", "name": "Sandwich", "price": 120, "description": "Veg Sandwich"},
            {"code": "VG02", "name": "Burger", "price": 60, "description": "Veg burger"},
            {"code": "NV01", "name": "Ch Hog Dog", "price": 150, "description": "Non Veg Chicken Hog Dog"},
            {"code": "NV02", "name": "Mutton tikka", "price": 220, "description": "Mutton tikka"}];
    
     return{
         getMenuItems : function (){
             return menuItems;
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
 
var s = angular.module("SvcModule", ["FactModule"]);

s.service("MenuServices", function(MenuFactory){
    this.getAllMenuItems = function(){
        return MenuFactory.getMenuItems();
    }
});

s.service("OrderServices", function(OrderFactory){    
    
    this.getOrderedItems = function (){        
        return OrderFactory.getOrderedItems();
    }
    
    this.addOrderedItem = function (item){        
        OrderFactory.addOrderedItem(item);
    }
    
     this.deleteOrderedItem = function (item){        
        OrderFactory.deleteOrderedItem(item);
    }
     
     this.getTotalAmount = function(){
          var tot = 0;
          angular.forEach(this.getOrderedItems(),function(item){
                    tot += item.price * item.qty;
                });

          return tot;
     }
    
});
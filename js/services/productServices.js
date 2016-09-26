angular.module('shoppingCart').service('productService',["$http",function($http){
    
    
    $http.get("/service/inventory/").then(function(response){
            
            console.log("Logging from prodservc inventory by invtype_id");
        console.log("End of Response");
        
                opt.inventoryMain = response.data;
            
            console.log(opt.inventoryMain);
                
        });
    
     var opt = this;
    this.id=null;
    this.getMainList = function(){
        
     var url = "/service/inventory/"+opt.id;
        
        $http.get("url").then(function(response){
            
            console.log("Logging from prodservc inventory by invtype_id");
        console.log("End of Response");
        
                opt.inventoryMainIds = response.data;
            
            console.log(opt.inventoryMainIds);
                
        });
        
       
    }
    
}]);
angular.module("shoppingCart").controller("AppCtrl", ["$scope","productService", "producTypeService", function($scope,  productService, productTypeService){
    
    
    
     // $scope.title = "Hello and Welcome";
    
    $scope.inventoryTitle="";
    $scope.productTypes="";
//    console.log("From controller");
//    console.log(productTypeService.productTypes);
   
    
    
    $scope.$watch(function(){
        return productTypeService.productTypes;
            
    },
        function(newval, oldVal){
        if (oldVal !=  newval){
            console.log("from watch function from titleCtrl");
           console.log("New Val, inventory_type")
            console.log(newval);
            console.log("OLD Val, inventory_type");
            //console.log(oldVal);
            $scope.inventoryType=newval;
            
        
        }
    });
    
    
      $scope.$watch(function(){
        return productService.inventoryMainIds;
            
    },
        function(newval, oldVal){
        if (oldVal !=  newval){
            console.log("from watch function from AppCtrl");
            console.log("New val");
            console.log(oldVal);
            console.log("oldVal");
          
            $scope.inventoryMainIds=newval;
            
        }
    });
    
     $scope.$watch(function(){
        return productTypeService.getProductTypeIds;
            
    },
        function(newval, oldVal){
        if (oldVal !=  newval){
            console.log("from watch function from AppCtrl");
           
            console.log("New val");
            console.log(oldVal);
            console.log("oldVal");
          
            $scope.getProductTypeIds=newval;
            
             console.log(newval);
        }
    });
        
   $scope.call=function(id, name){

     productTypeService.id=id;
       productTypeService.getProductTypeIds();
       
       
      productService.id=id;
       productService.getMainList();   
      console.log($scope.id);
       cosnole.log($scope.name);
    
     

}
   
 
    
    
    
}]);


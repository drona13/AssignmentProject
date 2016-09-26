angular.module("shoppingCart").controller("products_controller", ["$scope", "productService", "productTypeService", function($scope, product_list_service, product_type_service){
  $scope.$watch(function(){
  return product_type_service.productTypeIds; 
  },function(newVal,oldVal){
  if (oldVal != newVal){
  console.log("FROM INVENTORY_TYPE by IDS LIST");
  console.log("NEW VAL")
  console.log(newVal);
  console.log("OLD VAL");
  console.log(oldVal);
  $scope.productTypeIds=newVal;
  }
});
    
    
}]);
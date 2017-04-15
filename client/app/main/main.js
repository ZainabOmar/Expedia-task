angular.module('expedia.main', [])

.controller('MainController', function ($scope, Expedia) {
  $scope.data = {};
  $scope.message = "Hello world";
  
  Expedia.getByDestination()
  .then(function(result){
  	console.log(result.data)
    $scope.data = result.data;
  })

})
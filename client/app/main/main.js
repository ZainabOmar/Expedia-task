angular.module('expedia.main', [])

.controller('MainController', function ($scope, Expedia) {
  $scope.data = {};
  $scope.message = "Hello world";
  
  Expedia.getByDestination()
  .then(function(data){
  	console.log(data)
    $scope.data = data;
  })

})
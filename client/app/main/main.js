angular.module('expedia.main', [])

.controller('MainController', function ($scope, $window, $location, Expedia) {
  $scope.data = {};

  Expedia.getByDestination()
  .then(function(data){
    $scope.data = data;
  })
  
})
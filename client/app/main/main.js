angular.module('expedia.main', [])

.controller('MainController', function ($scope, Expedia) {
	$scope.data = {};
	$scope.destination = {};
	$scope.length = {};

	$scope.searchByCity = function() {
		Expedia.getByCity($scope.destination)
		.then(function(result){
			console.log($scope.destination)
			$scope.data = result.data;
		})
		.catch(function (error) {
			console.error(error);
		});
	}

	$scope.searchByLength = function() {
		Expedia.getByLengthOfStay($scope.length)
		.then(function(result){
			$scope.data = result.data;
		})
		.catch(function (error) {
			console.error(error);
		});
	}
});
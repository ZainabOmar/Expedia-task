angular.module('expedia.main', [])

.controller('MainController', function ($scope, Expedia) {
	$scope.data = {};
	$scope.destination = {};

	$scope.search = function() {
		Expedia.getByDestination($scope.destination)
		.then(function(result){
			console.log(result)
			$scope.data = result.data;
		})
		.catch(function (error) {
			console.error(error);
		});
	}
});
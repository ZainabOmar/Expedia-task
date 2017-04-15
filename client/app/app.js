angular.module('expedia', [
	'expedia.services',
	'expedia.main',
	'ngRoute'
	])
.config(function ($routeProvider, $httpProvider) {
	$routeProvider
	.when('/', {
		templateUrl: 'app/main/main.html',
		controller: 'MainController'
	})
	.otherwise({redirectTo:'/'});
})

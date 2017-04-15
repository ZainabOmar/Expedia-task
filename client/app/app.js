angular.module('expedia', [
  'expedia.services',
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

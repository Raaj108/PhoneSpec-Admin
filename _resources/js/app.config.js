angular.module('adminApp').config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
  //$locationProvider.hashPrefix('!');

  $routeProvider
    .when('/dashboard', {
      template: '<dashboard-directive ></dashboard-directive>'
    })
    .when('/forms', {
      template: '<forms-directive ></forms-directive>'
    })
    .otherwise('/dashboard');
}]);

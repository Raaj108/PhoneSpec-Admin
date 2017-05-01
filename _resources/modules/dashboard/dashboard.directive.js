angular.module('dashboardModule')
  .directive('dashboardDirective', function () {
    return {
      restrict: 'EA',
      templateUrl: './_resources/modules/dashboard/dashboard.template.html',
      controller: 'dashboardController',
      replace: true
    }
  });

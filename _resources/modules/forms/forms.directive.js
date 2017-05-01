angular.module('formsModule')
  .directive('formsDirective', function () {
    return {
      restrict: 'EA',
      templateUrl: './_resources/modules/forms/templates/forms.template.html',
      controller: 'formsController',
      replace: true
    }
  });

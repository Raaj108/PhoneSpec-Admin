angular.module('formsModule').controller('formsController', ['$scope', '$log', 'phonePostFactory', '$location', '$anchorScroll', function ($scope, $log, phonePostFactory, $location, $anchorScroll) {
  $scope.formHeading = "Add a new phone to Database";
  $scope.sections = ["Basic", "Design", "Display", "Camera", "Battery", "Hardware", "Multimedia", "Connectivity", "network"];
  $scope.scrollTo = function (section) {
    // set the location.hash to the id of the element you wish to scroll to.
    $location.hash(section);
    // call $anchorScroll()
    $anchorScroll();
  }
  $scope.formData = {};
  $scope.submitPhone = function (isValid) {
    if (isValid) {
      phonePostFactory.processPhoneForm($scope.formData).then(function successCallback(response) {
        $log.info(response)
      }, function errorCallback(response) {
        $log.error(response);
      });
    }
  }
}]);

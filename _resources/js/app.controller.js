angular.module('adminApp')
  .controller('adminController', ['$scope', '$http', '$log', 'phoneGetFactory', function ($scope, $http, $log, phoneGetFactory) {
    $scope.brands;
    $scope.errors;


    $scope.readJson = function () {
      $scope.brands = [];
      $http({
        method: 'GET',
        url: 'brands.json'
      }).then(function successCallback(response) {
        angular.forEach(response.data.brands, function (value, key) {
          $scope.brands.push(value.brandName)
        });
      }, function errorCallback(response) {
        $log.error(response);
      });
    }

    $scope.getResult = function () {
      $scope.brands = [];
      $http({
        method: 'GET',
        url: 'http://phonespec-api.herokuapp.com/api/brand'
      }).then(function successCallback(response) {

        angular.forEach(response.data, function (value, key) {
          $scope.brands.push(value)
        })

      }, function errorCallback(response) {
        $log.error(response);
      });
    }

    $scope.getPhoneWithBrand = function (brand) {
      phoneGetFactory.getPhonesWithBrand(brand)
        .then(function successCallback(response) {
          $log.info(response)
        }, function errorCallback(response) {
          $log.error(response);
        });
    }

   

}]);

angular.module('formsModule').factory('phonePostFactory', ['$http', '$q', function ($http, $q) {

  var service = {};
  var baseUrl = 'http://localhost:5000/api/admin/brand/'
  var _url;

  var generateURL = function (_brand) {
    _url = baseUrl + _brand + '/phone';
    return _url;
  }

  service.processPhoneForm = function (phone) {
    console.log(phone)
    var _brand = phone.brandName;
    generateURL(_brand);

    var deferred = $q.defer();
    $http({
      method: 'POST',
      url: _url,
      data: phone,
      headers: {
        'Content-Type': 'application/json'
      }
    }).then(function successCallback(response) {
      deferred.resolve(response);
    }, function (response) {
      deferred.reject(response);
    })
    return deferred.promise;
  }
  return service;
}]);

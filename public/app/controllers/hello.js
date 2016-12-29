angular.module('demo', [])
.controller('Hello', function ($scope, $http) {
    $http.post('http://localhost:3000/api/jsonreadingprocess').
        then(function (response) {
            $scope.greeting = response.data;
          });
  });

angular.module('webDevUtils', [])
.controller('JsonReaderController', function ($scope, $http) {
    $http.get('http://localhost:3000/api/jsonreadingprocess').
        then(function (response) {
            $scope.jsonReaderResponse = response.data;
          });
  });

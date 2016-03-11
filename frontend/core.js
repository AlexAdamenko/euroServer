/**
 * Created by AlexAdamenko on 3/3/2016.
 */


var scotchTodo = angular.module('scotchTodo', []);

function mainController($scope, $http, $window) {
    $scope.formData = {};

    $http.get('/users')
        .success(function(data) {
            $scope.todos = data;
            console.log(data);
        })
        .error(function(data) {
            console.log('Error: ' + data);
        });

    $scope.sendMessage = function() {
        $http.get('/send');
        $window.location.reload();
    };

    $scope.sendPhotoMessage = function() {
        $http.get('/takePhoto');
        $window.location.reload();
    };

}

/**
 * Created by AlexAdamenko on 16/03/16.
 */


angular.module('routerApp.catalogueCtrl', [])

    .controller('mainPageController', ['$scope', '$http','$rootScope','$state', '$stateParams','$window', function ($scope,$http,$rootScope,$state, $stateParams, $window) {

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

    }])


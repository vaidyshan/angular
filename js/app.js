angular.module('myApp', [])
    .controller('myController', function ($scope, $timeout) {
        var updateClock = function () {
            $scope.clock = new Date();
            $timeout(function () {
                updateClock()
            }, 1000);
        };
        updateClock();
    });
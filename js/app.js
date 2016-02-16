angular.module('myApp', [])
    .controller('myController', function ($scope, $timeout) {
        $scope.clock = {};
        var updateClock = function () {
            $scope.clock.now = new Date();
            $timeout(function () {
                updateClock()
            }, 1000);
        };
        updateClock();
    });
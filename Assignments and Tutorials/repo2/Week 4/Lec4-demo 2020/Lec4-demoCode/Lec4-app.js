/*jslint white:true */
/*global angular */
/*
 * Solution for error message: 'angular' was used before it was defined by JSlint
 *  http://stackoverflow.com/questions/31390428/error-angular-was-used-before-it-was-defined-but-online-editors-able-to-outpu
 *
 */
var app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope) {
    "use strict";
    //FOR strVar
    $scope.strVar = "sample";
    $scope.anotherVar = -1;
    
    $scope.$watch ("strVar", function (newValue, oldValue){
            $scope.anotherVar += 1;
        }
    );
    
    
    //FOR numVar
    $scope.numVar = 0;
    $scope.someNum = 0;
    
    $scope.addValue  = function (num2add) {
        $scope.numVar = $scope.numVar + num2add;
    };
    
    $scope.incNum    = function () {
        $scope.numVar += 1;
    };
    
    $scope.isNumEven = function () {
        return (($scope.numVar % 2) === 0);
    };
    

});

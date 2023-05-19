var app = angular.module("statusApp", []);
app.controller ("statusCTRL", function ($scope){
    
    // List of status posts
    $scope.statusList = [];
    
    // Function to add a new post
    $scope.postStatus = function (status){
        $scope.statusList.push(status);
    }
    
    // Function to delete a post
    $scope.deleteStatus = function (index){
        $scope.statusList.splice(index, 1);
    }
});
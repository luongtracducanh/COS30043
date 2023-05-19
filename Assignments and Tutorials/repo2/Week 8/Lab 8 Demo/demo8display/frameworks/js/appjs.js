var app = angular.module("myApp", []);

app.controller("getCtrl", 
  function($scope, $http) {
    $http.get('data/posts.json')
      .then (
	    function(response) {
           $scope.posts = response.data;
         },
         function(response) {
           // error handling routine
      });
  });

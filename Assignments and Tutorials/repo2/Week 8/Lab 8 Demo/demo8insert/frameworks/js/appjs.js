var app = angular.module("myApp", []);

app.controller("postCtrl", 
  function ($scope, $http) {
    // property initialisation
    $scope.name = null;
    $scope.age = null;
    // define methods
    $scope.postData = function(name, age) {
    // Prepare the data
//If putmethod exist, aka the server responding to it.
        // var url = "/api/putmethod";
        // var data = JSON.stringify ({name: name, age: age});
		  //Call the services
		  //$http.post(url, data)
		  
//If no server side responding to it

	var data = JSON.stringify ({name: name, age: age});
	var url = "data:application/json;charset=UTF-8," + encodeURIComponent(data);
	
	var a = document.createElement('a');
	a.href = url;
	a.innerHTML = "Right-click and choose 'save as...'";
	document.body.appendChild(a);
    };
});


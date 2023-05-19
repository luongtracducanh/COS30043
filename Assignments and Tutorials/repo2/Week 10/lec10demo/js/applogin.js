var app = angular.module("myApp", ["ngRoute"]);

app.config(function ($routeProvider, $locationProvider) {
	$locationProvider.hashPrefix('!');
	$routeProvider.
		when("/persons", { 
            templateUrl: "templates/home.html" 
        }).
		when("/persons/:id", { 
            templateUrl: "templates/show.html", 
            controller: "showCtrl" 
        }).
		when("/login", { 
            templateUrl: "templates/login.html", 
            controller: "loginCtrl" 
        }).
		when("/help", { 
            templateUrl: "templates/help.html" 
        }).
		otherwise( { 
            redirectTo: "/persons" 
        });
});
	
app.run(function ($rootScope, $location) {
	$rootScope.$on("$routeChangeStart", function (event, next, current) {
		if ($rootScope.loggedInUser == null) {
			// no logged user, redirect to /login
			if (next.templateUrl === "templates/login.html") {
			  // if in log in page
			} else {
				$location.path("/login");
			}
		}
	});
});

app.factory("Person", function() {
  var persons = [
    { name: "Alice", age: 25, id: 1 },
    { name: "Billy", age: 35, id: 2 },
    { name: "Chris", age: 22, id: 3 },
    { name: "David", age: 24, id: 3 }
  ];

  return {
    all: function() {
      return persons;
    },
    get: function(id) {
      var result = null;
      angular.forEach(persons, function(p) {
        if (p.id == id) result = p;
      });
      return result;
    }
  };
});

app.controller("homeCtrl", function ($scope, Person) {
  $scope.persons = Person.all();
});

app.controller("showCtrl", function ($scope, $routeParams, Person) {
  $scope.person = Person.get($routeParams.id);
});

app.controller("loginCtrl", function ($scope, $location, $rootScope) {
  // log in check
  $scope.login = function () {
    $rootScope.loggedInUser = $scope.username;
    $location.path("/persons");
  };
});

app.controller("myCtrl", function ($scope, $location, $rootScope) {
  $scope.menuClass = function (page) {
    var current = $location.path().substring(1);
    return page === current ? "active" : "";
  };
  $scope.logout = function ($scope){
    $rootScope.loggedInUser = null;
		$location.path("/login");
	}
});
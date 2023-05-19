var app = angular.module("myApp", ["ngRoute"]);

app.config(function($routeProvider, $locationProvider) {
    $locationProvider.hashPrefix('!');
    $routeProvider.
      when("/persons", { 
            templateUrl: "templates/home.html" 
        }).
      when("/persons/:id", { 
            templateUrl: "templates/show.html", 
            controller: "showCtrl" 
        }).
      when("/help", { 
            templateUrl: "templates/help.html" 
        }).
      otherwise( { 
            redirectTo: "/persons" 
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
        if (p.id == id) {
            result = p;
        }
      });
      return result;
    }
  };
});

app.controller("myCtrl", function($scope, $location) {
  $scope.menuClass = function(page) {
    var current = $location.path().substring(1);
    return page === current ? "active" : "";
  };
});

app.controller("homeCtrl", function($scope, Person) {
  $scope.persons = Person.all();
});

app.controller("showCtrl", function($scope, $routeParams, Person) {
  $scope.person = Person.get($routeParams.id);
});



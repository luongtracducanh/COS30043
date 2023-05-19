var app = angular.module('myApp', ["ngRoute"]);

//Routing Implementation
app.controller("myCtrl", function($scope){
   $scope.students = [
        {name:'Amy',age:26}, 
        {name:'Dolly',age:18}, 
        {name:'Cat',age:21}, 
        {name:'Ben',age:24}
   ];
});

app.config(function($routeProvider){
    $routeProvider
    .when("/students",{
        templateUrl: "lec5-templates/students.html",
        controller: "myCtrl"
    })
    .when("/studentdetails",{
        templateUrl: "lec5-templates/studentDetails.html",
        controller: "myCtrl"
    })
    .otherwise({
        redirectTo: "/students"
    });
});
            


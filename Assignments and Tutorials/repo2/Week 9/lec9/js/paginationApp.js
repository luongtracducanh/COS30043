'use strict';
var app = angular.module("myApp", ["bootstrap-modal"]);

// Pagination with Client-Side Data
app.filter("offset", function () {
	return function (input, start) {
		start = parseInt(start, 10);
		return input.slice(start);
	};
});

app.controller("paginationCtrl1", function ($scope) {
	$scope.studentsPerPage = 5;
	$scope.currentPage = 0;
    
	//1
    //Auto-generate 50 Dummy Students
	$scope.students = [];
	for (var i = 0; i < 50; i++) {
		$scope.students.push({id: i, name: "Student " + i });
	}
    
    //Count how many pages needed to display all students
    // This math.cell return 10 in this case: students.length = 50 & studentsPerPage = 5
	$scope.pageCount = function() {
		return Math.ceil($scope.students.length/$scope.studentsPerPage) - 1;
	};
    
	//3
    //setting number for pagination button to be display
	$scope.range = function () {
		var rangeSize = 5;
		var numForPagiBtns = [];
		var start = $scope.currentPage;
		if (start > $scope.pageCount() - rangeSize ) {
			start = $scope.pageCount() - rangeSize + 1;
		}
		for (var i=start; i<start + rangeSize; i++) {
			numForPagiBtns.push(i);
		}
		return numForPagiBtns;
	};
    
    
    //Set the current page to the number pressed by user in pagination
	$scope.setPage = function(n) { 
		$scope.currentPage = n; 
	}; 
    
    //Some navigating function for pagination 
	$scope.prevPage = function() {
		if ($scope.currentPage > 0) {
			$scope.currentPage--;
		}
	};
	$scope.prevPageDisabled = function() {
		return $scope.currentPage === 0 ? "disabled" : "";
	};
	$scope.nextPage = function() {
		if ($scope.currentPage < $scope.pageCount()) {
			$scope.currentPage++;
		}
	};
	$scope.nextPageDisabled = function() {
		return $scope.currentPage === $scope.pageCount() ? "disabled" : "";
	};
});



// Defining Factory for the other two controllers usage.
//In this example, internal data is used. but you can 
//use $http to grab the data and inject the data into the app.
app.factory("Student", function() {
	var students = [];
	var service = {};
	for (var i = 0; i < 50; i++) {
		students.push({id: i, name: "student " + i});
	}
	service = {
			get: function(offset, limit) {
				return students.slice(offset, offset+limit);
			},
			total: function() {
				return students.length;
			}
		};
	return service;
});

// Pagination with Server-Side Data 
// This is similar to the client side implementation but you will need 
// A factory to load the data from $http and inject it 
//  - Injecting Student Factory (define earlier)   V--- here
app.controller("paginationCtrl2", function($scope, Student) {
	$scope.studentsPerPage = 5;
	$scope.currentPage = 0;
	//the $scope.total already content the data students.length
	$scope.pageCount = function() {
		return Math.ceil($scope.total/$scope.studentsPerPage);
	};
    
	$scope.range = function() { 
		var rangeSize = 5; 
		var numForPagiBtns = []; 
		var start = $scope.currentPage; 
			if (start > $scope.pageCount() - rangeSize ) { 
				start = $scope.pageCount() - rangeSize; 
			} 
		for (var i=start; i<start + rangeSize; i++) { 
			numForPagiBtns.push(i); 
		} 
		return numForPagiBtns; 
	}; 
    

	$scope.$watch("currentPage", function(newValue, oldValue) {
		$scope.pagedStudents = 
            Student.get(newValue*$scope.studentsPerPage, $scope.studentsPerPage);
		$scope.total = Student.total();
	});    
    
    
	$scope.setPage = function(n) { 
		if (n > 0 && n < $scope.pageCount()) { 
			$scope.currentPage = n; 
		} 
	}; 
	$scope.prevPage = function() {
		if ($scope.currentPage > 0) {
			$scope.currentPage--;
		}
	};
	$scope.prevPageDisabled = function() {
		return $scope.currentPage === 0 ? "disabled" : "";
	};
	$scope.nextPage = function() {
		if ($scope.currentPage < $scope.pageCount() - 1) {
			$scope.currentPage++;
		}
	};
	$scope.nextPageDisabled = function() {
		return $scope.currentPage === $scope.pageCount() - 1 ? "disabled" : "";
	};

});




// Pagination with Server-Side Data using Load More 
// - Injecting Student Factory (define earlier)
app.controller("paginationCtrl3", function($scope, Student) {
	$scope.studentsPerPage = 5;
	$scope.currentPage = 0;
	$scope.total = Student.total();
	$scope.pageCount = function() {
		return Math.ceil($scope.total/$scope.studentsPerPage);
	};
	//4
	//grabbing data from the previous injected student
	//The data grabed and assigned to pagedstudent is limited to the amount of allowed in a page
	$scope.pagedStudents = 
        Student.get($scope.currentPage*$scope.studentsPerPage,	$scope.studentsPerPage);
    
	//5
	//create new var to grab additional data from Student thus the current page+1 
	$scope.loadMore = function() {
		$scope.currentPage++;
		var newStudents = Student.get($scope.currentPage*$scope.studentsPerPage, $scope.studentsPerPage);
	//combine the data obtained from var above into the previous pagedStudent which later printed in step 4
		$scope.pagedStudents = $scope.pagedStudents.concat(newStudents);
	};
    
    //Disable the Load More button when complete listing all students
	$scope.nextPageDisabledClass = function() {
		return $scope.currentPage === $scope.pageCount()-1 ? "disabled" : "";
	};
});



// editable content
app.directive("contenteditable", function() {
	var direc = {};
	direc.restrict = "A";
    
    //mapping to data-ng-model directive in <div>
	direc.require = "ngModel";		
    
	direc.link = function(scope, element, attrs, ngModel) {
			function read() {
					ngModel.$setViewValue(element.html());
			}
			ngModel.$render = function() {
				element.html(ngModel.$viewValue || "");
			};
			element.bind("blur keyup change", function() {
				scope.$apply(read);
			});
		};
    
	return direc;
});


// Modal Controller
app.controller("myModalCtrl", function($scope) {
	$scope.showModal = false;
	$scope.open = function() {	
		$scope.showModal = true;	
	};
	$scope.ok = function() {
		$scope.showModal = false;
	};
	$scope.cancel = function() {
		$scope.showModal = false;
	};
});

var app = angular.module ("myApp", []);

app.controller("myctrl1", function($scope, StudentData){
	//1
    $scope.students = StudentData.students;
	//2 If remove button clicked, the $index in that data-ng-repeat would be pass as val below.
	$scope.remove = function(val){
		StudentData.removeStudent(val);
	}
});

app.controller("myctrl2", function($scope, StudentData){
    $scope.students = StudentData.students;
    //3
    //New Student added to the service object
    StudentData.addStudent("Dave", 19);
});

app.controller("myctrl3", function($scope, StudentData){
    $scope.add = function(){
        StudentData.addStudent($scope.stdName, $scope.stdAge);
        $scope.stdName = "";
        $scope.stdAge = "";
    }
});
/*
//create an object called var fac put it inside the StudentData for use above
//------------v this one need to be the name that you use in the controller above.
app.factory("StudentData", function(){
    var fac = {};
    fac.title = "Demo";
    fac.students = [
        { "name": "Daryl", "age": 20 },
        { "name": "Billy", "age": 22},
        { "name": "Kyo", "age": 19}
    ];
    //function to push aka add data into fac array which would be added to the studentdata when returned
    fac.addStudent = function(n, a){
        if(n != null && a != null)
            this.students.push({name: n, age: a});
    }
	//2 the removestudent factory will splice aka remove the data from that index
	fac.removeStudent = function(i){
		this.students.splice(i, 1);
	}
    
    return fac;
}); 
*/
//Manipulate the StudentData directly

app.service("StudentData", function(){
    this.students = [
        { "name": "Amy", "age": 25 },
        { "name": "Ricky", "age": 23},
        { "name": "Jessie", "age": 18}
    ];
    
    this.addStudent = function(n, a){
        if(n != null && a != null)
            this.students.push({name: n, age: a});
    }
	
	this.removeStudent = function(i){
		this.students.splice(i, 1);
	}
});
 

/* //-----------Provider working with Config-------------------------------
app.provider("StudentData", function(){
    var tempadd =  function(n, a){
        if(n != null && a != null)
            this.students.push({name: n, age: a});
    }
	
	var tampremove = function(i){
		this.students.splice(i, 1);
	}
	
    var that = this;
    this.$get = function(){
        return {
            addStudent: tempadd,
            removeStudent: tampremove,
            students: that.dataSetup
        }
    }
}); 

app.config(function(StudentDataProvider){
    //Initializing Student Data during the configuration state
    StudentDataProvider.dataSetup = [
        { "name": "Alice", "age": 20 },
        { "name": "Billy", "age": 22},
        { "name": "Chris", "age": 25}
    ];
    
});
//------------------------------------------------------
 */

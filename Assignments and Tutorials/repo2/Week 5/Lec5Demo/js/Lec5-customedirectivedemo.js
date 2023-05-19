var app = angular.module('myApp', []);


//Custom Directive Implementation
//NOTE: the directive name in html was ng-demo1 but in javascript is ngDemo1 (hyphen-case to camelCase)
app.directive('ngDemo1', function () {
    var direc = {};     // Create an empty object
    var linkFunction = function (scope, element, attributes) {
        scope.text = attributes["ngDemo1"];  // or attributes.ngDemo1;
    };

    direc.restrict = 'A'; //E - Element, A - Attribute, C - Class, M - Comment
    direc.link = linkFunction;
    direc.template = '<div><p>{{text}}</p></div>'; // text bind to the scope.text in linkFunction
    direc.scope = {};     //Special Setting to avoid instance's scope overring.

    return direc;
});

/* Simplified Version of above custome directive - Commonly Style
app.directive('ngDemo1', function(){
    return {
        restrict: 'A',
        link: function(scope, element, attributes){
            scope.text = attributes["ngDemo1"];
        },
        template: '<div><p>{{text}}</p></div>',
        scope: {}
    };
});
*/

app.directive('ngDemo2', function () {
    var direc = {};
    var linkFunction = function (scope, element, attributes) {
        /* Evaluates attribute before assigning it into a model */
        scope.items = scope.$eval(attributes.ngDemo2);
    };

    direc.restrict = 'A';
    direc.link = linkFunction;
    direc.template = '<div data-ng-repeat="item in items"><p>{{item}}</p></div>';
    direc.scope = {};

    return direc;
});

app.directive('ngSimpledirec', function(){	
    return{
		template: '<div>The simplest one you can get</div>'
	};
});

app.directive('ngElementdemo',function(){
	
	var direc2 ={};
	direc2.restrict ='E';
	direc2.template ='<div>This is how you use element directive</div>';
	return direc2;
});

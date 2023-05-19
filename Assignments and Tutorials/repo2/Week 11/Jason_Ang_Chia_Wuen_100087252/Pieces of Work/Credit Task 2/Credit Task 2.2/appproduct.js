var app = angular.module("productApp", []);

app.directive("product", function(){
    // Directive Object
    var directive = {};
    
    // Link Function (Bootstrap Styling Included)
    var linkFunction = function($scope, element, attributes){
        element.html("<div class='col-md-3' style='border:2px solid black;margin-top:1%;'><h4 class='text-center text-info'>"+ $scope.product.model + "</h4><p class='text-center text-info'><b>Price:</b> RM " + $scope.product.price + "<p><img class='img-rounded img-responsive' src=" + $scope.product.image + " /></div>");
    }
    
    // Restrict to element, link to link function, template blank as not needed
    directive.restrict = "E";
    directive.link = linkFunction;
    directive.template = "";
    
    // Prevents overlapping of data by uniquely indentify them by model
    directive.scope = {
        product : "=model"
    };
    
    return directive;
});

app.controller("productController", function($scope){
    // Using Objects to provide data
    $scope.model1 = {};
    $scope.model1.model = "Apple IPhone XS";
    $scope.model1.price = "4999";
    $scope.model1.image = "iphone.jpg";
    
    $scope.model2 = {};
    $scope.model2.model = "Samsung Galaxy S10 Plus";
    $scope.model2.price = "3499";
    $scope.model2.image = "samsung.jpg";
    
    $scope.model3 = {};
    $scope.model3.model = "Huawei MATE 20 Pro";
    $scope.model3.price = "2999";
    $scope.model3.image = "huawei.jpg";
    
    $scope.model4 = {};
    $scope.model4.model = "ONEPLUS 6T";
    $scope.model4.price = "1999";
    $scope.model4.image = "oneplus.jpg";

});
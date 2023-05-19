var app = angular.module('myApp', []);

//Custom Filter Implementation
app.filter("num2words", function() {
    return function (myNum) {
        var ans = "";
        switch (myNum) {
        case 0:
            ans = "Zero";
            break;
        case 1:
            ans = "One";
            break;
        default:
            ans = "Not One or Zero";
            break;
        }
        return ans;
    };
});


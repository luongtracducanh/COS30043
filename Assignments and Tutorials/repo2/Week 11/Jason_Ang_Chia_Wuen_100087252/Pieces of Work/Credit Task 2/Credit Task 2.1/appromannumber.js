var app = angular.module("romanApp", []);

// Filter Section
app.filter("romanFilter", function(){
    return function(number){
        
        // Empty Input
        if (isNaN(number)){
             return "Roman Numerals will be displayed here";
        }
            
        var digits = String(+number).split(""),
        key = ["","C","CC","CCC","CD","D","DC","DCC","DCCC","CM","","X","XX","XXX","XL","L","LX","LXX","LXXX","XC","","I","II","III","IV","V","VI","VII","VIII","IX"],
            
        roman = "",
        i = 3;
        while (i--){
            roman = (key[+digits.pop() + (i * 10)] || "") + roman;
        }
        return roman;
    };
})

app.controller ("romanCTRL", function ($scope){
    
});
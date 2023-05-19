var app = angular.module("zeApp", []);
app.controller("zeController", function ($scope){
    
    $scope.randomDisplay = "";
    $scope.feedback = "Start guessing!"
    
    // Function to Check Guessed Number
    $scope.checkNumber = function (guess){
        if (guess == $scope.random){ // Guessed Correctly
            $scope.feedback = "You got it!";
        } else if(guess > $scope.random){ // Guessed Number Higher
            $scope.feedback = "Guess lower.";
        } else if (guess < $scope.random){ // Guessed Number Lower
            $scope.feedback = "Guess higher."
        } else{
            $scope.feedback = "Please input correctly."
        }
    }
    
    // Function to Reveal the Random Number
    $scope.showRandomNumber = function(){
        $scope.randomDisplay = "The random number is " + $scope.random + "!";
    }
    
    // Function to Generate Random Number
    $scope.generateRandomNumber = function(){
        $scope.random = Math.floor(Math.random() * 100) + 0;
    }
    
    // Function to Restart the Game
    $scope.restartGame = function(){
        $scope.randomDisplay = "";
        $scope.feedback = "Start guessing!";
        $scope.generateRandomNumber();
    }
    
    $scope.generateRandomNumber();
});
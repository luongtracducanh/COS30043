new Vue({
    el:'#app',
    data: {guess:0, msg:'', secret:0},
    methods: {
        genRandomNum: function() {
            return Math.floor(Math.random() * 100) +1;
        },

        checkGuess: function () {
            if (this.guess < 1 || this.guess >100)
            {
                this.msg ="The number must be from 1 to 100"
            } else {
                if (this.guess - this.secret > 0)
                    this.msg = "Guess lower.";
                else if(this.guess - this.secret < 0)
                    this.msg = "Guess higher.";
                else
                    this.msg = "You got it.";
            }
        },

        startOver: function() {
            this.msg = "Start guessing.";
            this.secret = this.genRandomNum();
        },

        giveUp: function() {
            this.msg = "The secret number is " + this.secret;
        }
    },
    created: function() {
        this.msg = "Start guessing.";
        this.secret = this.genRandomNum();
    }
})
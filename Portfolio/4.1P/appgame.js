Vue.createApp({
  data() {
    return {
      guess: 0,
      secret: this.genRandomNum(),
      msg: "Start guessing.",
    };
  },
  methods: {
    genRandomNum: function () {
      return Math.floor(Math.random() * 100) + 1;
    },
    checkGuess: function () {
      if (this.guess == this.secret) {
        this.msg = "You got it!";
      } else if (this.guess > this.secret) {
        this.msg = "Guess lower.";
      } else {
        this.msg = "Guess higher.";
      }
    },
    giveUp: function () {
      this.msg = "The number was " + this.secret + ".";
    },
    startOver: function () {
      this.secret = this.genRandomNum();
      this.guess = 0;
      this.msg = "Start guessing.";
    },
  },
}).mount("#app");

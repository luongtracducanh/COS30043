const app = Vue.createApp({});

app.component(
  "app-mypost", // indicating the component tag
  {
    // defining data to be used in the component
    data: function () {
      return {
        statPosts: [],
        strStatus: "",
      };
    },
    // define the template for the component
    template:
      // your code here
      '',
    // defining the methods for add and remove status messages
    methods: {
      add: function (status) {
        // push status into statPosts array
        this.strStatus.push(status);
      },
      remove: function (index) {
        // delete status from statPost using index
        this.strStatus.splice(index, 1);
      },
    },
  }
);
app.mount("#app");

// Vue.createApp({
//   data() {
//     return {
//       statPosts: [],
//       strStatus: "",
//     };
//   },
//   methods: {
//     add: function (status) {
//       this.statPosts.push(status);
//     },
//     remove: function (index) {
//       this.statPosts.splice(index, 1);
//     },
//   },
// }).mount("#app");

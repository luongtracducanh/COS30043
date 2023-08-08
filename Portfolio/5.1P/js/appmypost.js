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
      `
      <div>
        <p>
          <b>Status:</b>&nbsp;<input v-model="strStatus" />&nbsp;
          <button v-on:click="add(strStatus)">Post</button>
        </p>
        <p v-for="(status, index) in statPosts" :key="index">
          {{ status }}
          <button v-on:click="remove(index)">Del</button>
        </p>
      </div>
      `,
    // defining the methods for add and remove status messages
    methods: {
      add: function (status) {
        // push status into statPosts array
        this.statPosts.push(status);
        // clear strStatus after posting
        this.strStatus = "";
      },
      remove: function (index) {
        // delete status from statPost using index
        this.statPosts.splice(index, 1);
      },
    },
  }
);
app.mount("#app");

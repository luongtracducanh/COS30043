const Dashboard = {
  // defining data to be used in the component
  data: function () {
    return {
      tab: null,
      items: ["View", "Insert", "Update", "Delete"],
    };
  },

  // define the template for the component
  template: `
  <div id="dashboard">
    <v-card>
      <v-card-title class="text-center justify-center py-6">
        <h1 class="font-weight-bold display-3 basil--text">Dashboard</h1>
      </v-card-title>
      <v-card-text>
        <v-tabs v-model="tab" background-color="transparent" color="basil" grow>
          <v-tab v-for="item in items" :key="item"> {{ item }} </v-tab>
        </v-tabs>
          <v-card flat>
            <app-read v-if="tab==0"></app-read>
            <app-post v-show="tab==1"></app-post>
            <app-update v-show="tab==2"></app-update>
            <app-delete v-show="tab==3"></app-delete>
          </v-card>
      </v-card-text>
    </v-card>
  </div>
  `,
};

// Create VueRouter instance
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes: [
    {
      path: "/login",
      component: Login,
      name: "login",
    },
    {
      path: "/logout",
      name: "logout",
    },
    {
      path: "/dashboard",
      component: Dashboard,
      name: "dashboard",
    },
  ],
});

// Create Vue instance
const app = Vue.createApp({
  data: function () {
    return {
      authenticated: false,
      authenticatedUser: "",
      error: false,
      errorMsg: "",
    };
  },
  mounted() {
    if (!this.authenticated) {
      this.$router.replace({ name: "login" });
    }
  },
  methods: {
    setAuthenticated(status) {
      this.authenticated = status;
    },
    logout() {
      this.authenticated = false;
    },
  },
});

// Create components
app.component("app-nav", {
  template: `
  <div>
    <v-spacer></v-spacer>
    <v-btn>
      <router-link to="/login" v-on:click="logout()" replace
        >Logout<v-icon>mdi-logout</v-icon></router-link
      >
      <!-- replace: the navigation will not leave a history record.  -->
    </v-btn>
  </div>
  `,
  methods: {
    logout() {
      this.$root.logout();
    },
  },
});

// Register components
app.component("app-read", ReadData);
app.component("app-post", PostData);
app.component("app-update", UpdateData);
app.component("app-delete", DeleteData);

// Create Vuetify instance and use it
const vuetify = Vuetify.createVuetify();
app.use(vuetify);
app.use(router);
app.mount("#app");

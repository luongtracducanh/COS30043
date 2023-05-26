// Creating the VueRouter

const router = VueRouter.createRouter({
	history: VueRouter.createWebHashHistory(), 
	routes: [
	{
		path: '/login',
		component: Login,
		name:"login"
	},
	{
		path: '/logout',
		name:"logout"
	},
	{
		path: '/dashboard',
		component: Dashboard,
		name:  'dashboard'
	}
  ]
})

//create new vue instance  
const app = Vue.createApp({

  data: function () {
	  return{
		authenticated: false,
		authenticatedUser: '',
		error:false,
		errorMsg:'',
  }
  },
   mounted() {
        if(!this.authenticated) {
                this.$router.replace({ name: "login" });
            }
        },
	methods: {
		setAuthenticated(status) {
			this.authenticated = status;

		},
		logout(){
		  this.authenticated=false;
		}
	},  
    
});
app.component('app-nav', {

  template: `
	<div>
    <v-spacer></v-spacer>
    <v-btn>
        <router-link  to="/login" v-on:click="logout()" replace>Logout<v-icon>mdi-logout</v-icon></router-link>
		          <!-- replace: the navigation will not leave a history record.  -->
    </v-btn>
    </div>
  `,
    methods: {
      logout() {
          this.$root.logout();
      }
    }
     
});
app.component('app-readmysql', ReadMysql)
app.component('app-postdata', PostData)
app.component('app-deldata', DelData)
app.component('app-putdata', PutData)


const vuetify = Vuetify.createVuetify( )   
app.use(vuetify)
app.use(router)
app.mount('#app')
//Defining the list of subjects in an array
var subjects = [
  {
    code: "Math",
    desc: "We learn Mathematics in this unit.",
  },
  {
    code: "English",
    desc: "There are lots of fun classes",
  },
  {
    code: "Dancing",
    desc: "Dancing classes with excellent teachers",
  },
];

// creating a component to pass in the router
const Subject = {
  data: function () {
    return { subjects };
  },

  //A dynamic segment is denoted by a colon :   When a route is matched, the value of the dynamic segments will be exposed as this.$route.params

  template: `<div>
		<hr>
		<h2>Details of {{ $route.params.id }}</h2> 
		<ul v-for="unit in filteredUnits">
			<li><strong>Code: </strong>{{unit.code}}</li>
			<li><strong>Description: </strong>{{unit.desc}}</li>
		</ul>
	</div>`,

  computed: {
    //returns the selected subjects
    filteredUnits: function () {
      return this.subjects.filter((s) =>
        s.code.toLowerCase().match(this.$route.params.id.toLowerCase())
      );
    },
  },
};

// Creating the Router
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),

  routes: [{ path: "/subject/:id", component: Subject }], //defining path and component mapping
});

//Creating new Vue instance
const app = Vue.createApp({});

// creating component for the lookup table
app.component("example_component", {
  data: function () {
    return { subjects };
  },

  //defining template
  template: `
		<div>
			<h2>Subject Information</h2>
			<table >
				<tr>
					<th>Code</th>
					<th>Description</th>
					<th>More Info</th>
				</tr>
				<tr v-for="s in subjects">
					<td>{{ s.code }}</td>
					<td>{{ s.desc }}</td>
					<td><router-link :to="{ path:'/subject/'+s.code }">Read More</router-link></td>
				</tr>
			</table>
			
			<router-view ></router-view>		
		</div> `,
});

app.use(router);
app.mount("#app");


const app = Vue.createApp({ })

//************************    getJSON ************************
var readJsonURL = 'data/persons.json' //define url for json file
app.component('app-readjson', {
  // define the template for the component
  template: `
  <v-row>
  	<v-col cols="12" md="12 ">
  		<v-card class="mx-auto" max-width="90%">
  			<v-card-title>
  				<h2>Reading from JSON File</h2>
  			</v-card-title>
  			<v-card-text>
  				<ul>
  					<li v-for="person in persons">
  						{{ person.name }}
  					</li>
  				</ul>
  			</v-card-text>
  		</v-card>
  	</v-col>
  </v-row>
   `,
  data: function() {
    return {
      persons: []
    }
  },
  //mounted function is called when the app is mounted
  mounted() {
    var self = this
    $.getJSON(readJsonURL, function(data) {
      self.persons = data;
    })
  }
})

//************************    getJSON from jsonplaceholder  ************************
var readExtApiURL = 'https://jsonplaceholder.typicode.com/posts/1'
app.component('app-readextapi', {
  template: `
  <v-row>
   <v-col cols="12" md="12 ">
     <v-card class="mx-auto" max-width="90%">
       <v-card-title>
         <h2>Reading from RESTful API #1 (Cross Origin):Reading 1 record from https://jsonplaceholder.typicode.com/</h2>
       </v-card-title>
       <v-card-text>
         <p>User ID: {{fakePost.userId}}</p>
         <p>Title: {{fakePost.title}}</p>
         <p>Text: {{fakePost.body}}</p>
       </v-card-text>
     </v-card>
   </v-col>
  </v-row>
   `,
  data: function() {
    return {
      fakePost: []
    }
  },
  mounted() {
    var self = this
    $.getJSON(readExtApiURL, function(data) {
      self.fakePost = data;
    })
  }
})
// *********************************** fetch   GET **************************
var readSQLApiURL = 'resources/apis.php/'
app.component('app-readmysql', {
  template: `
  <v-row>
   <v-col cols="12" md="9 ">
     <v-card class="mx-auto" max-width="90%">
       <v-card-title>
         <h2>Reading from RESTful API #2 (Same Origin): Reading all records from MySQL table</h2>
       </v-card-title>
       <v-card-text>
       <ul class="list-group">
         <li class="list-group-item" v-for="person in persons" >
           <img v-bind:src='person.fpath' class="img-rounded" alt="smiley" height="30" />
           {{person.name}} {{person.age}}  
         </li>
       </ul>
       </v-card-text>
     </v-card>
   </v-col>
   
    <!-- Messages -->
  	<v-col cols="12" md="3">
  		<v-card class="mx-auto" max-width="90%">
  			<v-card-text>
  				<p>Message : {{ msg }}</p>
  				<p>Error: {{err}}</p>
  			</v-card-text>
  		</v-card>
  	</v-col>
  </v-row>

   `,
  data: function() {
    return {
      persons: [],
	  err:'',
	  msg:''
    }
  },
  created() {
    var self = this
    // GET request using fetch with error handling
    fetch(readSQLApiURL)			 
			.then( response =>{
			  //turning the response into the usable data
			  return response.json( );
			})
			.then( data =>{
			  //This is the data you wanted to get from url
			  self.persons=data;
			  self.msg="Successful!";
			})
			.catch(error => {
			  self.err=error
			});
  }
})
// ***********************************  fetch  POST  **************************

var postSQLApiURL = 'resources/apis.php/'
app.component('app-postdata', {
  template: `
  <v-row>
  	<v-col cols="12" md="9">

  		<v-card class="mx-auto" max-width="90%">
      <v-card-title>
        <h2>Posting with RESTful API: Inserting into MySQL Table</h2>
      </v-card-title>
  			<v-card-text>

  				<v-form>

  					<v-text-field label="Name" v-model="name1" />
  					</v-text-field>
  					<v-text-field label="Age" v-model="age1" />
  					</v-text-field>


  					<v-radio-group label="Smiley Color" v-model="imgVar">
  						<v-radio label="White" value="1"></v-radio>
  						<v-radio label="Yellow" value="2"></v-radio>
  					</v-radio-group>


  					<v-btn depressed v-on:click="postData(name1,age1, imgVar)" color="primary">
  						Add
  					</v-btn>

  				</v-form>
  			</v-card-text>

  		</v-card>

  	</v-col>
  	<!-- Output -->
  	<v-col cols="12" md="3">
  		<v-card class="mx-auto" max-width="90%">
  			<v-card-text>
  				<p>Output Message : {{ msg }}</p>
  				<p>Error: {{err}}</p>
  			</v-card-text>
  		</v-card>
  	</v-col>
  </v-row>


   `,
  data: function() {
    return {
      age1: '',
      name1: '',
      msg: '',   
      imgVar: '',
	  err:''
    }
  },
  methods: {


    postData: function(nm, age, img) {

      var self = this;
      // POST request using fetch with error handling
      const requestOptions = {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: nm,
          age: age,
          fpath: 'img/smiley' + img + '.png'
        })
      };

      fetch(postSQLApiURL, requestOptions)
			.then( response =>{
			  //turning the response into the usable data
			  return response.json( );
			})
			.then( data =>{
			  //This is the data you wanted to get from url
			  self.msg="successful";
			})
			.catch(error => {
			  self.err=error
			});
    }

  }
});
//************************************ fetch  PUT  ************************
app.component('app-putdata', {
  template: `
  <!-- Updating mySQL Table With Name as Key -->
    <v-row>
      <v-col cols="12" md="9 ">
        <v-card class="mx-auto" max-width="90%">
        <v-card-title>
  				<h2>Putting with RESTful API: Updating into MySQL Table With Name as Key</h2>
  			</v-card-title>
          <v-card-text>
            <!-- Input -->
            <v-form name="myForm2" class="form-horizontal">
              <v-text-field label="Name" v-model="name2" />
              </v-text-field>
              <v-text-field label="Age" v-model="age2" />
              </v-text-field>
              <v-btn depressed v-on:click="putData(name2,age2)" color="primary">
                Update
              </v-btn>
            </v-form>
          </v-card-text>
        </v-card>
      </v-col>
      <!-- Output -->
      <v-col cols="12" md="3">
        <v-card>
          <v-card-text>
            <p>Message : {{msg}}</p>
            <p>Error: {{err}}</p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>

   `,
  data: function() {
    return {
      age2: '',
      name2: '',
      msg: '',
	  err:''
    }
  },
  methods: {
    putData: function(nm, age) {

      var putSQLApiURL = 'resources/apis.php/name/' + nm;


      var self = this;
      // POST request using fetch with error handling
      const requestOptions = {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: nm,
          age: age
        })
      };

      fetch(putSQLApiURL, requestOptions)
 			.then( response =>{
			  //turning the response into the usable data
			  return response.json( );
			})
			.then( data =>{
			  //This is the data you wanted to get from url
			  self.msg="successful";
			})
			.catch(error => {
			  self.err=error
			});

    }

  }
})
//************************************ fetch  DELETE   ************************

 
app.component('app-deldata', {
  template: `
  <!-- Deleting from mySQL Table With Name as Key -->
  <v-row>
		<v-col cols="12" md="9 ">

			<v-card class="mx-auto" max-width="90%">
      <v-card-title>
        <h2>Deleting with RESTful API:: Deleting from MySQL Table With Name as Key</h2>
      </v-card-title>
				<v-card-text>
					<v-form>
						<v-text-field label="Name" v-model="name3" />
						</v-text-field>
						<v-btn depressed v-on:click="delData(name3)" color="primary">Delete</v-btn>
					</v-form>
				</v-card-text>
			</v-card>

		</v-col>
		<!-- Output -->
		<v-col cols="12" md="3">
			<v-card class="mx-auto" max-width="90%">
				<v-card-text>

					<!-- Output -->
					<p>Message : {{msg}}</p>
					<p>Error: {{err}}</p>
				</v-card-text>
			</v-card>
		</v-col>
	</v-row>
   `,
  data: function() {
    return {
      name3: '',
      msg: '',
      statusVal: '',
      statusText: '',
      headers: '',
    }
  },
  methods: {
    delData: function(nm, age) {
      var delSQLApiURL = 'resources/apis.php/name/' + nm;


      var self = this;
      // POST request using fetch with error handling
      const requestOptions = {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name: nm
        })
      };

      fetch(delSQLApiURL, requestOptions)
			.then( response =>{
			  //turning the response into the usable data
			  return response.json( );
			})
			.then( data =>{
			  //This is the data you wanted to get from url
			  self.msg="successful";
			})
			.catch(error => {
			  self.err=error
			});

    }
  }
})

const vuetify = Vuetify.createVuetify( )  
app.use(vuetify)
app.mount('#app')

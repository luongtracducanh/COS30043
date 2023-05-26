// app-postdata component
const PostData = {
  template: `
  <v-row>
    <v-col cols="12" md="6 " >

    <v-card
       class="mx-auto"
       max-width="90%"
       >

       <v-card-text>
   	<v-form>
          <v-text-field label="Name" v-model="name1" /></v-text-field>
   				<v-text-field label="Age" v-model="age1" /></v-text-field>


        <v-radio-group label="Smiley Color" v-model="imgVar">
          <v-radio label="White" value="1"></v-radio>
          <v-radio label="Yellow" value="2"></v-radio>
        </v-radio-group>


        <v-btn
        depressed
        v-on:click="postData(name1,age1, imgVar)"
        color="primary">
        Add
      </v-btn>

   	</v-form>
    </v-card-text>

    </v-card>

    </v-col >
      <!-- Output -->
        <v-col cols="12"
            md="6">
    <v-card
       class="mx-auto"
       max-width="90%"
       >
       <v-card-text>
        <p>Output Message : {{ msg }}</p>
   			<p>Status Code: {{statusVal}}</p>
   			<p>Status: {{statusText}}</p>
   			<p>Response Headers: {{headers}}</p>
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
      statusVal: '',
      statusText: '',
      headers: '',
      savingSuccessful: false
    }
  },
  methods: {

    postData: function(nm, age, img) {
      //define url for api
      var postSQLApiURL = 'resources/apis.php/'

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
		   self.msg = "Data Inserted Successfully."  ;
		})
		.catch(error => {
		   self.msg = 'There was an error!' + error;
		});	
	
		
		
    }

  }
};

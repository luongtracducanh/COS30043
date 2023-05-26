// app-deldata  component  
const DelData = {
  template: `
  <v-row>
		<v-col cols="12" md="6 ">

			<v-card class="mx-auto" max-width="90%">
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
		<v-col cols="12" md="6">
			<v-card class="mx-auto" max-width="90%">
				<v-card-text>

					<!-- Output -->
					<p>Output Message : {{msg}}</p>
					<p>Status Code: {{statusVal}}</p>
					<p>Status: {{statusText}}</p>
					<p>Response Headers: {{headers}}</p>
				</v-card-text>
			</v-card>
		</v-col>
	</v-row>
           `,
  // variable initialization
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
      // DELETE request using fetch with error handling
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
		   self.msg = "Data deleted Successfully"
			
		})
		.catch(error => {
			self.msg = 'There was an error!';
			self.statusText = error;
		});	
 
    }
  }
}

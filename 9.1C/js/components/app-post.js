// app-postdata component
const PostData = {
  template: `
  <v-row>
    <v-col cols="12" md="6 ">
      <v-card class="mx-auto" max-width="90%">
        <v-card-text>
          <v-form>
            <v-text-field label="Unit Code" v-model="code1" />
            <v-text-field label="Description" v-model="description1" />
            <v-text-field label="Credit Points" v-model="cp1" />

            <v-radio-group label="Type" v-model="type1">
              <v-radio label="Core" value="Core"></v-radio>
              <v-radio label="Software Development" value="Software Development"></v-radio>
              <v-radio label="System Analysis" value="System Analysis"></v-radio>
            </v-radio-group>

            <v-btn
              depressed
              v-on:click="postData(code1, description1, cp1, type1)"
              color="primary"
            >
              Add
            </v-btn>
          </v-form>
        </v-card-text>
      </v-card>
    </v-col>
    <!-- Output -->
    <v-col cols="12" md="6">
      <v-card class="mx-auto" max-width="90%">
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
  data: function () {
    return {
      code1: "",
      description1: "",
      cp1: "",
      type1: "",
      msg: "",
      statusVal: "",
      statusText: "",
      headers: "",
      savingSuccessful: false,
    };
  },
  methods: {
    postData: function (code, description, cp, type) {
      //define url for api
      var postSQLApiURL = "resources/apis.php/";

      var self = this;
      // POST request using fetch with error handling
      const requestOptions = {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          code: code,
          description: description,
          cp: cp,
          type: type,
        }),
      };

      fetch(postSQLApiURL, requestOptions)
        .then((response) => {
          //turning the response into the usable data
          return response.json();
        })
        .then((data) => {
          //This is the data you wanted to get from url
          self.msg = "Data Inserted Successfully.";
        })
        .catch((error) => {
          self.msg = "There was an error: " + error;
        });
    },
  },
};

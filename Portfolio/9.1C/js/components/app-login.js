const Login = {
  // defining variables to be used in the component
  data() {
    return {
      msg: "",
      input: {
        username: "",
        password: "",
      },
      valid: true,
      //defining username rules for validation
      usernameRules: [
        (v) => !!v || "Name is required",
        (v) => (v && v.length <= 10) || "Name must be less than 10 characters",
      ],
      //defining username rules for validation
      passwordRules: [
        (v) => !!v || "Password is required",
        (v) =>
          (v && v.length >= 8) || "Password must be more than 8 characters",
      ],
    };
  },
  methods: {
    login() {
      if (this.$refs.form.validate()) {
        //this.$refs.form.validate() will validate all inputs and return if they are all valid or not.
        var self = this;
        // GET request using fetch with error handling
        const requestOptions = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: this.input.username,
            password: this.input.password,
          }),
        };

        fetch("resources/api_user.php/", requestOptions)
          .then((response) => {
            //turning the response into the usable data
            return response.json();
          })
          .then((data) => {
            //This is the data you wanted to get from url
            if (data == null) {
              // didn't find this username password pair
              self.msg = "username or password incorrect.";
            } else {
              this.$emit("authenticated", true); //$emit() function allows you to pass custom events up the component tree.
              this.$router.replace({ name: "dashboard" });
            }
          })
          .catch((error) => {
            self.msg = "Error: " + error;
          });
      }
    },

    reset() {
      this.$refs.form.reset();
    },
  },

  // define the template for the component
  template: `
  <v-row>
    <v-col class="center" cols="12" md="6">
      <v-card class="mx-auto" max-width="90%">
        <v-card-title>
          <h2>User Login</h2>
        </v-card-title>
        <v-card-text>
          <v-form ref="form" v-model="valid">
            <v-text-field
              v-model="input.username"
              :counter="10"
              :rules="usernameRules"
              label="Username"
              required
            ></v-text-field>

            <v-text-field
              v-model="input.password"
              label="Password"
              type="password"
              :rules="passwordRules"
              required
            ></v-text-field>
            <v-btn color="success" class="mr-4" @click="login()"> Login </v-btn>
            <v-btn color="error" class="mr-4" @click="reset"> Reset </v-btn>
          </v-form>
          <p>{{msg}}</p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
    `,
};

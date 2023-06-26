// 1. First name (letters only and required)
// 2. Last name (letters only and required)
// 3. User name (min 3 characters and required)
// 4. Password (must contain at least 1 special character, minimum 8 characters and required, special characters are $, %, ^, &, and *
// 5. Confirm password (must match above password)
// 6. Email (must be in email format and required)
// 7. Street address (maximum 40 characters, optional)
// 8. Suburb (maximum 20 characters, optional)
// 9. Postcode (exactly 4 numeric digits and required, note some postcodes start with 0)
// 10. Mobile number (10 digits, must start with 04)
// 11. Submit button (form data is submitted to the server only if the form data are valid)
// 12. Show “Terms and Condition” button (hides/unhides a brief text on terms and condition, random text is acceptable)

const vuetify = Vuetify.createVuetify();
const app = Vue.createApp({
  methods: {
    validate() {
      this.$refs.myForm.validate(); // validate all inputs
    },
    toggle() {
      this.show = !this.show;
    },
  },
  data: () => ({
    valid: true,
    fName: "",
    lName: "",
    uName: "",
    pwd: "",
    pwd2: "",
    email: "",
    add: "",
    sub: "",
    post: "",
    mobile: "",
    show: false,
    nameRules: [(v) => !!v || "Name required"],
    userNameRules: [
      (v) => !!v || "User name required",
      (v) => (v && v.length >= 3) || "User name must be at least 3 characters",
    ],
    pwdRules: [
      (v) => !!v || "Password required",
      (v) => (v && v.length >= 8) || "Password must be at least 8 characters",
      (v) =>
        /[$%^&*]/.test(v) ||
        "Password must contain at least 1 special character ($, %, ^, &, or *)",
    ],
    emailRules: [
      (v) => !!v || "E-mail required",
      (v) =>
        /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(v) ||
        "E-mail must be valid",
    ],
    postRules: [
      (v) => !!v || "Postcode required",
      (v) => (v && v.length == 4) || "Postcode must be exactly 4 digits",
      (v) => /[0-9]/.test(v) || "Postcode must be numeric",
    ],
    mobileRules: [
      (v) => !!v || "Mobile number required",
      (v) => (v && v.length == 10) || "Mobile number must be exactly 10 digits",
      (v) => /[0-9]/.test(v) || "Mobile number must be numeric",
      (v) => v.startsWith("04") || "Mobile number must start with 04",
    ],
  }),
  watch: {
    fName() {
      this.$refs.myForm.validate();
    },
    lName() {
      this.$refs.myForm.validate();
    },
    uName() {
      this.$refs.myForm.validate();
    },
    pwd() {
      this.$refs.myForm.validate();
    },
    email() {
      this.$refs.myForm.validate();
    },
    add() {
      this.$refs.myForm.validate();
    },
    sub() {
      this.$refs.myForm.validate();
    },
    post() {
      this.$refs.myForm.validate();
    },
    mobile() {
      this.$refs.myForm.validate();
    },
  },
});

app.use(vuetify);
app.mount("#app");

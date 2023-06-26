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
      (v) => !!v || "Email required",
      (v) =>
        /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(v) ||
        "Email must be valid",
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

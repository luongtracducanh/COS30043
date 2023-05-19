new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    methods: {
      validate() {
          this.$refs.myForm.validate() // validate all inputs  
          },
      toggle() {
          this.showValues = !this.showValues
          }
    },
data: () => ({
    valid: true, firstName: '', lastName :'', userName: '', password :'', confirmpassword:'',  email: '', phonenum : '', streetaddr: '', suburb: '', postcode: '',
    showValues : false,
    show1 : false,
    show2 : false,
    nameRules: [
        v => !!v || 'Name is required',
        v => (v && v.length <= 10) || 'Name must be less than 10 characters',
        v => /^[A-Za-z ]+$/.test(v) || 'Name must be letters only' 
        ],

    usrnameRules: [
        v => !!v || 'User name is required',
        v => (v && v.length >= 3) || 'User name must be 3 characters or more',
    ],

    passwordRules: [
        v => !!v ||  'Password is required',
        v => (v && v.length >= 8) || 'Password must be 8 characters or more',
        v => (v && v.split('').find(e => e.match(/^[$%^&*]+$/)) != undefined) || 'Password must contain at least 1 special character ($, %, ^, &, or *)'
    ],
  
    emailRules: [
        v => !!v || 'E-mail is required',
        v => /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$/.test(v) || 'E-mail must be valid',
    ],

    phoneRules: [
        v => !!v || 'Mobile number is required',
        v => (v && /^[0-9]+$/.test(v)) || 'Mobile number must be numeric',
        v => (v && v.length === 10) || 'Mobile number must be 10 digits',
        v => (v && v.split('').splice(0, 2).join('') === '04') || 'Mobile number must start with 04',
    ],

    postcodeRules: [
        v => !!v || 'Postcode is required',
        v => (v && /^[0-9]+$/.test(v)) || 'Postcode must be numeric',
        v => (v && v.length === 4) || 'Postcode must be 4 digits',
    ]
    })
})

  
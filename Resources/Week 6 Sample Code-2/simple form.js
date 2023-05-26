const app = Vue.createApp({ 
	data() {
		return {
			fName: '', 
			lName:'', 
			errors: []
		}
	},
	methods: {
		checkForm: function(e){
			var result = true
			this.errors = []
			if (!this.fName.trim()) {
				result = false
				this.errors.push ("Please enter first name.")		
			}
			if (!this.lName.trim()) {
				result = false
				this.errors.push ("Please enter last name.")		
			}
			if (!result)
				e.preventDefault()// prevent form submission			
		}

	}
})
app.mount('#app')

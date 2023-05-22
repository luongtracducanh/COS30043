//create new vue instance
Vue.createApp({
	//**************  data  ****************
	data() {
		return {
			//passing required data in vue app
			stuObj: {sName:'',subject:'',mark:''},   // record the user selection of student name and subject
	
			allMarks: [
				{sName:'Amy', subject:'Math', mark:'90'},
				{sName:'Amy', subject:'English', mark:'80'},
				{sName:'Bill', subject:'Math', mark:'70'},
				{sName:'Bill', subject:'English', mark:'95'}
				]
		}
	},//passing variables into vue app
    
	//**************  computed   ***************
	computed:{
    //filter function
    filterMarks: function(){
		return this.allMarks.filter(m=>
			m.sName.toLowerCase().match(this.stuObj.sName.toLowerCase()) &&
			m.subject.toLowerCase().match(this.stuObj.subject.toLowerCase())           
			);
		}
	}
}).mount('#app');


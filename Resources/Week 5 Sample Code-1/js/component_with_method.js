const app = Vue.createApp({	})
	
app.component('my-component', // component name
{
	// defining data to be used in the component
	data:function(){
		return{
			taskList:[],
			task:''
		}
	},
	// define the template for the component
	template:  `
		<div>
			<p>Enter your new task:	
				<input type="text" v-model="task" >
				<button v-on:click="add(task)">Add Task</button>
			</p>
			<hr>
			<p>Task list : </p>
			<div v-for="(t,index) in taskList">
				<p>
					{{ t }}   
					<button v-on:click="remove(index)">Delete Task</button>   
					<button v-on:click="mark(index)">Mark as Completed</button>
				</p>
			</div>
		</div>`,
	// defining the methods  
	methods:{
		add:function(t){
			this.taskList.push(t) //push t into array
		},
 		remove:function(index){
			this.taskList.splice(index,1);  // remove the element at index position
		},
 		mark:function(index){
			this.taskList[index]=this.taskList[index]+" (Completed)" // add 'completed' to the element at index position
		}
	}
});

app.mount('#app')

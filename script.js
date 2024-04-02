const app = Vue.createApp({
    data() {
        return {
            tasks : [
                { text: "Complete homework assignment", completed: false },
                { text: "Go for a run", completed: true },
                { text: "Buy groceries", completed: false },
                { text: "Call mom", completed: true },
                { text: "Read a book", completed: false }
            ]
        }
    },
    methods: {
        removeTask(indexOf){
            console.log(indexOf);
            this.tasks.splice(indexOf,1);
        },
        addTask() {
           let inputText = document.getElementById('new-task').value;
           if(inputText != ""){
            this.tasks.push({text:inputText,completed:false});
            document.getElementById('new-task').value ="";
           }
        },
        completeTask(index){
            if(this.tasks[index]){
                if(this.tasks[index].completed == false)
                    this.tasks[index].completed = true; 
                else{
                    this.tasks[index].completed = false; 
            }
            }
        }
    }
});app.mount('#app');
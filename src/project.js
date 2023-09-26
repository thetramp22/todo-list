

export default class Project {
    constructor(name){
        this.name = name;
        this.tasks = [];
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name = name;
    }

    getTodos(){
        return this.tasks;
    }

    addTodo(task){
        this.tasks.push(task);        
    }

    removeTodo(task){
        delete this.tasks[task];
    }
}
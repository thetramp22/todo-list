export default class Projects {
    constructor(name){
        this.name = name;
        this.todos = [];
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name = name;
    }

    getTodos(){
        return this.todos;
    }

    addTodo(todo){
        this.todos.push(todo);        
    }

    removeTodo(todo){
        delete this.todos[todo];
    }
}
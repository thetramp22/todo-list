export default class Task {
    constructor(name, description, dueDate, priority = false) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
    }

    getName(){
        return this.name;
    }

    setName(name){
        this.name = name;
    }

    getDescription(){
        return this.description;
    }

    setDescription(description){
        this.description = description;
    }

    getDueDate(){
        return this.dueDate;
    }

    setDueDate(dueDate){
        this.dueDate = dueDate;
    }

    getPriority(){
        return this.priority;
    }

    setPriority(priority){
        this.priority = priority;
    }
}
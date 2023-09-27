export default class Tasklist {
    constructor(){
        this.tasklist = [];
    }

    getTasklist(){
        return this.tasklist;
    }

    addNewTask(task){
        this.tasklist.push(task);
    }
}
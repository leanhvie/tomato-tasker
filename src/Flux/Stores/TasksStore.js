import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

import * as firebase from "firebase";

// Store for storing the state of the tasks in the application
class TasksStore extends EventEmitter {
    constructor() {
        super();
        this.tasks = {};
        this.isFetchingTasks = false;
        this.currentTask = {}
    }

    loadTasks() {
        const tasksRef = firebase.database().ref("tasks");
        tasksRef.on("value", (snapshot) => {
            this.tasks = snapshot.val();
            this.emit("change");
        });
        this.isFetchingTasks = false;
    }

    createTask(title, description, workTime, breakTime, numberOfCycles) {
        const tasksRef = firebase.database().ref("tasks");
        tasksRef.push({
            title: title,
            description: description,
            workTime: workTime,
            breakTime: breakTime,
            numberOfCycles: numberOfCycles

        });
        this.emit("change");
    }

    updateTask(key, title, description, workTime, breakTime, numberOfCycles) {
        const taskToUpdateRef = firebase.database().ref("tasks/"+key);
        taskToUpdateRef.update({
            title: title,
            description: description,
            workTime: workTime,
            breakTime: breakTime,
            numberOfCycles: numberOfCycles
        });
        this.emit("change");
    }

    removeTask(currentTask) {
        firebase.database().ref("tasks/"+currentTask.key).remove();
        if(currentTask.key == this.currentTask.key) {
            this.currentTask = {};
            this.emit("change");
        }
        this.loadTasks();
    }

    getTasks() {
        return this.tasks;
    }

    getCurrentTask() {
        return this.currentTask;
    }

    getIsFetchingTasks() {
        return this.isFetchingTasks;
    }

    handleActions(action) {
        switch(action.type) {
            case "FETCHING_TASKS":
                this.isFetchingTasks = true;
                this.emit("change");
                break;
            case "LOAD_TASKS":
                this.loadTasks();
                break;
            case "CREATE_TASK":
                this.createTask(action.title, action.description, action.workTime, action.breakTime, action.numberOfCycles);
                break;
            case "SELECT_TASK":
                this.currentTask = action.currentTask;
                this.emit("change");
                break;
            case "UPDATE_TASK":
                this.updateTask(action.key, action.title, action.description, action.workTime, action.breakTime, action.numberOfCycles);
                break;
            case "REMOVE_TASK":
                this.removeTask(action.currentTask);
                break;
        }
    }
}

const tasksStore = new TasksStore();
dispatcher.register(tasksStore.handleActions.bind(tasksStore));
export default tasksStore;
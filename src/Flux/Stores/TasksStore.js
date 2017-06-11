import { EventEmitter } from "events";
import dispatcher from "../dispatcher";

import * as firebase from "firebase";

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
            case "SELECT_TASK":
                this.currentTask = action.currentTask;
                this.emit("change");
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
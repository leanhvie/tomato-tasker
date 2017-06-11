// JS file related to tasks CRUD functions

import dispatcher from "../dispatcher";

export function loadTasks() {
    dispatcher.dispatch({
        type: "FETCHING_TASKS"
    });
    dispatcher.dispatch({
        type: "LOAD_TASKS"
    });
}

export function createTask(title, description, workTime, breakTime, numberOfCycles) {
    dispatcher.dispatch({
        type: "CREATE_TASK",
        title: title,
        description: description,
        workTime: workTime,
        breakTime: breakTime,
        numberOfCycles: numberOfCycles
    })
}

export function selectTask(currentTask) {
    dispatcher.dispatch({
        type: "SELECT_TASK",
        currentTask: currentTask
    })
}

export function updateTask(key, title, description, workTime, breakTime, numberOfCycles) {
    dispatcher.dispatch({
        type: "UPDATE_TASK",
        key: key,
        title: title,
        description: description,
        workTime: workTime,
        breakTime: breakTime,
        numberOfCycles: numberOfCycles
    })
}

export function removeTask(currentTask) {
    dispatcher.dispatch({
        type: "REMOVE_TASK",
        currentTask: currentTask
    })
}
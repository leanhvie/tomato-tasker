import dispatcher from "../dispatcher";

export function loadTasks() {
    dispatcher.dispatch({
        type: "FETCHING_TASKS"
    });
    dispatcher.dispatch({
        type: "LOAD_TASKS"
    });
}

export function selectTask(currentTask) {
    dispatcher.dispatch({
        type: "SELECT_TASK",
        currentTask: currentTask
    })
}

export function removeTask(currentTask) {
    dispatcher.dispatch({
        type: "REMOVE_TASK",
        currentTask: currentTask
    })
}
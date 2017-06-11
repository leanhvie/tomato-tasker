import React from "react";

import Task from "./Task";

import { PageHeader, Panel } from "react-bootstrap";

export default class TasksList extends React.Component {

    constructor() {
        super()
    }

    renderTasks() {
        const tasks = this.props.tasks;
        let taskComponents = [];
        for(let task in tasks) {
            taskComponents.push(<Task key={task} task={Object.assign({key: task}, tasks[task])}/>)
        }
        return taskComponents;
    }

    render() {
        return (
            <div id="tasks-list">
                {this.renderTasks()}
            </div>
        );
    }
}
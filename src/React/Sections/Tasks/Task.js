import React from "react";

import { Button, ButtonToolbar } from "react-bootstrap";

import TaskUpdateForm from "./TaskUpdateForm";

import * as TaskActions from "../../../Flux/Actions/TasksActions";
import * as HistoryActions from "../../../Flux/Actions/HistoryActions";

// React component for rendering each and individual tasks. Next to its title is a button toolbar where the user can add the task to the timer, update the task or delete it
export default class Task extends React.Component {

    constructor() {
        super()
    }

    selectTask = () => {
        TaskActions.selectTask(this.props.task);
        HistoryActions.updateCurrentPage("#timer");
        HistoryActions.redirect("#timer");
    };

    removeTask = () => {
        let currentTaskDOM = document.querySelector("#"+this.props.task.key);
        currentTaskDOM.style.transform = "scale(0)";
        currentTaskDOM.addEventListener("transitionend", () => TaskActions.removeTask(this.props.task));
    };

    render() {
        return (
            <div id={this.props.task.key} className="task">
                <div className="task-header">
                    {this.props.task.title}
                    <div className="pull-right">
                        <ButtonToolbar>
                            <Button bsSize="xsmall" bsStyle="warning" onClick={this.selectTask}>
                                <i className="fa fa-clock-o" aria-hidden="true"></i>
                            </Button>
                            <TaskUpdateForm currentTask={this.props.task}/>
                            <Button bsSize="xsmall" bsStyle="danger" onClick={this.removeTask}>
                                <i className="fa fa-trash-o" aria-hidden="true"></i>
                            </Button>
                        </ButtonToolbar>
                    </div>
                    <div className="clearfix"></div>
                </div>
                <div className="task-body">
                    <strong>Description</strong>
                    <p>
                        {this.props.task.description}
                    </p>
                    <p>
                        <strong>Work time:</strong> {this.props.task.workTime}
                    </p>
                    <p>
                        <strong>Break time:</strong> {this.props.task.breakTime}
                    </p>
                    <p>
                        <strong>Number of cycles:</strong> {this.props.task.numberOfCycles}
                    </p>
                </div>
            </div>
        );
    }
}
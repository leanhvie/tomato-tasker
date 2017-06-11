import React from "react";

import { Button, PageHeader } from "react-bootstrap";

import TimerRadial from "./TimerRadial"

import TasksStore from "../../../Flux/Stores/TasksStore";

import * as EmptyCheck from "../../../Utils/EmptyCheck";

export default class TimerPage extends React.Component {

    constructor() {
        super();
        this.state = {
            currentTask: TasksStore.getCurrentTask()
        }
    }

    componentWillMount() {
        TasksStore.on("change", this.getCurrentTask);
    }

    componentWillUnmount() {
        TasksStore.removeListener("change", this.getCurrentTask);
    }

    getCurrentTask = () => this.setState({currentTask: TasksStore.getCurrentTask()});

    render() {
        return (
            <section id="timer" className="container">
                {
                    EmptyCheck.isObjectEmpty(this.state.currentTask) ? null :
                    (
                        <div>
                            <div className="task">
                                <div id="timer-task-info">
                                    <div className="task-header">
                                        {this.state.currentTask.title}
                                    </div>
                                    <div className="task-body">
                                        <strong>Description</strong>
                                        <p>
                                            {this.state.currentTask.description}
                                        </p>
                                        <p>
                                            <strong>Work time:</strong> {this.state.currentTask.workTime}
                                        </p>
                                        <p>
                                            <strong>Break time:</strong> {this.state.currentTask.breakTime}
                                        </p>
                                        <p>
                                            <strong>Number of cycles:</strong> {this.state.currentTask.numberOfCycles}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    )
                }
                <div id="timer-component">
                    <TimerRadial currentTask={this.state.currentTask} ref="timer_radial"/>
                    <Button id="timer-button" bsStyle="success" bsSize="large" onClick={() => this.refs.timer_radial.startTimer()}>
                        <i id="timer-button-icon" className="fa fa-play" aria-hidden="true"></i>
                    </Button>
                </div>
            </section>
        );
    }
}
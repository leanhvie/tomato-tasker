import React from "react";

import TaskCreateForm from "../Sections/Tasks/TasksCreateForm";

import * as HistoryActions from "../../Flux/Actions/HistoryActions";

export default class Navbar extends React.Component {

    updateCurrentPage(currentPage) {
        HistoryActions.updateCurrentPage(currentPage);
    }

    render() {
        if(this.props.isOnline) {
            return (
                <ul id="navbar">
                    <li className="nav"><a href="#home" onClick={() => this.updateCurrentPage("#home")}>Home</a></li>
                    <li className="nav"><a href="#timer" onClick={() => this.updateCurrentPage("#timer")}>Timer</a></li>
                    <li className="nav"><a href="#tasks" onClick={() => this.updateCurrentPage("#tasks")}>Tasks</a></li>
                    <li className="nav">
                        <TaskCreateForm/>
                    </li>
                </ul>
            );
        } else {
            return (
                <ul id="navbar">
                    <li className="nav"><a href="#home" onClick={() => this.updateCurrentPage("#home")}>Home</a></li>
                    <li className="nav"><a href="#timer" onClick={() => this.updateCurrentPage("#timer")}>Timer</a></li>
                </ul>
            );
        }
    }
}
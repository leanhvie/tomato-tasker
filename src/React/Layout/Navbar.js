import React from "react";

import TaskCreateForm from "../Sections/Tasks/TasksCreateForm";

import * as HistoryActions from "../../Flux/Actions/HistoryActions";

// React component of the web application. Updates on nav item click for keeping track of the current page.
export default class Navbar extends React.Component {

    updateCurrentPage(currentPage) {
        HistoryActions.updateCurrentPage(currentPage);
    }

    render() {
        if(this.props.isOnline) {
            return (
                <nav id="navbar">
                    <a href="#home" onClick={() => this.updateCurrentPage("#home")}>Home</a>
                    <a href="#timer" onClick={() => this.updateCurrentPage("#timer")}>Timer</a>
                    <a href="#tasks" onClick={() => this.updateCurrentPage("#tasks")}>Tasks</a>
                    <TaskCreateForm/>
                </nav>
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
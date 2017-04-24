import React from "react";
import { Nav, Navbar as BSNavbar, NavItem } from "react-bootstrap";

export default class Navbar extends React.Component {

    showTimer() {
        let timerSection = document.querySelector("#timer");
        let tasksSection = document.querySelector("#tasks");
        timerSection.className = "move-from-top";
        tasksSection.className = "move-to-bottom";
    }

    showTasks() {
        let timerSection = document.querySelector("#timer");
        let tasksSection = document.querySelector("#tasks");
        timerSection.className = "move-to-top";
        tasksSection.className = "move-from-bottom";
    }

    render() {
        return (
            <BSNavbar inverse style={{borderRadius: 0}}>
                <BSNavbar.Header>
                    <BSNavbar.Brand>
                        <a onClick={() => this.showTimer()}>
                            Tomato Tasker
                        </a>
                    </BSNavbar.Brand>
                    <BSNavbar.Toggle />
                </BSNavbar.Header>
                <BSNavbar.Collapse>
                    <Nav>
                        <NavItem onClick={() => this.showTasks()}>Tasks</NavItem>
                    </Nav>
                </BSNavbar.Collapse>
            </BSNavbar>
        );
    }
}
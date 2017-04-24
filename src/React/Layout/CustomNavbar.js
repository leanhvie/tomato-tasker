import React from "react";
import { Nav, Navbar, NavItem } from "react-bootstrap";

export default class CustomNavbar extends React.Component {

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
            <Navbar inverse style={{borderRadius: 0}}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <a onClick={() => this.showTimer()}>
                            Pomodoro Timer
                        </a>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <NavItem onClick={() => this.showTasks()}>Tasks</NavItem>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
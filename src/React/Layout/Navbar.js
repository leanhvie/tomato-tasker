import React from "react";
import { Nav, Navbar as BSNavbar, NavItem } from "react-bootstrap";

export default class Navbar extends React.Component {

    constructor() {
        super();
        this.state = {
            sidebarOn: false,
            currentSection: "timer"
        };
        this.showTimer = this.showTimer.bind(this);
        this.showTasks = this.showTasks.bind(this);
    }

    toggleSidebar() {
        let sidebar = document.querySelector("#sidebar");
        if(!this.state.sidebarOn) {
            sidebar.classList.add("showSidebar");
            this.setState({sidebarOn: true});
        } else {
            sidebar.classList.remove("showSidebar");
            this.setState({sidebarOn: false});
        }
    }

    showTimer(event) {
        console.log(event.target.href);
        if(this.state.currentSection != "timer") {
            let timerSection = document.querySelector("#timer-section");
            let tasksSection = document.querySelector("#tasks");
            timerSection.className = "move-from-top";
            tasksSection.className = "move-to-bottom";
            this.setState({currentSection: "timer"});
        }
    }

    showTasks(event) {
        console.log(event.target.href);
        if(this.state.currentSection != "tasks") {
            let timerSection = document.querySelector("#timer-section");
            let tasksSection = document.querySelector("#tasks");
            timerSection.className = "move-to-top";
            tasksSection.className = "move-from-bottom";
            this.setState({currentSection: "tasks"})
        }
    }

    render() {
        return (
            <BSNavbar inverse style={{borderRadius: 0}}>
                <BSNavbar.Header>
                    <BSNavbar.Brand>
                        Tomato Tasker
                    </BSNavbar.Brand>
                    <BSNavbar.Toggle />
                </BSNavbar.Header>
                <BSNavbar.Collapse>
                    <Nav>
                        <NavItem href="#timer" onClick={(event) => this.showTimer(event)}>Timer</NavItem>
                    </Nav>
                    <Nav>
                        <NavItem onClick={() => this.toggleSidebar()}>Queue</NavItem>
                    </Nav>
                    <Nav>
                        <NavItem href="#tasks" onClick={(event) => this.showTasks(event)}>Tasks</NavItem>
                    </Nav>
                </BSNavbar.Collapse>
            </BSNavbar>
        );
    }
}
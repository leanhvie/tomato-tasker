import React from "react";
import { NavLink } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";
import { Button, MenuItem, Nav, Navbar, NavDropdown, NavItem } from "react-bootstrap";

export default class CustomNavbar extends React.Component {

    handleThemeSelect(event) {
        document.getElementById("pagestyle").setAttribute("href", "resources/css/themes/"+event);
    }

    render() {
        return (
            <Navbar style={{borderRadius: 0}}>
                <Navbar.Header>
                    <NavLink to="/">
                        <Navbar.Brand>
                            Pomodoro Timer
                        </Navbar.Brand>
                    </NavLink>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Nav>
                    <NavItem>
                        <NavLink to="/tasks">Tasks</NavLink>
                    </NavItem>
                </Nav>
            </Navbar>
        );
    }
}
import React from "react";
import { Link } from "react-router";
import { LinkContainer } from "react-router-bootstrap";
import { Button, MenuItem, Nav, Navbar, NavDropdown, NavItem } from "react-bootstrap";

export default class CustomNavbar extends React.Component {

    handleThemeSelect(event) {
        document.getElementById("pagestyle").setAttribute("href", "resources/css/themes/"+event);
    }

    render() {
        return (
            <Navbar inverse style={{borderRadius: 0}}>
                <Navbar.Header>
                    <Navbar.Brand>
                        <Link to="/">
                            Pomodoro Timer
                        </Link>
                    </Navbar.Brand>
                    <Navbar.Toggle />
                </Navbar.Header>
                <Navbar.Collapse>
                    <Nav>
                        <LinkContainer to="/tasks">
                            <NavItem>Tasks</NavItem>
                        </LinkContainer>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}
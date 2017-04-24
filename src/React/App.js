import React from "react";
import CustomNavbar from "./Layout/CustomNavbar";
import Content from "./Layout/Content";

export default class App extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="layout">
                <CustomNavbar/>
                <Content/>
            </div>
        );
    }
}
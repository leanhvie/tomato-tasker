import React from "react";
import Navbar from "./Layout/Navbar";
import Content from "./Layout/Content";

export default class App extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="layout">
                <Navbar/>
                <Content/>
            </div>
        );
    }
}
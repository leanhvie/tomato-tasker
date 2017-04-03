import React from "react";
import { hashHistory } from "react-router";

import Sidebar from "react-sidebar";
import CustomNavbar from "./CustomNavbar";

export default class Layout extends React.Component {

    constructor() {
        super();
        this.state = {};
    }

    render() {
        return (
            <div className="content">
                <CustomNavbar/>
                {this.props.children}
            </div>
        );
    }
}
import React from "react";
import Navbar from "./Layout/Navbar";
import Content from "./Layout/Content";
import Footer from "./Layout/Footer";

import ConnectionStore from "../Flux/Stores/ConnectionStore";

export default class App extends React.Component {

    constructor() {
        super();
        this.state = {
            isOnline: ConnectionStore.getIsConnected()
        }
    }

    render() {

        return (
            <div id="display">
                <Navbar isOnline={this.state.isOnline}/>
                <Content isOnline={this.state.isOnline}/>
                <Footer/>
            </div>
        );
    }
}
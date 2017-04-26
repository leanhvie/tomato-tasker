import React from "react";
import Navbar from "./Layout/Navbar";
import Content from "./Layout/Content";
import Footer from "./Layout/Footer";

export default class App extends React.Component {

    render() {
        return (
            <div id="display">
                <Navbar/>
                <div id="main">
                    <div id="sidebar"></div>
                    <Content/>
                </div>
                <Footer/>
            </div>
        );
    }
}
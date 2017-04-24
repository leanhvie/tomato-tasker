import React from "react";
import Navbar from "./Layout/Navbar";
import Content from "./Layout/Content";

export default class App extends React.Component {

    render() {

        console.log(window.location.href);

        return (
            <div>
                <Navbar/>
                <Content/>
            </div>
        );
    }
}
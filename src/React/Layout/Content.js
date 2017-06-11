import React from "react";

import OfflineAlert from "../Other/OfflineAlert";
import HomeSection from "../Sections/Home/HomeSection";
import TimerSection from "../Sections/Timer/TimerSection";
import TasksSection from "../Sections/Tasks/TasksSection";

import HistoryStore from "../../Flux/Stores/HistoryStore";

/* React component for rendering main content of the web application:
* ~ Home section
* ~ Timer section
* ~ Task section
*  Keeps track of the current section for rendering the header text */
export default class Content extends React.Component {

    constructor() {
        super();
        this.state = {
            currentPage: HistoryStore.getCurrentPage()
        }
    }

    componentWillMount() {
        HistoryStore.on("change", this.getCurrentPage);
    }

    componentWillUnmount() {
        HistoryStore.removeListener("change", this.getCurrentPage);
    }

    getCurrentPage = () => this.setState({currentPage: HistoryStore.getCurrentPage()});

    renderHeaderText = () => {
        switch(this.state.currentPage) {
            case "#home": return "oh hi.";
            case "#timer": return "Timer";
            case "#tasks": return "Tasks";
            default: return "oh hi.";
        }
    };

    render() {

        const headerText = this.renderHeaderText();

        return (
            <div id="content" className="container">
                {this.props.isOnline ? null : <OfflineAlert/>}
                <div className="container">
                    <h1 id="section-header" className="margin-top">{headerText}</h1>
                    <hr className="header-hr"></hr>
                </div>
                <HomeSection/>
                <TimerSection/>
                <TasksSection isOnline={this.props.isOnline}/>
            </div>
        );
    }
}
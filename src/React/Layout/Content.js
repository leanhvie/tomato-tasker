import React from "react";

import OfflineAlert from "../Other/OfflineAlert";
import TimerSection from "../Sections/Timer/TimerSection";
import TasksSection from "../Sections/Tasks/TasksSection";

import HistoryStore from "../../Flux/Stores/HistoryStore";

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
        }
    };

    render() {

        const headerText = this.renderHeaderText();

        return (
            <div id="content" className="container">
                {this.props.isOnline ? null : <OfflineAlert/>}
                <h1 id="section-header" className="margin-top">{headerText}</h1>
                <hr className="header-hr"></hr>
                <TimerSection/>
                <TasksSection isOnline={this.props.isOnline}/>
            </div>
        );
    }
}
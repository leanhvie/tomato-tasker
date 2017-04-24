import React from "react";

import TimerSection from "../Sections/TimerSection";
import TasksSection from "../Sections/TasksSection";

export default class Content extends React.Component {

    constructor() {
        super();
        this.state = {
            currentPage: "timer"
        }
    }

    render() {
        return (
            <div id="content">
                <TimerSection/>
                <TasksSection/>
            </div>
        );
    }
}
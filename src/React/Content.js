import React from "react";

import { Grid } from "react-bootstrap";

import TimerSection from "./Sections/TimerSection";
import TasksSection from "./Sections/TasksSection";

export default class Content extends React.Component {

    constructor() {
        super();
        this.state = {
            currentPage: "timer"
        }
    }

    render() {



        return (
            <Grid>
                <TimerSection/>
                <TasksSection/>
            </Grid>
        );
    }
}
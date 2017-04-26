import React from "react";

import { Button } from "react-bootstrap";

import Timer from "../Components/Timer"

export default class TimerPage extends React.Component {

    constructor() {
        super();
        this.state = {
            time: 5
        }
    }

    render() {
        return (
            <section id="timer-section" className="">
                <Timer setTime={this.state.time} ref="timer"/>
                <Button id="timer-button" bsStyle="success" bsSize="large" onClick={() => this.refs.timer.startTimer()}>
                    <i id="timer-button-icon" className="fa fa-play" aria-hidden="true"></i>
                </Button>
            </section>
        );
    }
}
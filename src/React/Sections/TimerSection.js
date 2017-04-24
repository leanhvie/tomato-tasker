import React from "react";

import { Button, Row } from "react-bootstrap";

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
            <section id="timer">
                <div className="text-center">
                    <Timer setTime={this.state.time} ref="timer"/>
                </div>
                <div className="timer-control text-center">
                    <Button id="timer-button" bsStyle="success" bsSize="large" onClick={() => this.refs.timer.startTimer()}>
                        <i id="timer-button-icon" className="fa fa-play" aria-hidden="true"></i>
                    </Button>
                </div>
            </section>
        );
    }
}
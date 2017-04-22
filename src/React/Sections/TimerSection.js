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
                <Row>
                    <div className="text-center">
                        <Timer setTime={this.state.time} ref="timer"/>
                    </div>
                </Row>
                <Row>
                    <div className="timer-control text-center">
                        <Button bsStyle="success" bsSize="large" onClick={() => this.refs.timer.startTimer()}>
                            <i className="fa fa-play" aria-hidden="true"></i>
                        </Button>
                        <Button bsStyle="danger" bsSize="large" onClick={() => this.refs.timer.pauseTimer()}>
                            <i className="fa fa-pause" aria-hidden="true"></i>
                        </Button>
                    </div>
                </Row>
            </section>
        );
    }
}
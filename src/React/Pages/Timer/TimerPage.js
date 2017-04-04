import React from "react";

import { Button, Checkbox, Col, ControlLabel, Form, FormControl, FormGroup, Grid, Jumbotron, PageHeader, Row } from "react-bootstrap";

import Timer from "../../Components/Timer"

export default class TimerPage extends React.Component {

    constructor() {
        super()
    }

    render() {
        return (
            <Grid>
                <Row>
                    <div className="text-center">
                        <Timer ref="timer"/>
                    </div>
                </Row>
                <Row>
                    <Button bsStyle="success" onClick={() => this.refs.timer.startTimer()}>Start</Button>
                    <Button bsStyle="danger" onClick={() => this.refs.timer.pauseTimer()}>Pause</Button>
                </Row>
            </Grid>
        );
    }
}
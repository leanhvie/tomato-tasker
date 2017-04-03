import React from "react";

import { Button, Grid, Jumbotron, PageHeader, Row } from "react-bootstrap";

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
                        <Timer/>
                    </div>
                </Row>
            </Grid>
        );
    }
}
import React from "react";

import { Alert } from "react-bootstrap";

export default class OfflineAlert extends React.Component {

    constructor() {
        super();
        this.state = {
            alertVisible: true
        }
    }

    dismissAlert = () => this.setState({alertVisible: false});

    render() {
        if(this.state.alertVisible) {
            return (
                <Alert bsStyle="warning" onDismiss={this.dismissAlert}>
                    You're offline, all you have is a boring pomodoro timer.
                </Alert>
            );
        } else {
            return null;
        }
    }
}
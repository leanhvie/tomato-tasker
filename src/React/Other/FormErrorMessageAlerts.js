import React from "react";

import { Alert } from "react-bootstrap";

export default class FormErrorMessageAlerts extends React.Component {
    render() {
        let errorMessageAlerts = [];
        let errorMessages = this.props.errorMessages;
        errorMessages.forEach((errorMessage) => {
            errorMessageAlerts.push(
                <Alert bsStyle="danger">
                    {errorMessage}
                </Alert>
            );
        });
        return (
            <div>
                {errorMessageAlerts}
            </div>
        );
    }
}
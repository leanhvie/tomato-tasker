import React from "react";

import { Alert } from "react-bootstrap";

// React component for rendering error messages during form validation
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
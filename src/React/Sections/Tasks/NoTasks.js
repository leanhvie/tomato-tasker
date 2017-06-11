import React from "react";

import { PageHeader } from "react-bootstrap";

// React component for notifying the user that there are no task being created yet
export default class NoTasks extends React.Component {

    constructor() {
        super();
    }

    render() {
        return (
            <div id="no-tasks">
                <PageHeader>You have no tasks.</PageHeader>
            </div>
        );
    }
}
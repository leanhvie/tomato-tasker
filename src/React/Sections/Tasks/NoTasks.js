import React from "react";

import { PageHeader } from "react-bootstrap";

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
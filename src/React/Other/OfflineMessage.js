import React from "react";

import { PageHeader } from "react-bootstrap";

export default class OfflineMessage extends React.Component {

    render() {
        return (
            <div id="no-tasks">
                <PageHeader>Nice try, you're still offline though.</PageHeader>
            </div>
        );
    }
}
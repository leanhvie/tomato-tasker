import React from "react";

import { PageHeader } from "react-bootstrap";

// React component for notifying the cheeky user who attempted to change the hash url that despite his best efforts, he is still offline
export default class OfflineMessage extends React.Component {

    render() {
        return (
            <div id="no-tasks">
                <PageHeader>Nice try, you're still offline though.</PageHeader>
            </div>
        );
    }
}
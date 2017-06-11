import React from "react";

import Spinner from "react-spinkit";

// React component for the loading spinner that is rendered when fetching tasks on the tasks list page
export default class LoadingSpinner extends React.Component {

    constructor() {
        super()
    }

    render() {
        return (
            <div id="loading-spinner">
                <Spinner spinnerName="three-bounce" fadeIn="none"/>
            </div>
        );
    }
}
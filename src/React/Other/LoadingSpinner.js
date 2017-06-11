import React from "react";

import Spinner from "react-spinkit";

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
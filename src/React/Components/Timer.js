import React from "react";

export default class Timer extends React.Component {

    constructor() {
        super()
    }

    render() {
        return (
            <div className="svg radial-progress">
                <svg height="50em" width="50em">
                    <circle className="radial-progress-background" r="200" cx="25em" cy="25em" fill="transparent" strokeDasharray="0em" strokeDashoffset="0em"></circle>
                    <circle className="radial-progress-cover" r="200" cx="25em" cy="25em" fill="transparent" strokeDasharray="0em" strokeDashoffset="0"></circle>
                    <circle className="radial-progress-center" r="200" cx="25em" cy="25em" fill="transparent" strokeDasharray="0em" strokeDashoffset="0em"></circle>
                </svg>
            </div>
        );
    }
}
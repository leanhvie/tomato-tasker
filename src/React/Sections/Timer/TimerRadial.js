import React from "react";

import * as EmptyCheck from "../../../Utils/EmptyCheck";

export default class TimerRadial extends React.Component {

    constructor(props) {
        super(props);

        let border =  document.querySelector(".radial-progress-border");
        let background = document.querySelector(".radial-progress-background");

        this.state = {

            initialDuration: 1500,

            duration: 1500,
            elapsed: 0,
            remaining: 1500,

            breakDuration: 600,

            numberOfCycles: 0,

            onBreak: false,

            running: false,
            paused: false,

            timeoutRadial: 0,
            timeoutText: 0

        };

        this.fillProgress = this.fillProgress.bind(this);
        this.renderTimerText = this.renderTimerText.bind(this);
        this.startTimer = this.startTimer.bind(this);
    }

    componentWillReceiveProps(props) {
        if(!EmptyCheck.isObjectEmpty(props.currentTask)) {
            let workTime = this.stringToSeconds(props.currentTask.workTime);
            let breakTime = this.stringToSeconds(props.currentTask.breakTime);
            let numberOfCycles = props.currentTask.numberOfCycles;
            this.setState({
                initialDuration: workTime,

                duration: workTime,
                elapsed: 0,
                remaining: workTime,

                breakDuration: breakTime,

                numberOfCycles: numberOfCycles,

                onBreak: false,

                running: false,
                paused: false,

                timeoutRadial: 0,
                timeoutText: 0
            });
        }
    }

    stringToSeconds = (input) => {
        if(!EmptyCheck.isUndefinedOrNull(input)) {
            let array = input.split(":");
            return (+array[0]) * 60 * 60 + (+array[1]) * 60 + (+array[2]);
        }
    };

    fillProgress() {
        const radius = 35;
        const circumference = 2 * radius * Math.PI;

        const circleElements = document.querySelectorAll("circle");
        circleElements.forEach((circle) => {
            circle.setAttribute("stroke-dasharray", circumference.toString());
            circle.setAttribute("r", radius.toString());
        });

        if(this.state.onBreak) {
            document.querySelector(".radial-progress-border").setAttribute("stroke", "#0f7864");
            document.querySelector(".radial-progress-background").setAttribute("stroke", "#18bc9c");
        } else {
            document.querySelector(".radial-progress-border").setAttribute("stroke", "#e53c37");
            document.querySelector(".radial-progress-background").setAttribute("stroke", "#eb6864");
        }

        let elapsed = this.state.elapsed;
        const initialDuration = this.state.initialDuration;

        const that = this;

        (function fillProgress() {

            that.state.timeoutRadial = setTimeout(fillProgress, 1000);

            if (initialDuration < elapsed) {
                let dingSound = new Audio("../../../resources/audio/ding.wav");
                dingSound.play();
                clearTimeout(that.state.timeoutRadial);
                if(that.state.onBreak) {
                    if(that.state.numberOfCycles > 1) {
                        let workTime = that.stringToSeconds(that.props.currentTask.workTime);
                        let breakTime = that.stringToSeconds(that.props.currentTask.breakTime);
                        let numberOfCycles = that.state.numberOfCycles - 1;
                        that.setState({
                            initialDuration: workTime,

                            duration: workTime,
                            elapsed: 0,
                            remaining: workTime,

                            breakDuration: breakTime,

                            numberOfCycles: numberOfCycles,

                            onBreak: false,

                            running: false,
                            paused: false,

                            timeoutRadial: 0,
                            timeoutText: 0
                        }, () => {
                            that.fillProgress();
                            that.renderTimerText();
                        });
                    } else {
                        let timerButton = document.querySelector("#timer-button");
                        let timerButtonIcon = document.querySelector("#timer-button-icon");
                        timerButton.className = "btn btn-lg btn-success";
                        timerButtonIcon.className = "fa fa-play";

                        let workTime = 0;

                        if (EmptyCheck.isObjectEmpty(this.props.currentTask)) {
                            workTime = 1500;
                        } else {
                            workTime = this.stringToSeconds(this.props.currentTask.workTime);
                        }

                        that.setState({
                            initialDuration: workTime,
                            duration: workTime,
                            elapsed: 0,
                            remaining: workTime,
                            running: false,
                            onBreak: false
                        });
                    }
                } else {
                    const breakDuration = that.state.breakDuration;
                    that.setState({
                        initialDuration: breakDuration,
                        duration: breakDuration,
                        elapsed: 0,
                        remaining: breakDuration,
                        onBreak: true,
                    }, () => {
                        that.fillProgress();
                        that.renderTimerText();
                    });
                }
            }

            if(elapsed<=initialDuration) {
                const offset = -(circumference / initialDuration).toPrecision(21) * elapsed + "px";
                document.querySelector(".radial-progress-cover").setAttribute("stroke-dashoffset", offset);
                elapsed++;
                that.setState({
                    elapsed: elapsed,
                    remaining: initialDuration - elapsed
                });
            }
        })();

    }

    renderTimerText() {
        let timer = this.state.remaining;
        const that = this;

        (function renderTime() {

            that.state.timeoutText = setTimeout(renderTime, 1000);

            if (timer == 0) {
                clearTimeout(that.state.timeoutText);
            }

            let minutes = parseInt(timer / 60, 10);
            let seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            document.querySelector("title").innerHTML = minutes + ":" + seconds;
            document.querySelector("text").innerHTML = minutes + ":" + seconds;

            timer--;
        })()
    }

    startTimer() {
        let timerButton = document.querySelector("#timer-button");
        let timerButtonIcon = document.querySelector("#timer-button-icon");
        if(!this.state.running) {
            timerButton.className = "btn btn-lg btn-danger";
            timerButtonIcon.className = "fa fa-pause";
            this.setState({
                running: true,
                paused: false
            }, () => {
                this.fillProgress();
                this.renderTimerText();
            });
        } else if(!this.state.paused) {
            timerButton.className = "btn btn-lg btn-success";
            timerButtonIcon.className = "fa fa-play";
            const remaining = this.state.remaining;
            this.setState({
                duration: remaining,
                running: false,
                paused: true
            }, () => {
                clearTimeout(this.state.timeoutRadial);
                clearTimeout(this.state.timeoutText);
            })
        }
    }

    render() {

        const r = 35;
        const cx = 50;
        const cy = 50;

        return (
            <div id="timer-radial" className="svg radial-progress">
                <svg viewBox="0 0 100 100">
                    <g transform="rotate(270 50 50)">
                        <circle className="radial-progress-border" r={r} cx={cx} cy={cy}></circle>
                        <circle className="radial-progress-background" r={r} cx={cx} cy={cy}></circle>
                        <circle className="radial-progress-cover" r={r} cx={cx} cy={cy}></circle>
                        <circle className="radial-progress-center" r={r} cx={cx} cy={cy}></circle>
                    </g>
                    <text x="50" y="51" textAnchor="middle" fontSize="8">oh hi.</text>
                </svg>
            </div>
        );
    }
}
import React from "react";

export default class Timer extends React.Component {

    constructor(props) {
        super(props);

        let border =  document.querySelector(".radial-progress-border");
        let background = document.querySelector(".radial-progress-background");

        this.state = {

            initialDuration: this.props.setTime,

            duration: this.props.setTime,
            elapsed: 0,
            remaining: this.props.setTime,

            breakDuration: this.props.setTime,

            onBreak: false,

            running: false,
            paused: false,

            timeoutRadial: 0,
            timeoutText: 0

        };

        this.fillProgress = this.fillProgress.bind(this);
        this.renderTimerText = this.renderTimerText.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.pauseTimer = this.pauseTimer.bind(this);
    }

    fillProgress() {
        const radius = 16;
        const circumference = 2 * radius * Math.PI;

        const circleElements = document.querySelectorAll("circle");
        circleElements.forEach((circle) => {
            circle.setAttribute("stroke-dasharray", circumference + "em");
            circle.setAttribute("r", radius + "em");
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
                clearTimeout(that.state.timeoutRadial);
                if(that.state.onBreak) {
                    let timerButton = document.querySelector("#timer-button");
                    let timerButtonIcon = document.querySelector("#timer-button-icon");
                    timerButton.className = "btn btn-lg btn-success";
                    timerButtonIcon.className = "fa fa-play";
                    that.setState({
                        initialDuration: 5,
                        duration: 5,
                        elapsed: 0,
                        remaining: 5,
                        running: false,
                        onBreak: false
                    });
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
                const offset = -(circumference / initialDuration) * elapsed + "em";
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
        if(!this.state.running) {
            let timerButton = document.querySelector("#timer-button");
            let timerButtonIcon = document.querySelector("#timer-button-icon");
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
            let timerButton = document.querySelector("#timer-button");
            let timerButtonIcon = document.querySelector("#timer-button-icon");
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

    pauseTimer() {
        if(!this.state.paused) {
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

        const svgSection = "40em";
        const cx = (parseInt(svgSection)/2)+"em";
        const cy = (parseInt(svgSection)/2)+"em";

        return (
            <div className="svg radial-progress">
                <svg height={svgSection} width={svgSection}>
                    <g transform="translate(0, 585) rotate(270)">
                        <circle className="radial-progress-border" r="16em" cx={cx} cy={cy}></circle>
                        <circle className="radial-progress-background" r="16em" cx={cx} cy={cy}></circle>
                        <circle className="radial-progress-cover" r="16em" cx={cx} cy={cy}></circle>
                        <circle className="radial-progress-center" r="16em" cx={cx} cy={cy}></circle>
                    </g>
                    <text x="50%" y="50%" textAnchor="middle" fontSize="4em">oh hi.</text>
                </svg>
            </div>
        );
    }
}
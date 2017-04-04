import React from "react";

export default class Timer extends React.Component {

    constructor() {
        super();
        this.state = {

            initialDuration: 10,

            duration: 10,
            elapsed: 0,
            remaining: 10,

            breakDuration: 10,

            onBreak: false,

            running: false,
            paused: false,

        };
        this.fillProgress = this.fillProgress.bind(this);
        this.renderTimerText = this.renderTimerText.bind(this);
        this.startTimer = this.startTimer.bind(this);
        this.pauseTimer = this.pauseTimer.bind(this);
        this.getOnBreak = this.getOnBreak.bind(this);
    }

    fillProgress() {
        var radius = 16;
        var circumference = 2 * radius * Math.PI;

        var circleElements = document.querySelectorAll("circle");
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

        var elapsed = this.state.elapsed;
        var initialDuration = this.state.initialDuration;

        var that = this;

        (function fillRing() {
            var offset = -(circumference / initialDuration) * elapsed + "em";
            document.querySelector(".radial-progress-cover").setAttribute("stroke-dashoffset", offset);
            elapsed++;
            that.setState({
                elapsed: elapsed,
                remaining: initialDuration-elapsed
            });
            var timeoutRadial = setTimeout(fillRing, 1000);
            if(that.state.paused) {
                clearTimeout(timeoutRadial);
            }

            if (elapsed > initialDuration) {
                clearTimeout(timeoutRadial);
                if(that.state.onBreak) {
                    that.setState({
                        initialDuration: 10,
                        duration: 10,
                        elapsed: 0,
                        remaining: 10,
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
        })();

    }

    renderTimerText() {
        var timer = this.state.remaining;
        var that = this;

        (function renderTime() {
            var minutes = parseInt(timer / 60, 10);
            var seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            document.querySelector("text").innerHTML = minutes + ":" + seconds;

            timer--;

            var timeoutText = setTimeout(renderTime, 1000);

            if(that.state.paused) {
                clearTimeout(timeoutText);
            }

            if (timer<0) {
                clearTimeout(timeoutText);
            }
        })()
    }

    startTimer() {
        if(!this.state.running) {
            this.setState({
                running: true,
                paused: false
            }, () => {
                this.fillProgress();
                this.renderTimerText();
            });
        }
    }

    pauseTimer() {
        if(!this.state.paused) {
            const remaining = this.state.remaining;
            this.setState({
                duration: remaining,
                running: false,
                paused: true
            })
        }
    }

    getOnBreak() {
        return this.state.onBreak;
    }

    render() {

        console.log(this.state);

        const svgSection = "40em";
        const cx = (parseInt(svgSection)/2)+"em";
        const cy = (parseInt(svgSection)/2)+"em";

        return (
            <div className="svg radial-progress">
                <svg height={svgSection} width={svgSection}>
                    <g>
                        <circle className="radial-progress-border" r="16em" cx={cx} cy={cy}></circle>
                        <circle className="radial-progress-background" r="16em" cx={cx} cy={cy}></circle>
                        <circle className="radial-progress-cover" r="16em" cx={cx} cy={cy}></circle>
                        <circle className="radial-progress-center" r="16em" cx={cx} cy={cy}></circle>
                        <text x="50%" y="55%" textAnchor="middle" fontSize="8em"></text>
                    </g>
                </svg>
            </div>
        );
    }
}
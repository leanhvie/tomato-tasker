import React from "react";

// React component for the welcome/home page of the web application
export default class HomeSection extends React.Component {

    constructor() {
        super()
    }

    render() {
        return (
            <section id="home" className="container">
                <center><h3>So what can this thing do?</h3></center>
                <div id="home-paragraph-section">
                    <article className="home-paragraph">
                        <i className="fa fa-clock-o fa-4x" aria-hidden="true"></i>
                        <p className="home-paragraph-text">
                            Tomato Tasker is a customizable pomodoro timer where you can create activity sessions called 'Tasks'
                            with personal amount of work time and break time and assign it to the timer.
                        </p>
                    </article>
                    <article className="home-paragraph">
                        <span className="fa-stack fa-2x">
                            <i className="fa fa-wifi fa-stack-1x"></i>
                            <i className="fa fa-ban fa-stack-2x text-danger"></i>
                        </span>
                        <p className="home-paragraph-text">
                            Tomato Tasker can be used without connection to the internet.</p>
                        <p>
                            However, note that it will be ultimately relegated to being only a simple
                            pomodoro timer with the traditional 25 minutes work and 5 minutes break time.
                        </p>
                    </article>
                    <article className="home-paragraph">
                        <i class="fa fa-mobile fa-4x" aria-hidden="true"></i>
                        <p className="home-paragraph-text">
                            This application is responsive. You can use the timer as well as setting up your tasks right
                            from the comfort of your mobile device
                        </p>
                    </article>
                    <article className="home-paragraph">
                        <i className="fa fa-play fa-4x" aria-hidden="true"></i>
                        <p className="home-paragraph-text">
                            Click on the 'New task' button in the top right corner of the navigation bar to add a new task. Once
                            added, you will be redirected to a page with a list of tasks.
                        </p>
                        <p>
                            Each task has a button toolbar next to its title where you can assign the task to the timer, edit the task or delete it.
                        </p>
                    </article>
                </div>
            </section>
        );
    }
}
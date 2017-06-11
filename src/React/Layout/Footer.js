import React from "react";

// React component for the footer of the web application
export default class Footer extends React.Component {

    render() {
        return (
            <footer id="footer">
                <div><i class="fa fa-coffee" aria-hidden="true"></i> Powered by <a href="https://en.wikipedia.org/wiki/Coffee" style={{color: "#2c3e50"}}>Coffee</a></div>
                <div><a id="github-link" className="pull-right" href="https://github.com/leanhvie/tomato-tasker"><i class="fa fa-github" aria-hidden="true"></i> GitHub Repo</a></div>
            </footer>
        );
    }
}
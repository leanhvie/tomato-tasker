import React from "react";
import ReactDOM from "react-dom";
import { browserHistory, hashHistory, IndexRoute, Route, Router } from "react-router";
import {} from "history";
import Layout from "./React/Layout/Layout";

import TimerPage from "./React/Pages/Timer/TimerPage";
import TasksPage from "./React/Pages/Tasks/TasksPage";

const app = document.getElementById("app");

ReactDOM.render(
    <Router history={browserHistory}>
        <Route component={Layout}>
            <Route exact path="/" component={TimerPage}/>
            <Route path="/tasks" component={TasksPage}/>
        </Route>
    </Router>,
app);

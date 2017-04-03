import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Route, Switch } from "react-router"
import Layout from "./React/Layout/Layout";

import TimerPage from "./React/Pages/Timer/TimerPage";
import TasksPage from "./React/Pages/Tasks/TasksPage";

const app = document.getElementById("app");

ReactDOM.render(
    <BrowserRouter>
        <div>
            <Route component={Layout}/>
            <Switch>
                <Route exact path="/" component={TimerPage}/>
                <Route path="/tasks" component={TasksPage}/>
            </Switch>
        </div>
    </BrowserRouter>,
app);

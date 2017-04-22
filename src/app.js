import React from "react";
import ReactDOM from "react-dom";
import { browserHistory, hashHistory, IndexRoute, Route, Router } from "react-router";

import Layout from "./React/Layout/Layout";
import Content from "./React/Content";

const app = document.getElementById("app");

ReactDOM.render(
    <Router history={browserHistory}>
        <Route component={Layout}>
            <Route exact path="/" component={Content}/>
        </Route>
    </Router>,
app);

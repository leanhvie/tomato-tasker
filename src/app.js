import React from "react";
import ReactDOM from "react-dom";

import * as firebase from "firebase";

import App from "./React/App";

const config = {
    apiKey: "AIzaSyDOqsPyWkH5CMPbG9-NYP6ZOkwaSSkhCRE",
    authDomain: "tomato-tasker-98414.firebaseapp.com",
    databaseURL: "https://tomato-tasker-98414.firebaseio.com",
    projectId: "tomato-tasker-98414",
    storageBucket: "tomato-tasker-98414.appspot.com",
    messagingSenderId: "112465384217"
};
firebase.initializeApp(config);

const app = document.getElementById("app");

location.replace("#home");

ReactDOM.render(
    <App/>,
app);

import React from "react";

import LoadingSpinner from "../../Other/LoadingSpinner";
import NoTasks from "./NoTasks";
import TasksList from "./TasksList";
import OfflineMessage from "../../Other/OfflineMessage";

import TasksStore from "../../../Flux/Stores/TasksStore";
import * as TasksActions from "../../../Flux/Actions/TasksActions";

import * as EmptyCheck from "../../../Utils/EmptyCheck";

// Top level React component for handling task-related views
export default class TasksPage extends React.Component {

    constructor() {
        super();
        this.state = {
            // Checks whether the application is fetching tasks, if so this component will render a loading spinner
            isFetchingTasks: TasksStore.getIsFetchingTasks(),
            // Note: Tasks are in a JavaScript object, not in an array
            tasks: TasksStore.getTasks()
        }
    }

    // Before the component gets mounted, it will send an action the the TaskStore to fetch the tasks from Firebase
    componentWillMount() {
        TasksStore.on("change", this.getIsFetchingTasks);
        TasksStore.on("change", this.getTasks);
        TasksActions.loadTasks();
    }

    componentWillUnmount() {
        TasksStore.removeListener("change", this.getIsFetchingTasks);
        TasksStore.removeListener("change", this.getTasks);
    }

    getIsFetchingTasks = () => this.setState({isFetchingTasks: TasksStore.getIsFetchingTasks()});
    getTasks = () => this.setState({tasks: TasksStore.getTasks()});

    render() {
        if(this.props.isOnline) {
            if(this.state.isFetchingTasks) {
                return(
                    <section id="tasks" className="container">
                        <LoadingSpinner/>
                    </section>
                )
            } else {
                return(
                    <section id="tasks" className="container">
                        {EmptyCheck.isUndefinedOrNull(this.state.tasks) ? (<NoTasks/>) : (<TasksList tasks={this.state.tasks}/>)}
                    </section>
                );
            }
        } else {
            /* If the user is not connected to the internet and cheekily attempts to get to the task section by changing
            the has in the url, he will be greeted by this message */
            return(
                <section id="tasks" className="container">
                    <OfflineMessage/>
                </section>
            )
        }
    }
}
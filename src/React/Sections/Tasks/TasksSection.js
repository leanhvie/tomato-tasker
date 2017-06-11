import React from "react";

import LoadingSpinner from "../../Other/LoadingSpinner";
import NoTasks from "./NoTasks";
import TasksList from "./TasksList";
import OfflineMessage from "../../Other/OfflineMessage";

import TasksStore from "../../../Flux/Stores/TasksStore";
import * as TasksActions from "../../../Flux/Actions/TasksActions";

import * as EmptyCheck from "../../../Utils/EmptyCheck";

export default class TasksPage extends React.Component {

    constructor() {
        super();
        this.state = {
            isFetchingTasks: TasksStore.getIsFetchingTasks(),
            tasks: TasksStore.getTasks()
        }
    }

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
                        {EmptyCheck.isUndefinedOrNull(this.state.tasks) ? (<NoTasks/>) : (
                            <TasksList tasks={this.state.tasks}/>)}
                    </section>
                );
            }
        } else {
            return(
                <section id="tasks" className="container">
                    <OfflineMessage/>
                </section>
            )
        }
    }
}
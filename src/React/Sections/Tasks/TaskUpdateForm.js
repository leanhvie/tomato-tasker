import React from "react";

import { Button, ControlLabel, Form, FormControl, FormGroup, InputGroup, Modal } from "react-bootstrap";

import FormErrorMessageAlerts from "../../Other/FormErrorMessageAlerts";

import * as TasksActions from "../../../Flux/Actions/TasksActions";

import * as EmptyCheck from "../../../Utils/EmptyCheck";
import * as Validation from "../../../Utils/Validation";

// React component for udpating a task. The form itself is a modal popup.
export default class TasksUpdateForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

            key: this.props.currentTask.key,

            title: this.props.currentTask.title,
            description: this.props.currentTask.description,

            workTime: this.props.currentTask.workTime,
            breakTime: this.props.currentTask.breakTime,

            numberOfCycles: this.props.currentTask.numberOfCycles,

            showModal: false
        };
        this.validateInputs = this.validateInputs.bind(this);
        this.submit = this.submit.bind(this);
    }

    setTitleState = (event) => this.setState({title: event.target.value});
    setDescriptionState = (event) => this.setState({description: event.target.value});
    setWorkTimeState = (event) => this.setState({workTime: event.target.value});
    setBreakTimeState = (event) => this.setState({breakTime: event.target.value});
    setNumberOfCyclesState = (event) => this.setState({numberOfCycles: event.target.value});

    setTitleValidationState = (state) => this.setState({titleValidationState: state});
    setDescriptionValidationState = (state) => this.setState({descriptionValidationState: state});
    setWorkTimeValidationState = (state) => this.setState({workTimeValidationState: state});
    setBreakTimeValidationState = (state) => this.setState({breakTimeValidationState: state});
    setNumberOfCyclesValidationState = (state) => this.setState({numberOfCyclesValidationState: state});

    setErrorMessagesState = (errorMessages) => this.setState({errorMessages: errorMessages});

    /* Validates input from the form upon attempting to submit the form. Validation states change the input style of the
     form to a red color, notifying the user which input field needs to be changed */
    validateInputs() {
        let errorMessages = [];
        if(!Validation.validateNotEmpty(this.state.title)) {
            errorMessages.push("Title must not be empty.");
            this.setTitleValidationState("error");
        } else if(!Validation.validateInputLength(this.state.title, 36)) {
            errorMessages.push("Title must not exceed 36 characters.");
            this.setTitleValidationState("error");
        } else {
            this.setTitleValidationState(null);
        }
        if(!Validation.validateNotEmpty(this.state.description)) {
            errorMessages.push("Description must not be empty.");
            this.setDescriptionValidationState("error");
        } else if(!Validation.validateInputLength(this.state.description, 255)) {
            errorMessages.push("Description must not exceed 255 characters.");
            this.setDescriptionValidationState("error");
        } else {
            this.setDescriptionValidationState(null);
        }
        if(!Validation.validateTimeInput(this.state.workTime) || !Validation.validateTimeInput(this.state.breakTime)) {
            errorMessages.push("Both time inputs must be in hh:mm:ss format.");
            this.setWorkTimeValidationState("error");
            this.setBreakTimeValidationState("error");
        } else {
            this.setWorkTimeValidationState(null);
            this.setBreakTimeValidationState(null);
        }
        if(!Validation.validatePositiveInteger(this.state.numberOfCycles.toString())) {
            errorMessages.push("Number of cycles must be a positive integer");
            this.setNumberOfCyclesValidationState("error");
        } else {
            this.setNumberOfCyclesValidationState(null);
        }
        return errorMessages;
    }

    submit(event) {
        event.preventDefault();
        let errorMessages = this.validateInputs();
        /* If the validation returned no error messages, the form submission can continue, else they will be rendered on
         top of the form */
        if(EmptyCheck.isArrayEmpty(errorMessages)) {
            const key = this.state.key;
            const title = this.state.title;
            const description = this.state.description;
            const workTime = this.state.workTime;
            const breakTime = this.state.breakTime;
            const numberOfCycles = this.state.numberOfCycles;
            TasksActions.updateTask(key, title, description, workTime, breakTime, numberOfCycles);
            this.closeModal();
        } else {
            this.setErrorMessagesState(errorMessages);
        }
    }

    openModal = () => this.setState({ showModal: true });
    closeModal = () => this.setState({ showModal: false });

    render() {
        return (
            <Button bsSize="xsmall" bsStyle="info" onClick={this.openModal}>

                <i className="fa fa-pencil-square-o" aria-hidden="true"></i>

                <Modal show={this.state.showModal} onHide={this.closeModal}>
                    <Modal.Header closeButton>
                        <Modal.Title>Update task</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        {
                            // Here we check whether the user has created any error messages when filling the form
                            EmptyCheck.isArrayEmpty(this.state.errorMessages) ?
                            null :
                            (<FormErrorMessageAlerts errorMessages={this.state.errorMessages}/>)
                        }
                        <Form>
                            <FormGroup controlId="formTitle" validationState={this.state.titleValidationState}>
                                <ControlLabel>Title</ControlLabel>
                                <InputGroup>
                                    <InputGroup.Addon>
                                        <i class="fa fa-tag" aria-hidden="true"></i>
                                    </InputGroup.Addon>
                                    <FormControl
                                        type="text"
                                        value={this.state.title}
                                        onChange={this.setTitleState}
                                    />
                                </InputGroup>
                            </FormGroup>
                            <FormGroup controlId="formDescription" validationState={this.state.descriptionValidationState}>
                                <ControlLabel>Description</ControlLabel>
                                <InputGroup>
                                    <InputGroup.Addon>
                                        <i className="fa fa-align-justify fa" aria-hidden="true"></i>
                                    </InputGroup.Addon>
                                    <FormControl
                                        type="text"
                                        value={this.state.description}
                                        onChange={this.setDescriptionState}
                                    />
                                </InputGroup>
                            </FormGroup>
                            <hr></hr>
                            <FormGroup validationState={this.state.workTimeValidationState}>
                                <ControlLabel>Work time</ControlLabel>
                                <InputGroup>
                                    <InputGroup.Addon>
                                        <i className="fa fa-briefcase fa" aria-hidden="true"></i>
                                    </InputGroup.Addon>
                                    <FormControl
                                        type="text"
                                        placeholder="hh:mm"
                                        value={this.state.workTime}
                                        onChange={this.setWorkTimeState}
                                    />
                                </InputGroup>
                            </FormGroup>
                            <FormGroup validationState={this.state.breakTimeValidationState}>
                                <ControlLabel>Break time</ControlLabel>
                                <InputGroup>
                                    <InputGroup.Addon>
                                        <i className="fa fa-coffee fa" aria-hidden="true"></i>
                                    </InputGroup.Addon>
                                    <FormControl
                                        type="text"
                                        placeholder="hh:mm"
                                        value={this.state.breakTime}
                                        onChange={this.setBreakTimeState}
                                    />
                                </InputGroup>
                            </FormGroup>
                            <FormGroup validationState={this.state.numberOfCyclesValidationState}>
                                <ControlLabel>Number of cycles</ControlLabel>
                                <InputGroup>
                                    <InputGroup.Addon>
                                        <i className="fa fa-refresh fa" aria-hidden="true"></i>
                                    </InputGroup.Addon>
                                    <FormControl
                                        type="text"
                                        placeholder="hh:mm"
                                        value={this.state.numberOfCycles}
                                        onChange={this.setNumberOfCyclesState}
                                    />
                                </InputGroup>
                            </FormGroup>
                            <FormGroup>
                                <Button
                                    type="submit"
                                    bsStyle="success"
                                    onClick={this.submit}
                                    block
                                >
                                    Submit
                                </Button>
                            </FormGroup>
                        </Form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.closeModal}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </Button>
        );
    }
}
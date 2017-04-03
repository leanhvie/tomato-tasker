import React from "react";

import rd3 from "rd3";

let PieChart = rd3.PieChart;

import Spinner from "react-spinkit";

import IssueStore from "../Flux/Stores/IssueStore";

import * as EmptyCheck from "../../Utils/EmptyCheck";

export default class IssuePriorityPieChart extends React.Component {

    constructor() {
        super();
        this.state = {
            isFetchingIssuesByGroup: IssueStore.getIsFetchingIssuesByGroup(),
            issuesByGroup: IssueStore.getIssuesByGroup()
        };
        this.getIsFetchingIssuesByGroup = this.getIsFetchingIssuesByGroup.bind(this);
        this.getIssuesByGroup = this.getIssuesByGroup.bind(this);
    }

    componentWillMount() {
        IssueStore.on("change", this.getIsFetchingIssuesByGroup);
        IssueStore.on("change", this.getIssuesByGroup);
    }

    componentWillUnmount() {
        IssueStore.removeListener("change", this.getIsFetchingIssuesByGroup);
        IssueStore.removeListener("change", this.getIssuesByGroup);
    }

    getIsFetchingIssuesByGroup() {
        this.setState({isFetchingIssuesByGroup: IssueStore.getIsFetchingIssuesByGroup()});
    }

    getIssuesByGroup() {
        this.setState({issuesByGroup: IssueStore.getIssuesByGroup()});
    }

    createData() {
        const issues = this.state.issuesByGroup;
        const frequencyArray = [0,0,0,0];
        if(!EmptyCheck.isArrayEmpty(issues)) {
            issues.forEach(function (issue) {
                let priority = issue.priority;
                switch (priority) {
                    case "LOW":
                        frequencyArray[0]++;
                        break;
                    case "MODERATE":
                        frequencyArray[1]++;
                        break;
                    case "HIGH":
                        frequencyArray[2]++;
                        break;
                    case "URGENT":
                        frequencyArray[3]++;
                        break;
                }
            });
        }
        let pieData =
            [
                {label: "LOW", value: frequencyArray[0]},
                {label: "MODERATE", value: frequencyArray[1]},
                {label: "HIGH", value: frequencyArray[2]},
                {label: "URGENT", value: frequencyArray[3]}
            ];
        return pieData;
    }

    render() {

        if(this.state.isFetchingIssuesByGroup) {
            return (
                <Spinner spinnerName="three-bounce" noFadeIn/>
            )
        } else {
            return (
                <PieChart
                    data={this.createData()}
                    width={450}
                    height={400}
                    radius={110}
                    innerRadius={20}
                    valueTextFormatter={(value) => value}
                    sectorBorderColor="white"
                    title="Issue statuses"
                />
            );
        }
    }
}
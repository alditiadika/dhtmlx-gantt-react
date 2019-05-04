import React, { Component } from "react";
import "dhtmlx-gantt/codebase/dhtmlxgantt.css";
import "./style.css";
import Gantt from "./gantt-processor";
export default class EntryGantt extends Component {
  componentWillMount() {
    window.addEventListener("click", rootE => {
      //do something here
      if (rootE.target.className === "special-test") {
        console.log(rootE.target.checked, rootE.target.id);
      }
    });
  }
  render() {
    return <Gantt isLoading={this.props.isLoading} />;
  }
}

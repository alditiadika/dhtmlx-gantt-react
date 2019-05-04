// import './gantt.css'
import React, { Component } from "react";
import { gantt } from "dhtmlx-gantt";
import { setZoom, layout, data } from "./config";
class Gantt extends Component {
  componentDidMount() {
    gantt.config.layout = layout;
    gantt.config.order_branch = "marker";
    gantt.config.order_branch_free = "marker";
    gantt.init(this.ganttContainer);
    gantt.attachEvent("onTaskClick", () => {
      return false;
    });
    gantt.attachEvent("onTaskDblClick", () => {
      return false;
    });
    gantt.parse(data);
  }
  render() {
    setZoom(gantt, "Days");
    return (
      <div
        ref={input => {
          this.ganttContainer = input;
        }}
        style={{ width: "100%", height: "100%" }}
      />
    );
  }
}

export default Gantt;

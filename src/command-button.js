import React, { Component } from "react"
import Add from "@material-ui/icons/Add"
import Remove from "@material-ui/icons/Remove"

import { Tooltip } from "./utils"

export default class extends Component {
  render() {
    return (
      <div className="text-right">
        <Tooltip
          message="Add Data"
          placement="bottom"
          keyname="add-button"
          data={Add}
          onClick={() => alert("add")}
          style={{ cursor: "pointer" }}
        />
        <Tooltip
          message="Remove Selected"
          placement="bottom"
          keyname="remove-button"
          data={Remove}
          onClick={() => alert("remove")}
          style={{ cursor: "pointer" }}
        />
      </div>
    )
  }
}

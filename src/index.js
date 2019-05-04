import React, { Component } from "react";
import reactDOM from "react-dom";

import Main from "./main";

class Index extends Component {
  render() {
    return <Main />;
  }
}

reactDOM.render(<Index />, document.getElementById("root"));

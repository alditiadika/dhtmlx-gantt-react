import React, { Component } from "react";
import reactDOM from "react-dom";
import { Provider } from "react-redux";
import Main from "./main";
import store from "./redux/store";
class Index extends Component {
  render() {
    return (
      <Provider store={store}>
        <Main />
      </Provider>
    );
  }
}

reactDOM.render(<Index />, document.getElementById("root"));

import React, { Component } from "react";
import SecondComponent from "./SecondComponent";

class FirstComponent extends Component {
  render() {
    return (
      <div className="App">
        <SecondComponent />
      </div>
    );
  }
}

export default FirstComponent;

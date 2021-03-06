import React from "react";
import ReactDOM from "react-dom";
import FirstComponent from "./FirstComponent";

jest.mock("./SecondComponent");

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FirstComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});

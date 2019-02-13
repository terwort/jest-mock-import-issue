import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

jest.mock("@babel/polyfill", () => () => <div />);
jest.mock("material-design-icons", () => () => <div />);
jest.mock("lodash", () => () => <div />);
jest.mock("axios", () => () => <div />);
jest.mock("express", () => () => <div />);
jest.mock("jquery", () => () => <div />);
jest.mock("moment", () => () => <div />);
jest.mock("prop-types", () => () => <div />);
jest.mock("redux", () => () => <div />);
jest.mock("socket.io", () => () => <div />);

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

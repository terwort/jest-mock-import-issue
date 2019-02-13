import React from "react";
import ReactDOM from "react-dom";
import FirstComponent from "./FirstComponent";

jest.mock("@babel/polyfill");
jest.mock("material-design-icons");
jest.mock("lodash");
jest.mock("axios");
jest.mock("express");
jest.mock("jquery");
jest.mock("moment");
jest.mock("prop-types");
jest.mock("redux");
jest.mock("socket.io");

it("renders without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(<FirstComponent />, div);
  ReactDOM.unmountComponentAtNode(div);
});

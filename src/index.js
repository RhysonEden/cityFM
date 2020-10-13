// import React from "react";
// import ReactDOM from "react-dom";
// import { render } from "react-dom";
// import { transitions, positions, Provider as AlertProvider } from "react-alert";
// import AlertTemplate from "react-alert-template-basic";

// import { App } from "./components";

// const Root = () => {
//   <AlertProvider template={AlertTemplate}>
//     <App />
//   </AlertProvider>;
// };

// ReactDOM.render(<Root />, document.getElementById("root"));

import React from "react";
import { render } from "react-dom";
import { transitions, positions, Provider as AlertProvider } from "react-alert";
import AlertTemplate from "react-alert-template-basic";
import { App } from "./components";

// optional configuration
const options = {
  timeout: 5000,
  offset: "30px",
  transition: transitions.SCALE,
};

const Root = () => (
  <AlertProvider template={AlertTemplate} {...options}>
    <App />
  </AlertProvider>
);

render(<Root />, document.getElementById("root"));

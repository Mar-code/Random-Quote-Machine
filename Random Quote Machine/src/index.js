import React from "react";
import ReactDOM from "react-dom";

import Presentational from "./App";

const rootElement = document.getElementById("quote-box");
ReactDOM.render(
  <React.StrictMode>
    <Presentational />
  </React.StrictMode>,
  rootElement
);

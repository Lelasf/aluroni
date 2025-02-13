import React from "react";
import ReactDOM from "react-dom";
import "normalize.css";
import "./index.css";
import Menu from "./pages/Menu/Menu";
import Home from "pages/Home/Home";

ReactDOM.render(
  <React.StrictMode>
    {/* <Menu /> */}
    <Home />
  </React.StrictMode>,
  document.getElementById("root")
);

import React from "react";
import ReactDOM from "react-dom";

import reportWebVitals from "./reportWebVitals";
import "./index.css";

import { HeroSplash } from "./hero/HeroSplash";
import { NavBar } from "./nav/NavBar";

ReactDOM.render(
  <React.StrictMode>
    <NavBar />
    <HeroSplash />
    <div className="header red"></div>
    <div className="header blue"></div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

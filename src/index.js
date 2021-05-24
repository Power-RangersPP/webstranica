import React from "react";
import ReactDOM from "react-dom";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

ReactDOM.render(
  <React.StrictMode>
    <Navbar />
    <Header />
  </React.StrictMode>,
  document.getElementById("root")
);

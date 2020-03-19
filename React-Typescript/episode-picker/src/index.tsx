import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { StoreProvider } from "./Store";

const root = document.getElementById("app-root");
ReactDOM.render(
  <StoreProvider>
    <App />{" "}
  </StoreProvider>,
  root
);

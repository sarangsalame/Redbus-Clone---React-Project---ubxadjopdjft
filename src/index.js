import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App";
import { ContextProvider } from "./store/context-data";

ReactDOM.render(
  <ContextProvider>
    <App />
  </ContextProvider>,

  document.getElementById("root")
);

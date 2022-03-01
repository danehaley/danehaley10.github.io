import React from "react";
import ReactDOM from "react-dom";
import "./assets/styles/index.scss";
import App from "./App";
import { AppContextProvider } from "./contexts/AppContextProvider";

ReactDOM.render(
  <React.StrictMode>
    <AppContextProvider>
      <App />
    </AppContextProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

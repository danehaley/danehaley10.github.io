import React from "react";
import AppContext from "./AppContext";
import input from "../appInput";

function AppContextProvider({ children }) {
  return <AppContext.Provider value={input}>{children}</AppContext.Provider>;
}

export { AppContextProvider };

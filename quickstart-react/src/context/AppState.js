import React, { useState } from "react";
import { createContext } from "react";

const AppState = ({ children }) => {
  const Context = createContext();
  const [theme, setTheme] = useState("light");
  const [boardData, setBoardDate] = useState(undefined);
  const value = { theme, setTheme, boardData, setBoardDate };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default AppState;

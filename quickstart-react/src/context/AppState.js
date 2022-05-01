import React, { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();
const AppState = ({ children }) => {
  const [theme, setTheme] = useState("light");
  const [boardData, setBoardDate] = useState(undefined);
  const value = { theme, setTheme, boardData, setBoardDate };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppState;

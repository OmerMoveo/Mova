import React, { useState } from "react";
import { createContext } from "react";

export const AppContext = createContext();
const AppState = ({ children }) => {
  const [userData, setUserData] = useState(undefined);
  const [boardData, setBoardData] = useState(undefined);
  const [selectedColumn, setSelectedColumn] = useState(undefined);
  const value = {
    userData,
    setUserData,
    boardData,
    setBoardData,
    selectedColumn,
    setSelectedColumn,
  };
  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};

export default AppState;

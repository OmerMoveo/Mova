import React from "react";
import "./App.css";
import mondaySdk from "monday-sdk-js";
import "monday-ui-react-core/dist/main.css";
import Dictaphone from "./Features/Dictaphone";
import AppState from "./context/AppState";

const monday = mondaySdk();
const App = () => {
  return (
    <AppState>
      <div className="App">
        <Dictaphone />
      </div>
    </AppState>
  );
};

export default App;

import React from "react";
import "./App.css";
import "monday-ui-react-core/dist/main.css";
import Dictaphone from "./Features/Dictaphone";
import AppState from "./context/AppState";

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

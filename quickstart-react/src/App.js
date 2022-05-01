import React, { useEffect } from "react";
import "./App.css";
import "monday-ui-react-core/dist/main.css";
import Dictaphone from "./Features/Dictaphone";
import AppState from "./context/AppState";
import Boards from "./Features/Boards";

const App = () => {
  useEffect(() => {
    console.log("test");
  }, []);

  return (
    <AppState>
      <div className="App">
        <Dictaphone />
        {/* <Boards /> */}
      </div>
    </AppState>
  );
};

export default App;

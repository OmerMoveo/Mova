import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import mondaySdk from "monday-sdk-js";
import "monday-ui-react-core/dist/main.css";
//Explore more Monday React Components here: https://style.monday.com/
import AttentionBox from "monday-ui-react-core/dist/AttentionBox.js";
import Dictaphone from "./Features/Dictaphone";
import Auth from "./Features/Auth";

const monday = mondaySdk();

class App extends React.Component {
  constructor(props) {
    super(props);

    // Default state
    this.state = {
      settings: {},
      name: "",
    };
  }

  componentDidMount() {
    // TODO: set up event listeners
  }

  render() {
    return (
      <Router>
        <Routes>
          <Route path="/home" element={<Dictaphone />} />
        </Routes>
        <Routes>
          <Route path="/" element={<Auth />} />
        </Routes>
      </Router>
    );
  }
}

export default App;

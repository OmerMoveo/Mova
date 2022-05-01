import React, { useEffect, useState } from "react";
import "./App.css";
import mondaySdk from "monday-sdk-js";
import "monday-ui-react-core/dist/main.css";
import Dictaphone from "./Features/Dictaphone";
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
    monday.listen("context", (res) => {
      this.setState({ context: res.data });
      monday
        .api(
          `query ($boardIds: [Int]) { boards (ids:$boardIds) { name items(limit:1) { name column_values { title text } } } }`,
          { variables: { boardIds: this.state.context.boardIds } }
        )
        .then((res) => {
          this.setState({ boardData: res.data });
        })
        .then(() => {
          console.log("query board:", this.state.boardData);
          console.log("listen context:", this.state.context);
        });
    });
  }

  render() {
    return (
      <div className="App">
        <Dictaphone />
      </div>
    );
  }
}

export default App;

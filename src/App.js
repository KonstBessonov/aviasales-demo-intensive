import React, { Component } from "react";
import BlueHeader from "./BlueHeader";
import TopDestination from "./TopDestination";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BlueHeader />
        <TopDestination />
      </div>
    );
  }
}

export default App;

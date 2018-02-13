import React, { Component } from "react";
import BlueHeader from "./BlueHeader";
import TopDestination from "./TopDestination";
import PopularDirections from "./PopularDirections";
import SpecialOffers from "./SpecialOffers";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <BlueHeader />
        <TopDestination />
        <PopularDirections />
        <SpecialOffers />
      </div>
    );
  }
}

export default App;

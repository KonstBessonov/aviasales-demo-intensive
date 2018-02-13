import React, { Component } from "react";
import MainForm from "./MainForm";
import TopDestination from "./TopDestination";
import PopularDirections from "./PopularDirections";
import SpecialOffers from "./SpecialOffers";
import Articles from "./Articles";
import MobileApp from "./MobileApp";
import Navigation from "./Navigation";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainForm />
        <TopDestination />
        <PopularDirections />
        <SpecialOffers />
        <Articles />
        <MobileApp />
        <Navigation />
      </div>
    );
  }
}

export default App;

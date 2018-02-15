import React, { Component } from "react";
import MainForm from "./MainForm";
import TopDestination from "./TopDestination";
import BestPrices from "./BestPrices";
import Agencies from "./Agencies";
import SpecialOffers from "./SpecialOffers";
import Articles from "./Articles";
import MobileApp from "./MobileApp";
import Navigation from "./Navigation";
import Footer from "./Footer";

import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainForm />
        <TopDestination />
        <BestPrices />
        <Agencies />
        <SpecialOffers />
        <Articles />
        <MobileApp />
        <Navigation />
        <Footer />
      </div>
    );
  }
}

export default App;

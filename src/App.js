import React, { Component } from "react";
import { theme } from "./assets";
import MainForm from "./MainForm";
import TopDestination from "./TopDestination";
import BestPrices from "./BestPrices";
import Agencies from "./Agencies";
import Subscribe from "./Subscribe";
import SpecialOffers from "./SpecialOffers";
import Articles from "./Articles";
import MobileApp from "./MobileApp";
import Navigation from "./Navigation";
import Footer from "./Footer";

import "./App.css";
import { ThemeProvider } from "styled-components";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <MainForm />
          <TopDestination />
          <BestPrices />
          <Agencies />
          <Subscribe />
          <SpecialOffers />
          <Articles />
          <MobileApp />
          <Navigation />
          <Footer />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;

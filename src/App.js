import React, { Component } from "react";
import { theme } from "./Main/assets";
import MainForm from "./Main/MainForm";
import TopDestination from "./Main/TopDestination";
import BestPrices from "./Main/BestPrices";
import Agencies from "./Main/Agencies";
import Subscribe from "./Main/Subscribe";
import SpecialOffers from "./Main/SpecialOffers";
import Articles from "./Main/Articles";
import MobileApp from "./Main/MobileApp";
import Navigation from "./Main/Navigation";
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

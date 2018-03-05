import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { theme } from "./assets";
import Main from "./Main";
import Search from "./Forms/Search";
import Navigation from "./Navigation";
import Footer from "./Footer";
import { addLocaleData, IntlProvider } from "react-intl";
import ruLocaleData from "react-intl/locale-data/ru";

import "./App.css";
import { ThemeProvider } from "styled-components";

addLocaleData(ruLocaleData);

class App extends Component {
  render() {
    return (
      <IntlProvider locale="ru">
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <div className="App">
              <Helmet>
                <title>Aviasales Demo App</title>
              </Helmet>
              <Route exact path="/" component={Main} />
              <Route path="/search" component={Search} />
              <Navigation />
              <Footer />
            </div>
          </BrowserRouter>
        </ThemeProvider>
      </IntlProvider>
    );
  }
}

export default App;

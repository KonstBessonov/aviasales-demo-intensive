import React, { Component } from "react";
import { Route } from "react-router-dom";
import { Helmet } from "react-helmet";
import { theme } from "./assets";
import Main from "./Main";
import Search from "./Forms/Search";
import Navigation from "./Navigation";
import Footer from "./Footer";

import "./App.css";
import { ThemeProvider } from "styled-components";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Helmet>
            <title>Aviasales Demo App</title>
          </Helmet>
          <Route exact path="/" component={Main} />
          <Route path="/search" component={Search} />
          <Navigation />
          <Footer />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;

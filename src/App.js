import React, { Component } from "react";
import { Route } from "react-router-dom";
import { theme } from "./assets";
import Main from "./Main";
import Search from "./Forms/Search";
import Footer from "./Footer";

import "./App.css";
import { ThemeProvider } from "styled-components";

class App extends Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <div className="App">
          <Route exact path="/" component={Main} />
          <Route path="/search" component={Search} />
          <Footer />
        </div>
      </ThemeProvider>
    );
  }
}

export default App;

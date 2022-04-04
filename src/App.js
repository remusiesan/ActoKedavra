import React, { useState } from "react";
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import StyleguidePage from "./StyleguidePage";

import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";

import "@fontsource/poppins";

function App(props) {

  return (
    <div className="App">
       <BrowserRouter>
        <Switch>
          <Route path="/home">
            <Header />
            <Footer />
          </Route>
          <Route path="/StyleguidePage">
            <StyleguidePage />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;

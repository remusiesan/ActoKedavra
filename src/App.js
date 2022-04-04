import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import StyleguidePage from "./StyleguidePage";

import Header from "./components/UI/Header";
import Footer from "./components/UI/Footer";

import "@fontsource/poppins";

function App(props) {

  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path='/' element={<><Header /> <Footer /></>} />
          <Route path="/StyleguidePage" element={<StyleguidePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

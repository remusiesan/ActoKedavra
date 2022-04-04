import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import StyleguidePage from "./StyleguidePage";

import Header from "./components/UI/Header";
import EmptyState from "./components/UI/EmptyState";
import ListOfActors from "./components/Actor/ListOfActors";
import Footer from "./components/UI/Footer";

import "@fontsource/poppins";

function App(props) {
  const [emptyList, setEmptyList] = useState(true);
  const [actors, setActors] = useState([])
  useEffect(() => {
    const getActors = async () => {
      const actorsFromServer = await fetchActors()
      setActors(actorsFromServer)
    }
    getActors()
  }, [])

  const fetchActors =  async () => {
    const res = await fetch('http://localhost:5000/actors')
    const data = await res.json()
    return data;
  }

  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path='/' element={
            <>
              <Header />
              {actors.length > 0 &&
                <ListOfActors actors={actors}>
                  
                </ListOfActors>
              }

              {actors.length === 0 &&
                <EmptyState />
              }
              <Footer />
            </>
          } />
          <Route path="/StyleguidePage" element={<StyleguidePage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

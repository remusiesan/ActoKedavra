import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import StyleguidePage from "./StyleguidePage";

import Header from "./components/UI/Header";
import EmptyState from "./components/UI/EmptyState";
import ListOfActors from "./components/Actor/ListOfActors";
import Modal from "./components/UI/Modal";
import AddEditActorForm from "./components/Forms/AddEditActorForm";
import Footer from "./components/UI/Footer";

import "@fontsource/poppins";

function App(props) {
  const [showAddEditForm, setShowAddEditForm] = useState(false);
  const [actors, setActors] = useState([])
  const [actor, setActor] = useState([])
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

  const getActorForEdit = async(actorId) => {
    const res = await fetch(`http://localhost:5000/actors/${actorId}`,
    {
        method: 'GET'
    })
    const actor = await res.json()
    setActor(actor)
    setShowAddEditForm(true)
  }

  const showModalHandler = async(result) => {
    setShowAddEditForm(result)
    setActors([])
    const actorsFromServer = await fetchActors()
    setActors(actorsFromServer)
  }

  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path='/' element={
            <>
              <Header />
              {actors.length > 0 &&
                <ListOfActors actors={actors} actorId={getActorForEdit}> 
                </ListOfActors>
              }

              {actors.length === 0 &&
                <EmptyState />
              }
              
              {showAddEditForm && 
                <div className="modalContainer">
                  <Modal title="Edit Actor" showCloseButton={true} showModal={showModalHandler}>
                    <AddEditActorForm actor={actor} buttonText="Update" actionType="updateActor" showModal={showModalHandler}/>
                  </Modal>
                </div>
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

import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import StyleguidePage from "./StyleguidePage";

import Header from "./components/UI/Header";
import EmptyState from "./components/UI/EmptyState";
import ListOfActors from "./components/Actor/ListOfActors";
import Modal from "./components/UI/Modal";
import AddEditActorForm from "./components/Forms/AddEditActorForm";
import SelectAll from "./components/UI/SelectAll";
import Button from "./components/UI/Button";
import Footer from "./components/UI/Footer";

import "@fontsource/poppins";

function App(props) {
  const [editModal, setEditModal] = useState(false);
  const [chooseActor, setChooseActor] = useState(false);
  const [numberOfSelectedActors, setnumberOfSelectedActors] = useState(0);
  const [selectModal, setSelectModal] = useState(false);
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
    setEditModal(true)
  }

  const editModalHandler = async(result) => {
    setEditModal(result)
    setActors([])
    const actorsFromServer = await fetchActors()
    setActors(actorsFromServer)
  }

  const selectModalHandler = (result) => {
    if(result){
      setSelectModal(true)
      setChooseActor(true)
    } else {
      setSelectModal(false)
      setChooseActor(false)
    }
  }

  const numberOfActorsSelectedHandler = (result) => {
    setnumberOfSelectedActors(result)
  }

  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path='/' element={
            <>
              <Header />
              {actors.length > 0 &&
                <ListOfActors actors={actors} actorId={getActorForEdit} selectModal={selectModalHandler} chooseActor={chooseActor} numberOfActorsSelected={numberOfActorsSelectedHandler}> 
                </ListOfActors>
              }
              {actors.length === 0 &&
                <EmptyState />
              }

              {selectModal &&
                <div className="modalSelectContainer">
                  <Modal title={numberOfSelectedActors+" Selected"} className="selectModal" showCloseButton={true} selectModal={selectModalHandler}> 
                    <SelectAll />
                    <Button class="btn_delete set_margin_top" title="Delete" disabled/>
                  </Modal>
                </div>
              }
              
              {editModal && 
                <div className="modalContainer">
                  <Modal title="Edit Actor" showCloseButton={true} className="editModal" editModal={editModalHandler}>
                    <AddEditActorForm actor={actor} buttonText="Update" actionType="updateActor" editModal={editModalHandler} />
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

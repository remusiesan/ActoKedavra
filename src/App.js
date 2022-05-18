import React, { useState, useEffect, useCallback } from "react";
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

function App() {
  const [editModal, setEditModal] = useState(false);
  const [addModal, setAddModal] = useState(false);
  const [chooseActor, setChooseActor] = useState(false);
  const [selectAll, setSelectAll] = useState(false)
  const [selectModal, setSelectModal] = useState(false);
  const [sortModal, setSortModal] = useState(false);
  const [actors, setActors] = useState([])
  const [actor, setActor] = useState([])
  const [desktopOrder, setDesktopOrder] = useState(false)
  
  const getActors = async () => {
    const actorsFromServer = await fetchActors()
    setActors(actorsFromServer)
  }

  useEffect(() => {
    getActors()
  }, [])

  const fetchActors =  async () => {
    const res = await fetch('https://dbactokedavra.herokuapp.com/actors')
    const data = await res.json()
    return data;
  }

  const getActorForEdit = async(actorId) => {
    const res = await fetch(`https://dbactokedavra.herokuapp.com/actors/${actorId}`, {
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
  
  const addModalHandler = async(result) => {
    setAddModal(false)
  }
  

  const selectModalHandler = (result) => {
    if (result) {
      localStorage.setItem("numberOfSelectedActors", 0);
      localStorage.setItem("actorsToDelete", []);
      setSelectModal(true)
      setChooseActor(true)
    } else {
      setSelectModal(false)
      setSortModal(false)
      setChooseActor(false)
      setSelectAll(false)
    }
  }

  const sortModalHandler = (result) => {
    if (result) {
      setSortModal(true)
    } else {
      setSortModal(false)
    }
  }
  //..

  const numberOfSelectedActorsHandler = (result) => {
    if (document.getElementsByClassName("modalSelectContainer").length > 0) 
      document.getElementsByClassName("modalSelectContainer")[0].getElementsByTagName("h2")[0].textContent = result+" Selected"
  }

  const selectedAllHandler = (result) => {
    if (result) {
      let arrActorsId = []
      actors.forEach(actor => {
        arrActorsId.push(actor.id)
      });
      localStorage.setItem("actorsToDelete", arrActorsId);
      if (document.getElementsByClassName("modalSelectContainer")[0] != null)
        document.getElementsByClassName("modalSelectContainer")[0].getElementsByTagName("button")[2].style.opacity=1
      setSelectAll(true)
    } else {
      if (document.getElementsByClassName("modalSelectContainer")[0] != null)
        document.getElementsByClassName("modalSelectContainer")[0].getElementsByTagName("button")[2].style.opacity=0.2
      setSelectAll(false)
      localStorage.setItem("actorsToDelete", []);
    }
  }

  const deleteActorById = async(id) => {
    console.log('The actor was deleted!')
    await fetch(`https://dbactokedavra.herokuapp.com/actors/${id}`,
    {
        method: 'DELETE'
    })
  }
  const deleteActorsHandler = async(result) => {
    if (result) {
      let arrActorIds = localStorage.getItem("actorsToDelete").split(',')
      arrActorIds.forEach(id => {
        var result  = actors.filter(function(actor){return actor.id === parseInt(id)} );
        if (result.length > 0) {
          setTimeout(() => {
            // deleteActorById(result[0].id)
            setActors(actors.splice(actors.findIndex(({id}) => id === parseInt(result[0].id)), 1))
          }, 500);
        }
      })
      setSelectModal(false)
    }
  }
  
  const sortAscendingHandler = (result) => {
    setActors(actors.sort((a, b) => (a.id > b.id) ? 1 : -1))
    setSortModal(false)
  }
  

  const sortDescendingHandler = (result) => {
    setActors(actors.sort((a, b) => (b.id > a.id) ? 1 : -1))
    setSortModal(false)
  }

  const modalAddNewActorHandler = (result) => {
    setAddModal(true)
  }

  const setAddModalHandler = (result) => {
    setAddModal(true)
  }

  return (
    <div className="App">
       <Router>
        <Routes>
          <Route path='/' element={
            <>
              <Header />
              {actors.length > 0 &&
                <ListOfActors actors={actors} actorId={getActorForEdit} selectModal={selectModalHandler} sortModal={sortModalHandler} chooseActor={chooseActor} selectAll={selectAll} numberOfSelectedActors={numberOfSelectedActorsHandler} selectAllItemsDesktop={selectedAllHandler}> 
                </ListOfActors>
              }

              {actors.length === 0 &&
                <EmptyState setAddModal={setAddModalHandler}/>
              }

              {selectModal &&
                <div className="modalSelectContainer">
                  <Modal title={"0 Selected"} className="selectModal" showCloseButton={true} selectModal={selectModalHandler}> 
                    <SelectAll selectedAll={selectedAllHandler}/>
                    <Button class="btnDelete set_margin_top" title="Delete" deleteActors={deleteActorsHandler}/>
                  </Modal>
                </div>
              }

              {sortModal &&
                <div className="modalSelectContainer">
                  <Modal title="Select type of sort" className="sortModal" showCloseButton={true} sortModal={selectModalHandler}> 
                    <Button class="btnSortAscending" title="Ascending" sortAscending={sortAscendingHandler} />
                    <Button class="btnSortDescending" title="Descending" sortDescending={sortDescendingHandler} />
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
              <Button class="btnAddNewActor" title="Add new actor" addNewActor={modalAddNewActorHandler} />
              {addModal &&
                <div className="modalContainer">
                  <Modal title="Add new Actor" showCloseButton={true} className="addModal" addModal={addModalHandler}>
                    <AddEditActorForm actor={actor} buttonText="Add" actionType="addActor" editModal={addModalHandler} />
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

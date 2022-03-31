import React, { useState } from "react";
import "@fontsource/poppins";

import Header from "./components/Header";
import Container from "./components/Container";
import Button from "./components/Button";
import ListOfActors from "./components/ListOfActors";
import AddEditActor from "./components/AddEditActor";
import Footer from "./components/Footer";

function App(props) {
  const listOfActors = [
    {
      name: 'Leonardo Dicaprio',
      score: 10,
      hobbies: 'Music and dancing naked in the rain',
      description: 'He is a good guy with a thick mustahe.'
    },
    {
      name: 'Leonardo Dicaprio',
      score: 11,
      hobbies: 'Music and dancing naked in the rain',
      description: 'He is a good guy with a thick mustahe.'
    },
    {
      name: 'Leonardo Dicaprio',
      score: 12,
      hobbies: 'Music and dancing naked in the rain',
      description: 'He is a good guy with a thick mustahe.'
    }
  ]

  const [showAddNewActor, setShowAddNewActor] = useState(false);
  const modalAddNewActor = () => {
    setShowAddNewActor(true);
  }
  const hideAddNewActor = (status) => {
    setShowAddNewActor(status);
  }

  return (
    <div className="App">
      
      <Header zindex={showAddNewActor}/>
      <Container>
        <h2>My Cool Buttons</h2>
        <Button class="remove_actor"/>
        <br/><br/>
        <Button class="btn_read_more" onClick="onClick" title="Read more"/>
        <br/><br/>
        <Button class="btn_edit" title="Edit"/>
        <br/><br/>
        <Button class="btn_sort" title="Sort" />
        <br/><br/>
        <Button class="btn_select" title="Select" />
        <br/><br/>
        <Button class="btn_add_new_actor" title="Add new actor" onClick={modalAddNewActor} />
        
        {/* <Button class="btn_sort" title="Sort" />
        <Button class="btn_select" title="Select" />
        <ListOfActors listOfActors={listOfActors}/>
        <Button class="btn_add_new_actor" title="Add new actor" onClick={modalAddNewActor} /> */}
      </Container>
      <Footer />

      <AddEditActor show={showAddNewActor} hidePopup={hideAddNewActor}/>
    </div>
  );
}

export default App;

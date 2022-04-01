import React, { useState } from "react";
import "@fontsource/poppins";

import Header from "./components/UI/Header";
import Container from "./components/UI/Container";
import Button from "./components/UI/Button";
import ActorCard from "./components/Actor/ActorCard";
import ActorImage from "./components/Actor/ActorImage";
import ActorNameOccupation from "./components/Actor/ActorNameOccupation";
import ActorHobbies from "./components/Actor/ActorHobbies";
import ActorDescription from "./components/Actor/ActorDescription";
import Modal from "./components/UI/Modal";
import SelectAll from "./components/UI/SelectAll";
import EmptyState from "./components/UI/EmptyState";
import AddEditActorForm from "./components/Forms/AddEditActorForm";
import Footer from "./components/UI/Footer";

function App(props) {
  const hobbies = ['Traveling', 'Reading', 'Crossword puzzles'];

  const [showAddNewActor, setShowAddNewActor] = useState(false);
  const modalAddNewActor = () => {
    setShowAddNewActor(true);
  }

  return (
    <div className="App">
      
      <Header zindex={showAddNewActor}/>
      <Container>
        <div className="presentationBoxButton">
          <h2>-- My Cool Buttons</h2>
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
          <br/><br/>
          <Button class="btn_sort_ascending" title="Ascending" />
          <Button class="btn_sort_descending" title="Descending" />
          <Button class="btn_delete" title="Delete" />
        </div>  
      
        <div className="presentationBoxActor">
          <h2>-- Actor Components</h2>
          <ActorCard />
          <ActorImage image="/images/leonardo.png"/>
          <ActorNameOccupation name="Leonardo Dicaprio" occupation="Actor & Writer" numberOfLikes="44"/>
          <ActorHobbies hobbies={hobbies}/>
          <ActorDescription description="It's easy to believe Leonardo DiCaprio really is the king..."/>
        </div>

        <div className="presentationBoxModal">
          <h2>-- Modals - Add new actor</h2>
          <Modal title="Add new actor" showCloseButton={true}>
            <AddEditActorForm />
          </Modal>
        </div>
        
        <div className="presentationBoxModal" style={{minHeight: '360px'}}>
          <h2>-- Modals - Select type of sort</h2>
          <Modal title="Select type of sort" showCloseButton={false}> 
            <Button class="btn_sort_ascending" title="Ascending" />
            <Button class="btn_sort_descending" title="Descending" />
          </Modal>
        </div>

        <div className="presentationBoxModal" style={{minHeight: '360px'}}>
          <h2>-- Modals - Selected Functionality</h2>
          <Modal title="1 Selected" showCloseButton={true}> 
            <SelectAll />
            <Button class="btn_delete set_margin_top" title="Delete" />
          </Modal>
        </div>

        <div className="presentationBoxModal" style={{minHeight: '400px'}}>
          <h2>-- Empty State</h2>
          <EmptyState /> 
        </div>
      </Container>
      <Footer />
    </div>
  );
}

export default App;

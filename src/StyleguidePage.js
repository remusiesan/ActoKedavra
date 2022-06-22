import React, { useState } from "react";
import "@fontsource/poppins";

import Header from "./components/UI/Header/Header";
import Button from "./components/UI/Button/Button";
import ActorCard from "./components/Actor/ActorCard/ActorCard";
import ActorImage from "./components/Actor/ActorImage/ActorImage";
import ActorNameOccupation from "./components/Actor/ActorNameOccupation/ActorNameOccupation";
import ActorHobbies from "./components/Actor/ActorHobbies/ActorHobbies";
import ActorDescription from "./components/Actor/ActorDescription/ActorDescription";
import Modal from "./components/UI/Modal/Modal";
import SelectAll from "./components/UI/SelectAll/SelectAll";
import EmptyState from "./components/UI/EmptyState/EmptyState";
import Alert from "./components/UI/Alert/Alert";
import AddEditActorForm from "./components/Forms/AddEditActorForm/AddEditActorForm";
import Footer from "./components/UI/Footer/Footer";

import './StyleguidePage.css';

function StyleguidePage(props) {
  const hobbies = ['Traveling', 'Reading', 'Crossword puzzles'];

  const [showAddNewActor, setShowAddNewActor] = useState(false);
  const modalAddNewActor = () => {
    setShowAddNewActor(true);
  }

  return (
    <div className="StyleguidePage">
      
      <Header zindex={showAddNewActor}/>
        <div className="presentationBoxButton">
          <h2>-- My Cool Buttons</h2>
          <Button class="removeActor"/>
          <br/><br/>
          <Button class="btnReadMore" onClick="onClick" title="Read more"/>
          <br/><br/>
          <Button class="btnEdit" title="Edit"/>
          <br/><br/>
          <Button class="btnSort" title="Sort" />
          <br/><br/>
          <Button class="btnSelect" title="Select" />
          <br/><br/>
          <Button class="btnAddNewActor" title="Add new actor" onClick={modalAddNewActor} />
          <br/><br/>
          <Button class="btnSortAscending" title="Ascending" />
          <Button class="btnSortDescending" title="Descending" />
          <Button class="btnDelete" title="Delete" />
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
            <AddEditActorForm buttonText="Add" actionType="updateActor"/>
          </Modal>
        </div>
        
        <div className="presentationBoxModal" style={{minHeight: '360px'}}>
          <h2>-- Modals - Select type of sort</h2>
          <Modal title="Select type of sort" showCloseButton={false}> 
            <Button class="btnSortAscending" title="Ascending" />
            <Button class="btnSortDescending" title="Descending" />
          </Modal>
        </div>

        <div className="presentationBoxModal" style={{minHeight: '360px'}}>
          <h2>-- Modals - Selected Functionality</h2>
          <Modal title="1 Selected" showCloseButton={true}> 
            <SelectAll />
            <Button class="btnDelete set_margin_top" title="Delete" />
          </Modal>
        </div>

        <div className="presentationBoxModal emptyStateCustom" style={{minHeight: '400px'}}>
          <h2>-- Empty State</h2>
          <EmptyState /> 
        </div>

        <div className="presentationBoxButton" style={{minHeight: '400px'}}>
          <h2>-- Alert</h2>
          <Alert type="successNotification" message="Actor added successfully."/> 
          <br/>
          <Alert type="warningNotification" message="You can add max. 7 actors."/>
          <br/>
          <Alert type="dangerNotification" message="Your changes were not saved."/>
        </div>
      <Footer />
    </div>
  );
}

export default StyleguidePage;

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
import ListOfActors from "./components/ListOfActors";
import AddEditActor from "./components/AddEditActor";
import Footer from "./components/UI/Footer";

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

  const hobbies = ['Traveling', 'Reading', 'Crossword puzzles'];

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
        <div className="presentationBox">
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
        </div>  
      
        <div className="presentationBox">
          <h2>Actor Components</h2>
          <ActorCard />
          <ActorImage image="/images/leonardo.png"/>
          <ActorNameOccupation name="Leonardo Dicaprio" occupation="Actor & Writer" numberOfLikes="44"/>
          <ActorHobbies hobbies={hobbies}/>
          <ActorDescription description="It's easy to believe Leonardo DiCaprio really is the king..."/>
        </div>

        <div className="presentationBox">
          <h2>Modals</h2>
        </div>
        {/* <Button class="btn_sort" title="Sort" />
        <Button class="btn_select" title="Select" />
        <ListOfActors listOfActors={listOfActors}/>
        <Button class="btn_add_new_actor" title="Add new actor" onClick={modalAddNewActor} /> */}
      </Container>
      <Footer />

      {/* <AddEditActor show={showAddNewActor} hidePopup={hideAddNewActor}/> */}
    </div>
  );
}

export default App;

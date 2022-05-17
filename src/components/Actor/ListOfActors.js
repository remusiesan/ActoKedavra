import React, { useState } from "react";

import './ListOfActors.css';

import Button from "../UI/Button";
import ActorCard from "./ActorCard";
import ActorImage from "./ActorImage";
import ActorNameOccupation from "./ActorNameOccupation";
import ActorHobbies from "./ActorHobbies";
import ActorDescription from "./ActorDescription";
import EmptyState from "../UI/EmptyState";
import Sort from "../UI/Sort";
import Select from "../UI/Select";

const ListOfActors = (props) => {
    const [actors, setActors] = useState(props.actors)
    const removeActorIdHandler = async(id) => {
        //Remove from json server
        // await fetch(`https://actokedavraserver.herokuapp.com/actors/${id}`,
        // {
        //     method: 'DELETE'
        // })

        //Remove from client side
        setActors(actors.filter((actor) => actor.id !== id))
    }

    const editActorIdHandler = async(id) => {
        props.actorId(id)
    }

    const selectModalHandler = (result) => {
        props.selectModal(true);
    }

    const sortModalHandler = (result) => {
        props.sortModal(true);
    }

    const sortTypeDesktopHandler = (result) => {
        props.sortTypeDesktop(result);
    }

    const isChoosenHandler = (result) => {
        props.numberOfSelectedActors(localStorage.getItem("numberOfSelectedActors"))
    }

    if (actors.length > 0) {
        return (
            <div className="listOfActors">
                {navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i) != null ? (
                     <>
                        <Button class="btnSort" title="Sort" sortModal={sortModalHandler} />
                        <Button class="btnSelect" title="Select" selectModal={selectModalHandler} />
                     </>
                ) : (
                    <div className="desktopFilter">
                        <Sort sortTypeDesktop={sortTypeDesktopHandler} />
                        {/* <Select /> */}
                    </div> 
                )}

                {actors.map((actor, index) => (
                    <div key={Math.random().toString()} className={index  % 2 === 0 ? "evenCard" : "oddCard"}>
                        <ActorCard>
                            {(!props.chooseActor && !props.selectAll) && <Button class="removeActor" actorId={actor.id} removeActorId={removeActorIdHandler} />}
                            {(props.chooseActor && !props.selectAll) && <Button class="chooseActor" actorId={actor.id} isChoosen={isChoosenHandler} />}
                            {(props.chooseActor && props.selectAll) && <Button class="isChooseActor" actorId={actor.id} isChoosen={isChoosenHandler} />}
            
                            <ActorImage image={actor.picture} />
                            <ActorNameOccupation name={actor.name} occupation={actor.occupation} numberOfLikes={actor.score} />
                            <ActorHobbies hobbies={actor.hobbies}/>
                            <ActorDescription description={actor.short_description} />
                            <Button class="btnEdit" actorId={actor.id} title="Edit" editActorId={editActorIdHandler}/>
                        </ActorCard>
                    </div>
                ))}
            </div>
        );
    } 
    return (
        <EmptyState />
    )
}

export default ListOfActors;
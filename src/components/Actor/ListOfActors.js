import React, { useState } from "react";

import './ListOfActors.css';

import Button from "../UI/Button";
import ActorCard from "./ActorCard";
import ActorImage from "./ActorImage";
import ActorNameOccupation from "./ActorNameOccupation";
import ActorHobbies from "./ActorHobbies";
import ActorDescription from "./ActorDescription";
import EmptyState from "../UI/EmptyState";

const ListOfActors = (props) => {
    const [actors, setActors] = useState(props.actors)
    const removeActorIdHandler = async(id) => {
        //Remove from json server
        // await fetch(`http://localhost:5000/actors/${id}`,
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

    const isChoosenHandler = (result) => {
        props.numberOfSelectedActors(localStorage.getItem("numberOfSelectedActors"))
    }

    if(actors.length > 0){
        return (
            <div className="list_of_actors">
                <div className="list_of_actors_filter_buttons">
                    <Button class="btn_sort" title="Sort" sortModal={sortModalHandler} />
                    <Button class="btn_select" title="Select" selectModal={selectModalHandler} />
                </div>
                {actors.map((actor, index) => (
                    <div key={Math.random().toString()} className={index  % 2 == 0 ? "even_card" : "odd_card"}>
                        <ActorCard>
                            {(!props.chooseActor && !props.selectAll) && <Button class="remove_actor" actorId={actor.id} removeActorId={removeActorIdHandler} />}
                            {(props.chooseActor && !props.selectAll) && <Button class="choose_actor" actorId={actor.id} isChoosen={isChoosenHandler} />}
                            {(props.chooseActor && props.selectAll) && <Button class="is_choose_actor" actorId={actor.id} isChoosen={isChoosenHandler} />}
            
                            <ActorImage image={actor.picture} />
                            <ActorNameOccupation name={actor.name} occupation={actor.occupation} numberOfLikes={actor.score} />
                            <ActorHobbies hobbies={actor.hobbies}/>
                            <ActorDescription description={actor.short_description} />
                            <Button class="btn_edit" actorId={actor.id} title="Edit" editActorId={editActorIdHandler}/>
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
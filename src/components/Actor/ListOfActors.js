import React, { useState } from "react";

import './ListOfActors.css';

import Button from "../UI/Button";
import ActorCard from "./ActorCard";
import ActorImage from "./ActorImage";
import ActorNameOccupation from "./ActorNameOccupation";
import ActorHobbies from "./ActorHobbies";
import ActorDescription from "./ActorDescription";

const ListOfActors = (props) => {
    const [actors, setActors] = useState(props.actors)
    const removeActorIdHandler = async(id) => {
       await fetch(`http://localhost:5000/actors/${id}`,
       {
           method: 'DELETE'
       })

       setActors(actors.filter((actor) => actor.id !== id))
    }

    if(actors.length > 0){
        return (
            <div className="list_of_actors">
                <div className="list_of_actors_filter_buttons">
                    <Button class="btn_sort" title="Sort" />
                    <Button class="btn_select" title="Select" />
                </div>
                {actors.map((actor, index) => (
                    <div className={index  % 2 == 0 ? "even_card" : "odd_card"}>
                        <ActorCard>
                            <Button class="remove_actor" actorId={actor.id} removeActorId={removeActorIdHandler}/>
                            <ActorImage image={actor.picture} />
                            <ActorNameOccupation name={actor.name} occupation={actor.occupation} numberOfLikes={actor.score} />
                            <ActorHobbies hobbies={actor.hobbies}/>
                            <ActorDescription description={actor.short_description} />
                            <Button class="btn_edit" title="Edit"/>
                        </ActorCard>
                    </div>
                ))}
            </div>
        );
    }
    return null;
}

export default ListOfActors;
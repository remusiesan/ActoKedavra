import React from "react";

import Actor from "./Actor";
import classes from './ListOfActors.module.css';

const ListOfActors = (props) => {
    if(props.listOfActors.length > 0){
        return (
            <div className={classes.list_of_actors}>
                {props.listOfActors.map((actor, index) => (
                    <Actor actor={typeof actor === 'object' ? actor : {}} />
                ))}
            </div>
        );
    }
    return null;
}

export default ListOfActors;
import React from "react";
import classes from './ActorHobbies.module.css';

const ActorHobbies = (props) => {
    return (    
        <ul className={classes.actorHobbies}>
            {props.hobbies.map((item)=> <li key={Math.random().toString()} className={classes.item}>{item}</li>)}
        </ul>
    )
}

export default ActorHobbies
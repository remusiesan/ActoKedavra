import React from "react";
import classes from './ActorHobbies.module.css';

const ActorHobbies = (props) => {
    return (    
        <ul className={classes.actor_hobbies}>
            {props.hobbies.map((item)=> <li key={Math.random().toString()} className={classes.actor_hobbies__item}>{item}</li>)}
        </ul>
    )
}

export default ActorHobbies
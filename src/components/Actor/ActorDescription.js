import React from "react";
import classes from './ActorDescription.module.css';

const ActorDescription = (props) => {
    return (    
        <div className={classes.actor_name_description}>
            <p>{props.description}</p>
        </div>
    )
}

export default ActorDescription
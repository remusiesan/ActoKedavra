import React from "react";
import classes from './ActorCard.module.css';

const ActorCard = (props) => {
    return (
        <div className={classes.actor_card}>
            {props.children}
        </div>
    )
}

export default ActorCard
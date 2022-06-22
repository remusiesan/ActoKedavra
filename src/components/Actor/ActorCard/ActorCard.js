import React from "react";
import classes from './ActorCard.module.css';

const ActorCard = (props) => {
    return (
        <div className={classes.actorCard}>
            {props.children}
        </div>
    )
}

export default ActorCard
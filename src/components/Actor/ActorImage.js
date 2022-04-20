import React from "react";
import classes from './ActorImage.module.css';

const ActorImage = (props) => {
    return (
        <div className={classes.containerActorImage}><img className={classes.actorImage} src={props.image} /></div>
    )
}

export default ActorImage
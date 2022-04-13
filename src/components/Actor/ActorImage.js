import React from "react";
import classes from './ActorImage.module.css';

const ActorImage = (props) => {
    return (
        <div className={classes.actorImage} style={{ backgroundImage: 'url('+props.image+')' }}>
        </div>
    )
}

export default ActorImage
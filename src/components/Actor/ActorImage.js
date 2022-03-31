import React from "react";
import classes from './ActorImage.module.css';

const ActorImage = (props) => {
    return (
        <div className={classes.actor_image} style={{ backgroundImage: 'url('+props.image+')' }}>
        </div>
    )
}

export default ActorImage
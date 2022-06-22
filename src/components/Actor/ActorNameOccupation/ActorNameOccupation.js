import React from "react";
import classes from './ActorNameOccupation.module.css';

const ActorNameOccupation = (props) => {
    return (    
        <div className={classes.actorNameOccupationLikes}>
             <p className={classes.actor_name_occupation_likes__name}>{props.name}</p> 
            <div className={classes.occupationLikes}>
                <div className={classes.likes}>
                    <span className={classes.likesIcon}></span>
                    <span className={classes.likesNumber}>{props.numberOfLikes}</span>
                </div>
                <p className={classes.occupation}>{props.occupation}</p>
            </div>
        </div> 
    )
}

export default ActorNameOccupation
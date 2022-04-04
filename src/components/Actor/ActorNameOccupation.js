import React from "react";
import classes from './ActorNameOccupation.module.css';

const ActorNameOccupation = (props) => {
    return (    
        <div className={classes.actor_name_occupation_likes}>
             <p className={classes.actor_name_occupation_likes__name}>{props.name}</p> 
            <div className={classes.actor_name_occupation_likes__occupation_likes}>
                <div className={classes.actor_name_occupation_likes__likes}>
                    <span className={classes.actor_name_occupation_likes__likes__icon}></span>
                    <span className={classes.actor_name_occupation_likes__likes__number}>{props.numberOfLikes}</span>
                </div>
                <p className={classes.actor_name_occupation_likes__occupation}>{props.occupation}</p>
            </div>
        </div> 
    )
}

export default ActorNameOccupation
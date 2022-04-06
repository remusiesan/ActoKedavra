import React from "react";
import classes from './EmptyState.module.css';

import Button from "./Button";

const EmptyState = () => {
    return(
        <div className={classes.empty_state_container}>
            <img className={classes.emoji_sad_frown} src="./images/emoji_sad_frown.png" alt=""/>
            <p className={classes.description}>There are no actors here. Consider adding one.</p>
            <Button class="btn_add_new_actor resize_width" title="Add new actor" />
        </div>
    )
}

export default EmptyState;
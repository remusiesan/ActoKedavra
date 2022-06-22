import React from "react";
import classes from './EmptyState.module.css';

import Button from "../Button/Button";

const EmptyState = (props) => {
    const modalAddNewActorHandler = (result) => {
        props.setAddModal(true);
    }

    return(
        <div className={classes.emptyStateContainer}>
            <img className={classes.emojiSadFrown} src="./images/emoji_sad_frown.png" alt=""/>
            <p className={classes.description}>There are no actors here. Consider adding one.</p>
            <Button class="btnAddNewActor resizeWidth" title="Add new actor" addNewActor={modalAddNewActorHandler} />
        </div>
    )
}

export default EmptyState;
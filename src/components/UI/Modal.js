import React from "react";
import classes from './Modal.module.css';

import Button from "./Button";

const Modal = (props) => {
    return(
        <div className={classes.container_container}>
            {props.showCloseButton && <Button class="close_modal" />}
           <div className={classes.container_modal}>
                <div className={classes.container_content}>
                    <h2 className={classes.title_modal}>{props.title}</h2>
                    {props.children}
                </div>
           </div>
        </div>
    )
}

export default Modal;
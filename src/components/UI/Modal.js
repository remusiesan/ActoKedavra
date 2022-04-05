import React, {useState} from "react";
import classes from './Modal.module.css';

import Button from "./Button";

const Modal = (props) => {
    const isCloseModal = (result) => {
        if(result){
            props.showModal(false)
        } else {
            props.showModal(true)
        }
    }
    return(
        <div className={classes.container_container}>
           <div className={classes.container_modal}>
                <div className={classes.container_content}>
                    {props.showCloseButton && <Button class="close_modal" closeModal={isCloseModal}/>}
                    <h2 className={classes.title_modal}>{props.title}</h2>
                    {props.children}
                </div>
           </div>
        </div>
    )
}

export default Modal;
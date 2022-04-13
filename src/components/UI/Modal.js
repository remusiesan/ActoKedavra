import React from "react";
import classes from './Modal.module.css';

import Button from "./Button";

const Modal = (props) => {
    const isCloseModal = (result) => {
        if(result){
            if(props.className === "editModal")
                props.editModal(false)
            if(props.className === "selectModal")
                props.selectModal(false)
            if(props.className === "sortModal")
                props.sortModal(false)
            if(props.className === "addModal")
                props.addModal(false)
        } else {
            if(props.className === "editModal")
                props.editModal(true)
            if(props.className === "selectModal")
                props.selectModal(true)
            if(props.className === "sortModal")
                props.sortModal(true)
            if(props.className === "addModal")
                props.addModal(true)
        }
    }
    return(
        <div className={classes.containerContainer}>
           <div className={classes.containerModal}>
                <div className={classes.containerContent}>
                    {props.showCloseButton && <Button class="closeModal" closeModal={isCloseModal}/>}
                    <h2 className={classes.titleModal}>{props.title}</h2>
                    {props.children}
                </div>
           </div>
        </div>
    )
}

export default Modal;
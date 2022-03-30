import React, { useState } from "react";
import './AddEditActor.css';

import Button from "./Button";

const AddEditActor = (props) => {
    const hideModalHandler = () => {
         props.hidePopup(false);
    }
    return (
        <div className={(props.show) ? 'add_edit_actor show' : 'hide'}>
            <Button class="close_modal" onClick={hideModalHandler}/>
            <div className="add_edit_actor__form">

            </div>
        </div>
    );
}

export default AddEditActor;
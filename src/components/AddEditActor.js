import React, { useState } from "react";
import Container from "./UI/Container";
import './AddEditActor.css';

import Button from "./UI/Button";

const AddEditActor = (props) => {
    const hideModalHandler = () => {
         props.hidePopup(false);
    }
    return (
        <div className={(props.show) ? 'show' : 'hide'}>
            <Button class="close_modal" onClick={hideModalHandler}/>
            <div className="modal_container">
                <h2>Add new actor</h2>
            </div>
            {/* <div className='add_edit_actor'>
                <div className="add_edit_actor__form">
                    <h2 className="form_actor__title">Add new actor</h2>
                    <form style={{ width: '100%' }}>
                        <div className="form_actor__fields">
                            <div className="form_actor__row">
                                <label for="actor_name">Name</label>
                                <input type="text" name="actor_name" id="actor_name"/>
                            </div>
                        </div>
                    </form>
                </div>
            </div> */}
        </div>
    );
}

export default AddEditActor;
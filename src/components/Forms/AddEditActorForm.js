import React, {useState} from "react";
import classes from './AddEditActorForm.module.css';

import Button from "../UI/Button";

const AddEditActorForm = (props) => {
    const [remainedCharacters, setRemainedCharacters] = useState('180');
    const numberOfCharactersHandler = (e) => {
        setRemainedCharacters(180-e.target.value.length);
    }

    const addActorHandler = (event) => {
        event.preventDefault();
    }
    return (
        <form method="POST" onSubmit={addActorHandler}>
            <div className={classes.cell_childrens}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" />
                <span className={classes.fieldRequired} style={{display: 'none'}}>Field required</span>
            </div>

            <div className={classes.cell_childrens}>
                <label htmlFor="occupation">Occupation besides acting</label>
                <input type="text" id="occupation" name="occupation" />
            </div> 

            <div className={classes.cell_childrens}>
                <label htmlFor="hobbies">Hobbies</label>
                <input type="text" id="hobbies" name="hobbies" />
            </div> 

            <div className={classes.cell_childrens_textarea}>
                <label htmlFor="description">Short description</label>
                <textarea type="text" rows="4" maxLength="180" onChange={numberOfCharactersHandler} id="description" name="description" />
                <span className={classes.remained_characters}>{remainedCharacters} characters remained</span>
            </div> 

            <Button type="submit" class="btn_add_new_actor" title="Add new actor" />

            <p className={classes.changed_my_mind}>I changed my mind</p>
        </form>
    )
}

export default AddEditActorForm;
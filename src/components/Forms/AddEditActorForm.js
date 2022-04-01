import React, {useState} from "react";
import classes from './AddEditActorForm.module.css';

import Button from "../UI/Button";

const AddEditActorForm = (props) => {
    const [applyRequired, setApplyRequired] = useState(false);
    const addActorHandler = (event) => {
        event.preventDefault();
        setApplyRequired(true);
    }
    
    const [name, setName] = useState("");
    const nameHandler = (event) => {
        setName(event.target.value);
    }

    const [occupation, setOccupation] = useState("");
    const occupationHandler = (event) => {
        setOccupation(event.target.value);
    }

    const [hobbies, setHobbies] = useState("");
    const hobbiesHandler = (event) => {
        setHobbies(event.target.value);
    }

    const [description, setDescription] = useState("");
    const [remainedCharacters, setRemainedCharacters] = useState('180');
    const numberOfCharactersHandler = (event) => {
        setRemainedCharacters(180-event.target.value.length);
        setDescription(event.target.value);
    }
    return (
        <form method="POST" onSubmit={addActorHandler}>
            <div className={classes.cell_childrens}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" className={(name === "" && applyRequired) ? classes.fieldRequired_input : ""} onChange={nameHandler}/>
                {(name === "" && applyRequired) ? <span className={classes.fieldRequired}>Field required</span> : null}
            </div>

            <div className={classes.cell_childrens}>
                <label htmlFor="occupation">Occupation besides acting</label>
                <input type="text" id="occupation" name="occupation" className={(occupation === "" && applyRequired) ? classes.fieldRequired_input : ""} onChange={occupationHandler} />
                {(occupation === "" && applyRequired) ? <span className={classes.fieldRequired}>Field required</span> : null}
            </div> 

            <div className={classes.cell_childrens}>
                <label htmlFor="hobbies">Hobbies</label>
                <input type="text" id="hobbies" name="hobbies" className={(hobbies === "" && applyRequired) ? classes.fieldRequired_input : ""} onChange={hobbiesHandler}  />
                {(hobbies === "" && applyRequired) ? <span className={classes.fieldRequired}>Field required</span> : null}
            </div> 

            <div className={classes.cell_childrens_textarea}>
                <label htmlFor="description">Short description</label>
                <textarea type="text" rows="4" maxLength="180" onChange={numberOfCharactersHandler} id="description" name="description" className={(description === "" && applyRequired) ? classes.fieldRequired_input : ""} />
                <span className={classes.remained_characters}>{remainedCharacters} characters remained</span>
                {(description === "" && applyRequired) ? <span className={classes.fieldRequired}>Field required</span> : null}
            </div> 

            <Button type="submit" class="btn_add_new_actor" title="Add new actor" />

            <p className={classes.changed_my_mind}>I changed my mind</p>
        </form>
    )
}

export default AddEditActorForm;
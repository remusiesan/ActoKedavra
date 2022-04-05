import React, {useState} from "react";
import classes from './AddEditActorForm.module.css';

import Button from "../UI/Button";

const AddEditActorForm = (props) => {
    const [applyRequired, setApplyRequired] = useState(false);
    const addEditActorHandler = async(event) => {
        event.preventDefault();
        setApplyRequired(true);
        
        if(name != "" && occupation != "" && hobbies != "" && description != ""){
            if(props.actionType === "updateActor"){
                await fetch(`http://localhost:5000/actors/${props.actor.id}`,
                {
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(props.actor)
                })
                props.showModal(false);
            } else {
                props.showModal(false);
            }       
        }
    }

    const changeMyMindHandler = () => {
        props.showModal(false);
    }
    const [picture, setPicture] = useState(props.actor != undefined && props.actor.picture !== null ? props.actor.picture: "");
    const pictureHandler = (event) => {
        setPicture(event.target.value)
        props.actor.picture = event.target.value
    }

    const [name, setName] = useState(props.actor != undefined && props.actor.name !== undefined ? props.actor.name: "");
    const nameHandler = (event) => {
        setName(event.target.value)
        props.actor.name = event.target.value
    }

    const [occupation, setOccupation] = useState(props.actor != undefined && props.actor.occupation !== undefined ? props.actor.occupation: "");
    const occupationHandler = (event) => {
        setOccupation(event.target.value);
        props.actor.occupation = event.target.value
    }

    const [hobbies, setHobbies] = useState(props.actor != undefined && props.actor.hobbies !== undefined ? props.actor.hobbies: "");
    const hobbiesHandler = (event) => {
        setHobbies(event.target.value);
        props.actor.hobbies = event.target.value.split(',')
    }

    const [description, setDescription] = useState(props.actor != undefined && props.actor.short_description !== undefined ? props.actor.short_description: "");;
    const [remainedCharacters, setRemainedCharacters] = useState(props.actor != undefined && props.actor.short_description !== undefined ? 180-props.actor.short_description.length : "180");
    const numberOfCharactersHandler = (event) => {
        setRemainedCharacters(180-event.target.value.length);
        setDescription(event.target.value);
        props.actor.short_description = event.target.value
    }
    return (
        <form method="POST" onSubmit={addEditActorHandler}>
            <div className={classes.cell_childrens}>
                <label htmlFor="name">Picture</label>
                <input type="text" id="picture" name="picture" className={(picture === "" && applyRequired) ? classes.fieldRequired_input : ""} onChange={pictureHandler} value={picture} />
                {(picture === "" && applyRequired) ? <span className={classes.fieldRequired}>Field required</span> : null}
            </div>

            <div className={classes.cell_childrens}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" className={(name === "" && applyRequired) ? classes.fieldRequired_input : ""} onChange={nameHandler} value={name} />
                {(name === "" && applyRequired) ? <span className={classes.fieldRequired}>Field required</span> : null}
            </div>

            <div className={classes.cell_childrens}>
                <label htmlFor="occupation">Occupation besides acting</label>
                <input type="text" id="occupation" name="occupation" className={(occupation === "" && applyRequired) ? classes.fieldRequired_input : ""} onChange={occupationHandler} value={occupation} />
                {(occupation === "" && applyRequired) ? <span className={classes.fieldRequired}>Field required</span> : null}
            </div> 

            <div className={classes.cell_childrens}>
                <label htmlFor="hobbies">Hobbies</label>
                <input type="text" id="hobbies" name="hobbies" className={(hobbies === "" && applyRequired) ? classes.fieldRequired_input : ""} onChange={hobbiesHandler}  value={hobbies} />
                {(hobbies === "" && applyRequired) ? <span className={classes.fieldRequired}>Field required</span> : null}
            </div> 

            <div className={classes.cell_childrens_textarea}>
                <label htmlFor="description">Short description</label>
                <textarea type="text" rows="4" maxLength="180" onChange={numberOfCharactersHandler} id="description" name="description" className={(description === "" && applyRequired) ? classes.fieldRequired_input : ""} value={description}/>
                <span className={classes.remained_characters}>{remainedCharacters} characters remained</span>
                {(description === "" && applyRequired) ? <span className={classes.fieldRequired}>Field required</span> : null}
            </div> 

            <Button type="submit" class="btn_add_new_actor" title={props.buttonText} />

            <p className={classes.changed_my_mind} onClick={changeMyMindHandler}>I changed my mind</p>
        </form>
    )
}

export default AddEditActorForm;
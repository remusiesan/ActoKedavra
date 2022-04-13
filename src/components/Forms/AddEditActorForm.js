import React, {useState} from "react";
import classes from './AddEditActorForm.module.css';

import Button from "../UI/Button";

const AddEditActorForm = (props) => {
    const [applyRequired, setApplyRequired] = useState(false);

    const changeMyMindHandler = () => {
        props.editModal(false);
    }
    const [picture, setPicture] = useState(props.actor !== undefined && props.actor.picture !== undefined ? props.actor.picture: "");
    const pictureHandler = (event) => {
        setPicture(event.target.value)
        props.actor.picture = event.target.value
    }

    const [name, setName] = useState(props.actor !== undefined && props.actor.name !== undefined ? props.actor.name: "");
    const nameHandler = (event) => {
        setName(event.target.value)
        props.actor.name = event.target.value
    }

    const [occupation, setOccupation] = useState(props.actor !== undefined && props.actor.occupation !== undefined ? props.actor.occupation: "");
    const occupationHandler = (event) => {
        setOccupation(event.target.value);
        props.actor.occupation = event.target.value
    }

    const [hobbies, setHobbies] = useState(props.actor !== undefined && props.actor.hobbies !== undefined ? props.actor.hobbies: "");
    const hobbiesHandler = (event) => {
        setHobbies(event.target.value);
        props.actor.hobbies = event.target.value.split(',')
    }

    const [description, setDescription] = useState(props.actor !== undefined && props.actor.short_description !== undefined ? props.actor.short_description: "");;
    const [remainedCharacters, setRemainedCharacters] = useState(props.actor !== undefined && props.actor.short_description !== undefined ? 180-props.actor.short_description.length : "180");
    const numberOfCharactersHandler = (event) => {
        setRemainedCharacters(180-event.target.value.length);
        setDescription(event.target.value);
        props.actor.short_description = event.target.value
    }

    const addEditActorHandler = async(event) => {
        event.preventDefault();
        setApplyRequired(true);
        
        if(picture !== "" && name !== "" && occupation !== "" && hobbies !== "" && description !== ""){
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
                props.editModal(false);
            } else {
                props.editModal(false);
            }       
        }
    }

    return (
        <form method="POST" onSubmit={addEditActorHandler}>
            <div className={classes.cellChildrens}>
                <label className={classes.cellChildrensLabel} htmlFor="picture">Picture</label>
                <input type="text" id="picture" name="picture" className={(picture === "" && applyRequired) ? classes.fieldRequiredInput : ""} onChange={pictureHandler} value={picture} />
                {(picture === "" && applyRequired) ? <span className={classes.fieldRequired}>Field required</span> : null}
            </div>

            <div className={classes.cellChildrens}>
                <label className={classes.cellChildrensLabel} htmlFor="name">Name</label>
                <input type="text" id="name" name="name" className={(name === "" && applyRequired) ? classes.fieldRequiredInput : ""} onChange={nameHandler} value={name} />
                {(name === "" && applyRequired) ? <span className={classes.fieldRequired}>Field required</span> : null}
            </div>

            <div className={classes.cellChildrens}>
                <label className={classes.cellChildrensLabel} htmlFor="occupation">Occupation besides acting</label>
                <input type="text" id="occupation" name="occupation" className={(occupation === "" && applyRequired) ? classes.fieldRequiredInput : ""} onChange={occupationHandler} value={occupation} />
                {(occupation === "" && applyRequired) ? <span className={classes.fieldRequired}>Field required</span> : null}
            </div> 

            <div className={classes.cellChildrens}>
                <label className={classes.cellChildrensLabel} htmlFor="hobbies">Hobbies</label>
                <input type="text" id="hobbies" name="hobbies" className={(hobbies === "" && applyRequired) ? classes.fieldRequiredInput : ""} onChange={hobbiesHandler}  value={hobbies} />
                {(hobbies === "" && applyRequired) ? <span className={classes.fieldRequired}>Field required</span> : null}
            </div> 

            <div className={classes.cellChildrensTextarea}>
                <label className={classes.cellChildrensTextareaLabel} htmlFor="description">Short description</label>
                <textarea type="text" rows="4" maxLength="180" onChange={numberOfCharactersHandler} id="description" name="description" className={(description === "" && applyRequired) ? classes.fieldRequiredInput : ""} value={description}/>
                <span className={classes.remainedCharacters}>{remainedCharacters} characters remained</span>
                {(description === "" && applyRequired) ? <span className={classes.fieldRequired}>Field required</span> : null}
            </div> 

            <div className="centerButton"><Button type="submit" class="setMargin btnAddNewActor" title={props.buttonText} /></div>

            <p className={classes.changedMyMind} onClick={changeMyMindHandler}>I changed my mind</p>
        </form>
    )
}

export default AddEditActorForm;
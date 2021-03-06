import React, {useState} from "react";
import classes from './AddEditActorForm.module.css';

import Button from "../../UI/Button/Button";


const AddEditActorForm = (props) => {
    const serverUrl = 'http://localhost:5000/actors'
    // const serverUrl = 'https://dbactokedavra.herokuapp.com/actors'

    const [applyRequired, setApplyRequired] = useState(false);
    const [picture, setPicture] = useState(props.actor !== undefined && props.actor.picture !== undefined && props.buttonText === 'Update' ? props.actor.picture: "");
    const [name, setName] = useState(props.actor !== undefined && props.actor.name !== undefined && props.buttonText === 'Update' ? props.actor.name: "");
    const [occupation, setOccupation] = useState(props.actor !== undefined && props.actor.occupation !== undefined && props.buttonText === 'Update' ? props.actor.occupation: "");
    const [hobbies, setHobbies] = useState(props.actor !== undefined && props.actor.hobbies !== undefined && props.buttonText === 'Update'? props.actor.hobbies: "");
    const [description, setDescription] = useState(props.actor !== undefined && props.actor.short_description !== undefined && props.buttonText === 'Update' ? props.actor.short_description: "");;
    const [remainedCharacters, setRemainedCharacters] = useState(props.actor !== undefined && props.actor.short_description !== undefined && props.buttonText === 'Update'? 180-props.actor.short_description.length : "180");

    const changeMyMindHandler = () => {
        props.editModal(false);
    }
    const pictureHandler = (event) => {
        setPicture(event.target.value)
    }

    const nameHandler = (event) => {
        setName(event.target.value)
    }

    const occupationHandler = (event) => {
        setOccupation(event.target.value);
    }

    const hobbiesHandler = (event) => {
        setHobbies(event.target.value);
    }

    const numberOfCharactersHandler = (event) => {
        setRemainedCharacters(180-event.target.value.length);
        setDescription(event.target.value);
    }

    const addEditActorHandler = async(event) => {
        event.preventDefault();
        setApplyRequired(true);
        
        if (picture !== "" && name !== "" && occupation !== "" && hobbies !== "" && description !== "") {
            if(props.actionType === "updateActor"){
                await fetch(`${serverUrl}/${props.actor.id}`, {
                    method: 'PUT',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "id": props.actor.id,
                        "picture": picture,
                        "name": name,
                        "occupation": occupation,
                        "score": 56,
                        "hobbies": hobbies.split(","),
                        "short_description": description
                      })
                })
                props.editModal(false);
            } else if(props.actionType === "addActor") {
                const res = await fetch(serverUrl)
                const data = await res.json()
                let id = 1;
                if (data.length > 0){
                    for (let i = 0; i < data.length; i++) {
                        if (data[i].id > id) {
                            id = data[i].id
                        }
                    }
                    id++
                }

                await fetch(`${serverUrl}`, {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        "id": id,
                        "picture": picture,
                        "name": name,
                        "occupation": occupation,
                        "score": 56,
                        "hobbies": hobbies.split(","),
                        "short_description": description
                    })
                })
                props.editModal(false);
            } else {
                props.editModal(false);
            }       
        }
    }

    return (
        <form method="POST" onSubmit={addEditActorHandler} className={classes.formCustom}>
            <div className={classes.rowChildrens}>
                <div className={classes.leftcellChildrens}>
                    <div className={classes.cellChildrens}>
                        <label className={classes.cellChildrensLabel} htmlFor="picture">Picture</label>
                        <input type="text" id="picture" name="picture" className={(picture === "" && applyRequired) ? classes.fieldRequiredInput : ""} onChange={pictureHandler} value={picture} />
                        {(picture === "" && applyRequired) ? <span className={classes.fieldRequired}>Field required</span> : null}
                    </div>
                </div>

                <div className={classes.rightcellChildrens}>
                    <div className={classes.cellChildrens}>
                        <label className={classes.cellChildrensLabel} htmlFor="name">Name</label>
                        <input type="text" id="name" name="name" className={(name === "" && applyRequired) ? classes.fieldRequiredInput : ""} onChange={nameHandler} value={name} />
                        {(name === "" && applyRequired) ? <span className={classes.fieldRequired}>Field required</span> : null}
                    </div>
                </div>
            </div>

            <div className={classes.rowChildrens}>
                <div className={classes.leftcellChildrens}>
                    <div className={classes.cellChildrens}>
                        <label className={classes.cellChildrensLabel} htmlFor="occupation">Occupation besides acting</label>
                        <input type="text" id="occupation" name="occupation" className={(occupation === "" && applyRequired) ? classes.fieldRequiredInput : ""} onChange={occupationHandler} value={occupation} />
                        {(occupation === "" && applyRequired) ? <span className={classes.fieldRequired}>Field required</span> : null}
                    </div> 
                </div>

                <div className={classes.rightcellChildrens}>
                    <div className={classes.cellChildrens}>
                        <label className={classes.cellChildrensLabel} htmlFor="hobbies">Hobbies</label>
                        <input type="text" id="hobbies" name="hobbies" className={(hobbies === "" && applyRequired) ? classes.fieldRequiredInput : ""} onChange={hobbiesHandler}  value={hobbies} />
                        {(hobbies === "" && applyRequired) ? <span className={classes.fieldRequired}>Field required</span> : null}
                    </div> 
                </div>
            </div>

            <div className={classes.cellChildrensTextarea}>
                <label className={classes.cellChildrensTextareaLabel} htmlFor="description">Short description</label>
                <textarea type="text" rows="4" maxLength="180" onChange={numberOfCharactersHandler} id="description" name="description" className={(description === "" && applyRequired) ? classes.fieldRequiredInput : ""} value={description}/>
                <span className={classes.remainedCharacters}>{remainedCharacters} characters remained</span>
                {(description === "" && applyRequired) ? <span className={classes.fieldRequired}>Field required</span> : null}
            </div> 

            <div className="centerButton"><Button type="submit" class="btnAddNewActor" title={props.buttonText} /></div>
            <p className={classes.changedMyMind} onClick={changeMyMindHandler}>I changed my mind</p>
        </form>
    )
}

export default AddEditActorForm;
import React, { useState } from "react";

import './ListOfActors.css';

import Button from "../UI/Button";
import ActorCard from "./ActorCard";
import ActorImage from "./ActorImage";
import ActorNameOccupation from "./ActorNameOccupation";
import ActorHobbies from "./ActorHobbies";
import ActorDescription from "./ActorDescription";
import EmptyState from "../UI/EmptyState";
import Sort from "../UI/Sort";
import Select from "../UI/Select";
import SelectAllDesktop from "../UI/SelectAllDesktop";

const ListOfActors = (props) => {
    // const serverUrl = 'http://localhost:5000/actors'
    const serverUrl = 'https://dbactokedavra.herokuapp.com/actors'

    const [actors, setActors] = useState(props.actors)
    const [showSelected, setShowSelected] = useState(false)
    const [chooseActorDesktop, setChooseActorDesktop] = useState(false)
    const [selectAllDesktop, setselectAllDesktop] = useState(false)
    const [numberOfSelected, setNumberOfSelected] = useState('0 Selected')

    const removeActorIdHandler = (id) => {
        props.removeItem(id)
    }

    const editActorIdHandler = (id) => {
        props.actorId(id)
    }

    const selectModalHandler = (result) => {
        props.selectModal(true);
    }

    const sortModalHandler = (result) => {
        props.sortModal(true);
    }

    const sortTypeDesktopHandler = async(result) => {
        const res = await fetch(serverUrl)
        const data = await res.json()
        if (parseInt(result) === 2) {
            setActors(data.sort((a, b) => (b.id > a.id) ? 1 : -1))
        } else {
            setActors(data.sort((a, b) => (a.id > b.id) ? 1 : -1))
        } 
    }

    const isChoosenHandler = (id) => {
        props.numberOfSelectedActors(localStorage.getItem("numberOfSelectedActors"))
    }

    const isChoosenHandlerDesktop = (result) => {
        setTimeout(() => {
            if(document.getElementsByClassName('isChooseActor').length > 0) {
                document.getElementsByClassName("btnDeleteSelected")[0].style.opacity=1
            } else {
                document.getElementsByClassName("btnDeleteSelected")[0].style.opacity=0.2
            }
            document.getElementsByClassName('numberOfSelectedItems')[0].innerText = document.getElementsByClassName('isChooseActor').length+ " Selected"
        }, 100);
    }
    
    const selectActionHandler = (result) => {
        setShowSelected(true)
        setChooseActorDesktop(true)
        setselectAllDesktop(false)
    }

    const closeDesktopHandler = (result) => {
        setShowSelected(false)
        setChooseActorDesktop(false)
        setselectAllDesktop(false)
    }

    const selectAllDesktopHandler = (result) => {
        if (result) {
            document.getElementsByClassName("btnDeleteSelected")[0].style.opacity=1
            setChooseActorDesktop(true)
            setselectAllDesktop(true)
        } else {
            setChooseActorDesktop(true)
            setselectAllDesktop(false)
            document.getElementsByClassName("btnDeleteSelected")[0].style.opacity=0.2
        }
        setTimeout(() => {
            setNumberOfSelected(document.getElementsByClassName('isChooseActor').length+' Selected')
            localStorage.setItem("actorsToDelete", [])
            if (document.getElementsByClassName('isChooseActor').length > 0) {
                let arrActorsId = []
                for (let i = 0; i < document.getElementsByClassName('isChooseActor').length; i++) {
                    arrActorsId.push(document.getElementsByClassName('isChooseActor')[i].parentElement.parentElement.firstChild.value)
                    
                }
                localStorage.setItem("actorsToDelete", arrActorsId);
            }
        }, 100);
    }

    const deleteActorsHandler = async(result) => {
        props.deleteSelectedActors(true)
    }

    const setAddModalHandler = (result) => {
        props.showAddActor(true)
      }

    if (actors.length > 0) {
        return (
            <div className="listOfActors">
                {navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i) === null && !showSelected &&
                    <div className="desktopFilter">
                        <Sort sortTypeDesktop={sortTypeDesktopHandler} />
                        <Select selectAction={selectActionHandler} />
                    </div> 
                }

                {navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i) !== null &&
                    <>
                        <Button class="btnSort" title="Sort" sortModal={sortModalHandler} />
                        <Button class="btnSelect" title="Select" selectModal={selectModalHandler} />
                    </>
                }

                {navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i) === null && showSelected &&
                    <>
                       <SelectAllDesktop closeDesktop={closeDesktopHandler} selectAllDesktop={selectAllDesktopHandler} numberOfSelected={numberOfSelected} deleteActors={deleteActorsHandler}/>
                    </>
                }

                {actors.map((actor, index) => (
                    <div key={Math.random().toString()} className={index  % 2 === 0 ? "evenCard" : "oddCard"}>
                        <input type="hidden" className="actorId" value={actor.id}></input>
                        <ActorCard>
                            {navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i) !== null &&
                                <>
                                    {(!props.chooseActor && !props.selectAll) && <Button class="removeActor" actorId={actor.id} removeActorId={removeActorIdHandler} />}
                                    {(props.chooseActor && !props.selectAll) && <Button class="chooseActor" actorId={actor.id} isChoosen={isChoosenHandler} />}
                                    {(props.chooseActor && props.selectAll) && <Button class="isChooseActor" actorId={actor.id} isChoosen={isChoosenHandler} />}
                                </>
                            }

                            {navigator.userAgent.match(/(iPad)|(iPhone)|(iPod)|(android)|(webOS)/i) === null &&
                                <>
                                    {(!chooseActorDesktop && !selectAllDesktop) && <Button class="removeActor" actorId={actor.id} removeActorId={removeActorIdHandler} />}
                                    {(chooseActorDesktop && !selectAllDesktop) && <Button class="chooseActor" actorId={actor.id} isChoosen={isChoosenHandlerDesktop} />}
                                    {(chooseActorDesktop && selectAllDesktop) && <Button class="isChooseActor" actorId={actor.id} isChoosen={isChoosenHandlerDesktop} />}
                                </>
                            }
            
                            <ActorImage image={actor.picture} />
                            <ActorNameOccupation name={actor.name} occupation={actor.occupation} numberOfLikes={actor.score} />
                            <ActorHobbies hobbies={actor.hobbies}/>
                            <ActorDescription description={actor.short_description} />
                            <Button class="btnEdit" actorId={actor.id} title="Edit" editActorId={editActorIdHandler}/>
                        </ActorCard>
                    </div>
                ))}
            </div>
        );
    } 
    return (
        <EmptyState setAddModal={setAddModalHandler}/>
    )
}

export default ListOfActors;
import React from "react";
import './SelectAllDesktop.css';
import Button from "./Button";

const SelectAllDesktop = (props) => {

    const selectedAllHandler = (result) => {
        props.selectAllDesktop(result)
    }

    const closeHandler = () => {
        props.closeDesktop(true)
    }

    const deleteActorsHandler = () => {
        props.deleteActors(true)
    }

    return(
        <div className="SelectAllDesktop">
            <div className="selectAllLeft">
                <span className="closeSelect" onClick={closeHandler}></span>
                <span className="numberOfSelectedItems">{props.numberOfSelected}</span>
                <span className="bar"></span>
                <p className="selectAllText">Select all</p>
                <Button class="selectAll" selectedAll={selectedAllHandler} />
            </div>
            <Button class="btnDelete btnDeleteSelected" deleteActors={deleteActorsHandler} title="Delete" />
        </div>
    )
}

export default SelectAllDesktop
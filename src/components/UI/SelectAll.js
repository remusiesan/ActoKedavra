import React from "react";
import classes from './SelectAll.module.css';

import Button from "./Button";

const SelectAll = (props) => {
    const selectedAllHandler = (result) => {
        props.selectedAll(result)
    }

    return(
        <div className={classes.selectAllContainer}>
            <p className={classes.selectAllText}>Select all</p>
            <Button class="selectAll" selectedAll={selectedAllHandler}/>
        </div>
    )
}

export default SelectAll
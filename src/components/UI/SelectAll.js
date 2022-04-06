import React from "react";
import classes from './SelectAll.module.css';

import Button from "./Button";

const SelectAll = (props) => {
    const selectedAllHandler = (result) => {
        props.selectedAll(result)
    }

    return(
        <div className={classes.select_all_container}>
            <p className={classes.select_all_text}>Select all</p>
            <Button class="selectAll" selectedAll={selectedAllHandler}/>
        </div>
    )
}

export default SelectAll
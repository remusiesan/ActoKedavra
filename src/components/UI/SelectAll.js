import React from "react";
import classes from './SelectAll.module.css';

const SelectAll = () => {
    return(
        <div className={classes.select_all_container}>
            <p className={classes.select_all_text}>Select all</p>
            <img src="./images/select_all_not_choise.png" />
        </div>
    )
}

export default SelectAll
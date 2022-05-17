import React, { useState } from "react";
import classes from './Sort.module.css';

const Sort = (props) => {
    const sortTypeDesktop = (e) => {
        props.sortTypeDesktop(e.target.value);
    }

    return(
        <select className={classes.sortSelect} defaultValue="3" onChange={sortTypeDesktop}>
            <option value='1'>Ascending</option>
            <option value='2'>Descending</option>
            <option value='3'>Default</option>
        </select>
    )
}

export default Sort;
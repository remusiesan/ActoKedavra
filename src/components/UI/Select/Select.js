import React, { useState } from "react";
import classes from './Select.module.css';

const Select = (props) => {
    const [selectAction, setSelectAction] = useState(false);
    const selectHandler = () => {
        setSelectAction(true);
        props.selectAction(selectAction);
    }
    return(
        <button className={classes.selectButton} onClick={selectHandler}>Select</button>
    )
}

export default Select;
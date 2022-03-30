import React from "react";
import './Button.css';

const Button = (props) => {
    return(
        <button className={props.class} onClick={props.onClick}>{props.title}</button>
    )
}

export default Button;
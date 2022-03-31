import React, {useState} from "react";
import './Button.css';

const Button = (props) => {
    const [title, setTitle] = useState(props.title);
    const [classname, setClassname] = useState(props.class);
    const onClick = () => {
        if(title === "Read more"){
            setTitle("Read less")
            setClassname('btn_read_less')
        } 
        if(title === "Read less"){
            setTitle("Read more")
            setClassname('btn_read_more')
        }
    }
    return(
        <button className={classname} onClick={onClick}>{title}</button>
    )
}

export default Button;
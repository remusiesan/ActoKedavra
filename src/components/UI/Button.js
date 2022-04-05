import React, {useState} from "react";
import './Button.css';

const Button = (props) => {
    // const [idActor, setIndexActor] = useState(0)
    const [classname, setClassname] = useState(props.class)
    const [title, setTitle] = useState(props.title)
    const onClick = () => {
        //Replace if with switch
        if(title === "Read more"){
            setTitle("Read less")
            setClassname('btn_read_less')
            props.showMore(true);
        } 
        if(title === "Read less"){
            setTitle("Read more")
            setClassname('btn_read_more')
            props.showMore(false);
        }

        if(classname === "remove_actor"){
            props.removeActorId(props.actorId);
        }

        if(classname === "btn_edit"){
            props.editActorId(props.actorId);
        }

        if(classname === "close_modal"){
            props.closeModal(true);
        }
    }
    return(
        <button className={classname} onClick={onClick}>{title}</button>
    )
}

export default Button;
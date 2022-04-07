import React, { useState } from "react";
import classes from './ActorDescription.module.css';

import Button from "../UI/Button";

const ActorDescription = (props) => {
    const [description, setDescription] = useState(props.description);
    const [showMore, setShowMore] = useState(false);

    const isShowMore = (result) => {
        if(result === true){
            setShowMore(true)
        } else {
            setShowMore(false)
        }
    }
    return (    
        <div className={classes.actor_name_description}>
            <p>{showMore ? description : description.substr(0, window.innerWidth >=1024 ? 35 : 30)+'...'}</p>
            <Button class="btn_read_more" showMore={isShowMore} title="Read more"/>
        </div>
    )
}

export default ActorDescription
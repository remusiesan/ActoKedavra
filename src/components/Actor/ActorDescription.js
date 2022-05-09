import React, { useState } from "react";
import classes from './ActorDescription.module.css';

import Button from "../UI/Button";

const ActorDescription = (props) => {
    const [description, setDescription] = useState(props.description);
    const [showMore, setShowMore] = useState(false);

    const isShowMore = (result) => {
        if (result === true) {
            setShowMore(true)
        } else {
            setShowMore(false)
        }
    }
    return (    
        <div className={classes.actorNameDescription}>
            <p className={classes.description}>{showMore ? description : description.substr(0, window.innerWidth >=1024 ? 25 : 15)+'...'}</p>
            <Button class="btnReadMore" showMore={isShowMore} title="Read more"/>
        </div>
    )
}

export default ActorDescription
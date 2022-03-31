import React from "react";
import PropTypes from 'prop-types';

import Button from "./Button";
import classes from './Actor.module.css';

const Actor = (props) => {
    return (
        <div className={classes.actor_card}>
            <Button class="remove_actor"/>
            <div className={classes.actor}>
                <div className={classes.actor_image}>
                </div>
                <div className={classes.actor_info}>
                    <div className={classes.actor_name_occupation_likes}>
                        <div className={classes.actor_name_occupation_likes__occupation_likes}>
                            <div className={classes.actor_name_occupation_likes__likes}>
                                <span className={classes.actor_name_occupation_likes__likes__icon}></span>
                                <span className={classes.actor_name_occupation_likes__likes__number}>47</span>
                            </div>
                            <p className={classes.actor_name_occupation_likes__occupation}>Actor & Writer</p>
                        </div>
                        <p className={classes.actor_name_occupation_likes__name}>Leonardo Dicaprio</p> 
                    </div> 

                    <ul className={classes.actor_hobbies}>
                        <li className={classes.actor_hobbies__item}>Traveling</li>
                        <li className={classes.actor_hobbies__item}>Reading</li>
                        <li className={classes.actor_hobbies__item}>Crossword puzzles</li>
                    </ul>

                    <div className={classes.actor_name_description}>
                        <p>It's easy to believe Leonardo DiCaprio really is the "king ..."</p>
                    </div>

                    <div className={classes.read_more_and_edit}>
                        <Button class="btn_read_more" title="Read more"/>
                        <br/>
                        <Button class="btn_edit" title="Edit"/>
                    </div>
                </div>
            </div>
            {/* <ul>
                {Object.entries(props.actor).map(([key, val]) => 
                    <li key={Math.random().toString()}>{val}</li>
                )}
            </ul> */}
        </div>
    )
}
Actor.propTypes = {
    actor: PropTypes.shape({
        name: PropTypes.string,
        score: PropTypes.number,
        hobbies: PropTypes.string,
        description: PropTypes.string
    }),
};

export default Actor;
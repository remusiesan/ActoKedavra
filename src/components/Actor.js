import React from "react";
import PropTypes from 'prop-types';
import classes from './Actor.module.css';

const Actor = (props) => {
    return (
        <div className={classes.actor}>
            <ul>
                {Object.entries(props.actor).map(([key, val]) => 
                    <li key={key}>{val}</li>
                )}
            </ul>
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
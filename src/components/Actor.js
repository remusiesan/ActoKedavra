import React, {useState} from "react";
import PropTypes from 'prop-types';

const Actor = (props) => {
    return (
        <ul>
            {Object.entries(props.actor).map(([key, val]) => 
                <li key={key}>{val}</li>
            )}
        </ul>
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
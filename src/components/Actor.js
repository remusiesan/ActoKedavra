import React from "react";

const Actor = (props) => {
    return (
        <ul>
            {Object.entries(props.actor).map(([key, val]) => 
                <li key={key}>{val}</li>
            )}
        </ul>
    )
}

export default Actor;
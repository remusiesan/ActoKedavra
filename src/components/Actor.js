import React from "react";

const Actor = (props) => {
    const actor = {
        name: 'Leonardo Dicaprio',
        score: 10,
        hobbies: 'Music and dancing naked in the rain',
        description: 'He is a good guy with a thick mustahe.'
    }

    return (
        <ul>
            {Object.entries(actor).map(([key, val]) => 
                <li key={key}>{val}</li>
            )}
        </ul>
    )
}

export default Actor;
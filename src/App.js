import React from "react";

function App() {
  const actor = {
    name: 'Leonardo Dicaprio',
    score: 10,
    hobbies: 'Music and dancing naked in the rain',
    description: 'He is a good guy with a thick mustahe.'
  }

  return (
    <div className="App">
      <ul>
        {Object.entries(actor).map(([key, val]) => 
          <li key={key}>{val}</li>
        )}
      </ul>
    </div>
  );
}

export default App;

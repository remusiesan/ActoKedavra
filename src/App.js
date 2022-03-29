import React from "react";
import "@fontsource/poppins";

import Header from "./components/Header";
import Actor from "./components/Actor";
import Footer from "./components/Footer";

function App() {
  const actor = {
    name: 'Leonardo Dicaprio',
    score: 10,
    hobbies: 'Music and dancing naked in the rain',
    description: 'He is a good guy with a thick mustahe.'
  }

  return (
    <div className="App">
      <Header />
      <Actor actor={typeof actor === 'object' ? actor : {}} />
      <Footer />
    </div>
  );
}

export default App;

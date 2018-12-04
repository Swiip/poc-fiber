import React, { Suspense, useState } from "react";

import logo from "./got-logo.png";
import "./App.css";
import Characters from "./Characters";
import Detail from "./Detail";
import Loader from "./loader/Loader";

const App = () => {
  const [character, setCharacter] = useState(null);
  console.log("render App", character);
  return (
    <div className="App">
      <main className="App-container">
        <img src={logo} className="App-logo" alt="logo" />
        <Suspense fallback={<Loader />}>
          {character === null ? (
            <Characters setCharacter={setCharacter} />
          ) : (
            <div>
              <button onClick={() => setCharacter(null)}>&lt;</button>
              <Detail id={character} />
            </div>
          )}
        </Suspense>
      </main>
    </div>
  );
};

export default App;

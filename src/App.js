import React, { Suspense } from "react";

import logo from "./logo.svg";
import "./App.css";
import Content from "./Content";

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <Suspense fallback={<div>Loading...</div>}>
        <Content />
      </Suspense>
    </header>
  </div>
);

export default App;

import React from "react";

import { myFetcher, reactCacheFetcher } from "./api/resource";

import "./Characters.css";

const fetcher = Math.random() > 0.5 ? myFetcher : reactCacheFetcher;
console.log("using fetcher", fetcher.name);

const Content = ({ setCharacter }) => {
  const data = fetcher("characters");
  console.log("render Content", data);
  return (
    <ul className="Characters">
      {data.map(character => (
        <li key={character.id} className="Characters-entry">
          <img src={`/data/photos/${character.id}.jpg`} alt={character.name} />
          <span>{character.name}</span>
          <button onClick={() => setCharacter(character.id)}>&gt;</button>
        </li>
      ))}
    </ul>
  );
};

export default Content;

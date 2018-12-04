import React from "react";

import { reactCacheFetcher } from "./api/resource";

import "./Detail.css";

const Detail = ({ id }) => {
  const character = reactCacheFetcher(`character/${id}`);
  return (
    <div className="Detail">
      <img src={`/data/photos/${character.id}.jpg`} alt={character.name} />
    </div>
  );
};

export default Detail;

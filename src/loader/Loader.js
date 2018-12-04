import React from "react";

import loaderText from "./loader-text.png";
import spinner from "./spinner.png";
import "./Loader.css";

const Loader = ({ size = "big" }) => (
  <div className="Loader">
    {size !== "small" ? (
      <div>
        <img src={loaderText} alt="Game of Thrones" />
      </div>
    ) : (
      undefined
    )}
    <div>
      <img src={spinner} alt="Loading spinner" />
    </div>
  </div>
);

export default Loader;

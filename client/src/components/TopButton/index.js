import React from "react";
import "./style.css";

const TopButton = props => {
  return (
    <div id="centerDiv">
      <div>
        <a href="library">
          <button className="topButton">Top</button>
        </a>
      </div>
    </div>
  );
};

export default TopButton;

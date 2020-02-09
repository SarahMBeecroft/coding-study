import React from "react";
import "./style.css";
import img3 from "../../images/headerphoto.png";

function Jumbotron() {
  return (
    <div className="jumbotron">
      <a href="home">
      <img src={img3} className="headerImage" alt={"Studdy Budy"} />
      </a>
    </div>
  );
}

export default Jumbotron;

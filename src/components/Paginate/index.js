import React from "react";
import "./style.css";

const Pagination = props => {

  return (    

      <div className="pagination">
        <a href="www.google.com">«</a>
        <a href="www.google.com">1</a>
        <a className="active" href="www.google.com">2</a>
        <a href="www.google.com">3</a>
        <a href="www.google.com">4</a>
        <a href="www.google.com">5</a>
        <a href="www.google.com">6</a>
        <a href="www.google.com">»</a>
      </div>
    );
  }


export default Pagination;

import React from "react";
import "./style.css";
import { Row, Col } from "../Grid";
import img1 from "../../images/course.png";

const DisplayLinks = props => {
  return props.savedLinks.length === 0 ? (
    <div className="card">
      <div className="card-body player">
        <div className="article">
          <h3>Saved Links:</h3>
        </div>
      </div>
    </div>
  ) : (
    <div className="card-body player">
      <div className="article">
        <h3>Saved Links:</h3>
        {props.savedLinks.map(savedLink => {
          return (
            <li className="list-group-item" key={savedLink._id}>
              <Row id={savedLink.title + "Card"} key={savedLink._id}>
                <Col size="1" className="emptyCol" />
                <Col size="9" className="linkInfo">
                  <Row>
                    <img src={img1} alt={"person studying"}/>
                  </Row>
                  <Row>
                    <h2 className="linkTitle">{savedLink.title}</h2>
                  </Row>
                </Col>
              </Row>
              <br></br>
              <Row className="buttonDiv">
                <button
                  className="deleteBtn"
                  id={savedLink._id}
                  onClick={() => props.handleDeleteButton(savedLink._id)}
                >
                  Delete
                </button>
                <a
                  href={savedLink.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="viewLink">Go to study resource</button>
                </a>
              </Row>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayLinks;

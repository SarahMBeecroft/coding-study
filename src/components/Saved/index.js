import React from "react";
import "./style.css";
import { Row, Col } from "../Grid";
import img1 from "../../images/course.jpg";
import img2 from "../../images/garbagecan.png";

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
        <h3>My Library</h3>
        {props.savedLinks.map(savedLink => {
          return (
            <li className="list-group-item" key={savedLink._id}>
              <Row id={savedLink.title + "Card"} key={savedLink._id}>
                <Col size="12" className="linkInfo">
                  <Row>
                    <img
                      className="savedImage"
                      src={img1}
                      alt={"person studying"}
                    />
                  </Row>
                  <Row>
                    <p className="linkTitle">{savedLink.title}</p>
                  </Row>
                </Col>
              </Row>
              <Row>
                <button
                  className="inProgressBtn"
                  id={savedLink._id}
                  onClick={() => props.handleDeleteButton(savedLink._id)}
                >
                  Add to your "In Progress"
                </button>

                <a
                  href={savedLink.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="viewLink">Go to website</button>
                </a>
                <img
                      src={img2}
                      alt={"delete"}
                      id={savedLink._id}
                      onClick={() => props.handleDeleteButton(savedLink._id)}
                      className="deleteImage"
                    />
              </Row>
            </li>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayLinks;

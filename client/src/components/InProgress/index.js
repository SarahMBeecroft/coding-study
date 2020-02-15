import React from "react";
import "./style.css";
import { Row, Col } from "../Grid";
import img1 from "../../images/course.jpg";
import img2 from "../../images/garbagecan.png";


const DisplayInProgressLinks = props => {
  return props.inProgressLinks.length === 0 ? (
    <div className="card">
      <div className="card-body player">
        <div className="article">
          <h3>In Progress Links:</h3>
        </div>
      </div>
    </div>
  ) : (
    <div className="card-body">
      <div className="grid-container">
        {props.inProgressLinks.map(inProgressLink => {
          return (
            <div className="cardFormatting">
              <li className="list-group-item" key={inProgressLink._id}>
                <Row id={inProgressLink.title + "Card"} key={inProgressLink._id}>
                  <Col size="12" className="linkInfo">
                    <Row>
                      <a
                        href={inProgressLink.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <img
                          className="savedImage"
                          src={img1}
                          alt={"person studying"}
                        />
                      </a>
                    </Row>
                    <Row>
                      <p className="linkTitle">{inProgressLink.title}</p>
                    </Row>
                  </Col>
                </Row>

                <Row>
                  <a
                    href={inProgressLink.link}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <button className="viewLink">Visit external website</button>
                  </a>
                  <img
                    src={img2}
                    alt={"delete"}
                    id={inProgressLink._id}
                    onClick={() => props.handleDeleteButton(inProgressLink._id)}
                    className="deleteImage"
                  />
                </Row>
              </li>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DisplayInProgressLinks;

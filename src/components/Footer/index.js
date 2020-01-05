import React, { Component } from "react";
import "./style.css";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col l6 s12">
              <p className="footerText">©2020 Sarah Beecroft</p>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

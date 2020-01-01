import React, { Component } from "react";
import { Container } from "../../components/Grid";
import "./style.css";
import Sidebar from "../../components/Sidebar";
import SubmitLinkForm from "../../components/SubmitLinkForm";
import API from "../../utils/API";

class Home extends Component {
  // Creates state
  state = {
    links: [],
    type: [],
    error: "",
    message: ""
  };

  // Takes value from user input
  handleInputChange = event => {
    this.setState({ links: event.target.value && this.state.links });
  };

  handleFormSubmit = event => {
    console.log(event);
    event.preventDefault();
    console.log(this.state.links);
    let savedLinks = this.state.links.filter(
      link => link.id === event.target.id
    );
    savedLinks = savedLinks[0];
    API.saveLink(savedLinks)
      .then(
        this.setState({
          message: alert("Link saved")
        })
      )
      .catch(err => console.log(err));
  };

  // Renders content onto main home page
  render() {
    return (
      <Container fluid>
        <div className="row">
          <div className="col s5" id="sidebarWidth">
            <Sidebar />
          </div>

          <div className="col s7">
            <SubmitLinkForm
              handleFormSubmit={this.handleFormSubmit}
              handleInputChange={this.handleInputChange}
            />
          </div>
        </div>

        <div className="row">
          <div className="col s12" id="paddingRemover"></div>
        </div>
      </Container>
    );
  }
}

export default Home;

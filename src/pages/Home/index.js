import React, { Component } from "react";
import { Container } from "../../components/Grid";
import "./style.css";
import Sidebar from "../../components/Sidebar";
import SubmitLinkForm from "../../components/SubmitLinkForm";
import API from "../../utils/API";

class Home extends Component {
  // Creates state
  state = {
    input: "",
    links: [],
    error: "",
    message: ""
  };

  // Takes value from user input
  handleInputChange = event => {
    this.setState({ input: event.target.value });
  };

  handleFormSubmit = event => {

    // Saves user input to a new results variable and trims white space
    let savedLinks = this.state.input.trim();
    console.log('The user typed in ' + savedLinks);

    // Sets empty link array to new array of objects 
    this.setState({ links: savedLinks, error: '' })

    // Prevents page from reloading
    event.preventDefault();

    API.saveLink(savedLinks)
      .then(this.setState(
        {
          message: alert('Link saved!')
        }))
      .catch(err => console.log(err));

      console.log("Link: " + savedLinks + " has been saved.");

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
              links={this.state.links}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
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

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
    error: "",
    message: "",
    userInput: ""
  };

  // Takes value from user input
  handleInputChange = event => {
    // Sets input state to whatever user typed in link form field
    this.setState({ userInput: event.target.value });
  };

  // Function to handle form submit
  handleFormSubmit = event => {
    // Prevents page from reloading 
    event.preventDefault();
  
    this.setState({ links: event.target.value, error: '' })

    console.log(this.state.userInput);
    
    let savedLinks = this.state.userInput
    console.log(savedLinks);
  
    
    API.saveLink(savedLinks)
    .then(this.setState(
      {
        message: alert('Link saved')    
      }))
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

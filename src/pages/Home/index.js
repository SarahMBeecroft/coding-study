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
    titles: [],
    error: "",
    message: "",
    linkInput: "",
    titleInput: ""
  };

  // Takes value from user input for title 
  handleInputChange = event => {
    // Sets input state to whatever user typed in title field 
    this.setState({ titleInput: event.target.value });
  };

  // Takes value from user input for link
  handleInputChange2 = event => {
    // Sets input state to whatever user typed in link field 
    this.setState({ linkInput: event.target.value });
  };

  // Function to handle form submit
  handleFormSubmit = event => {
    // Prevents page from reloading
    event.preventDefault();

    // Sets state of links to user input
    this.setState({ links: event.target.value, error: "" });

    // Sets state of titles to user input
    this.setState({ titles: event.target.value, error: "" });

    // Saves user input to new variable and trims it
    let savedLinks = this.state.linkInput.trim();
    console.log("You typed in " + savedLinks);

    // Saves user input to new variable and trims it
    let savedTitles = this.state.titleInput.trim();
    console.log("You typed in " + savedTitles);

    // Saves link to new object variable for database config
    savedLinks = {
      link: savedLinks,
      title: savedTitles
    };

    console.log(savedLinks.link);

    // Saves link to MongoDB
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
              links={this.state.links}
              titles={this.state.titles}
              handleInputChange={this.handleInputChange}
              handleInputChange2={this.handleInputChange2}
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

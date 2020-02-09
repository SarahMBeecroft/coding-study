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
    types: [],
    error: "",
    message: "",
    linkInput: "",
    titleInput: "",
    typeInput: ""
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

  // Takes value from user input for type
  handleInputChange3 = event => {
    // Sets input state to whatever user selected from type field
    this.setState({ typeInput: event.target.value });
  };

  // Function to handle form submit
  handleFormSubmit = event => {
    // Prevents page from reloading
    event.preventDefault();

    // Sets state of links to user input
    this.setState({ links: event.target.value, error: "" });

    // Sets state of titles to user input
    this.setState({ titles: event.target.value, error: "" });

    // Sets state of types to user selection
    this.setState({ types: event.target.value, error: "" });

    // Saves user input to new variable and trims it
    let savedTitles = this.state.titleInput.trim();
    console.log("Link title: " + savedTitles);

    // Saves user input to new variable and trims it
    let savedLinks = this.state.linkInput.trim();
    console.log("URL: " + savedLinks);

    // Saves user input to new variable and trims it
    let savedTypes = this.state.typeInput;
    console.log("Type of resource: " + savedTypes);

    // Saves link to new object variable for database config
    savedLinks = {
      link: savedLinks,
      title: savedTitles,
      studyType: savedTypes,
      inProgress: false
    };

    // Saves link to MongoDB
    API.saveLink(savedLinks)
      .then(
        this.setState({
          message: alert("Link saved to database!")
        })
      )
      .catch(err => console.log(err));

    // Clears search form fields after hitting submit
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
  };

  // Renders content onto main home page
  render() {
    return (
      <Container fluid>
        <div className="row">
          <div className="col s5" id="sidebarWidth">
            <Sidebar />
          </div>
          <div className="col s5">
            <SubmitLinkForm
              links={this.state.links}
              titles={this.state.titles}
              types={this.state.types}
              inProgress={this.state.inProgress}
              handleInputChange={this.handleInputChange}
              handleInputChange2={this.handleInputChange2}
              handleInputChange3={this.handleInputChange3}
              handleFormSubmit={this.handleFormSubmit}
            />
          </div>
          <div className="col s2">
            {/* <TrackingProgress></TrackingProgress> */}
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

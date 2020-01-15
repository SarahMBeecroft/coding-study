import React, { Component } from "react";
import { Container } from "../../components/Grid";
import "./style.css";
import Sidebar from "../../components/Sidebar";
import SubmitLinkForm from "../../components/SubmitLinkForm";
import API from "../../utils/API";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      input: "",
      links: [],
      titles: [],
      error: "",
      message: ""
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  // Takes value from user input
  handleInputChange = event => {

     // and use it to target the key on our `state` object with the same name, using bracket syntax
     this.setState({ [event.target.name]: event.target.value });
  };

  handleFormSubmit = event => {

    let savedTitles = this.state.titles.trim();
    console.log("The user typed in " + savedTitles);

    // Saves user input to a new results variable and trims white space
    let savedLinks = this.state.links.trim();
    console.log("The user typed in " + savedLinks);

    // Sets empty link array to new array of objects
    this.setState({ titles: savedTitles, error: "" });
    this.setState({ links: savedLinks, error: "" });

    // Prevents page from reloading
    event.preventDefault();

    API.saveLink(savedLinks, savedTitles)
      .then(
        this.setState({
          message: alert("Link saved!")
        })
      )
      .catch(err => console.log(err));

    console.log("Link: " + savedTitles + " has been saved.");
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

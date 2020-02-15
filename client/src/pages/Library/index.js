import React, { Component } from "react";
import { Container } from "../../components/Grid";
import Wrapper from "../../components/Wrapper";
import "./style.css";
import API from "../../utils/API";
import Saved from "../../components/Saved";
import Navbar from "../../components/Navbar";
import TopButton from "../../components/TopButton";


class SaveLink extends Component {
  state = {
    savedLinks: [],
    inProgressLinks: []
  };

  componentDidMount() {
    API.getLinks()

      .then(res => this.setState({ savedLinks: res.data }))
      .catch(err => console.log(err));
  }

  handleDeleteButton = _id => {
    API.deleteLink(_id)
      .then(res => this.componentDidMount())
      .catch(err => console.log(err));
  };

  

  // Function to handle in progress button
  handleinProgressButton = (event, inProgressLinks) => {
    // Prevents page from reloading
    event.preventDefault();

    // Sets state of links to user input
    this.setState({ links: event.target.value, error: "" });

    // Sets state of titles to user input
    this.setState({ titles: event.target.value, error: "" });

    // Sets state of types to user selection
    this.setState({ types: event.target.value, error: "" });

    // Saves user input to new variable and trims it
    let inProgressTitles = this.state.titleInput.trim();
    console.log("Link title: " + inProgressTitles);

    // Saves user input to new variable and trims it
    inProgressLinks = this.state.linkInput.trim();
    console.log("URL: " + inProgressLinks);

    // Saves user input to new variable and trims it
    let inProgressTypes = this.state.typeInput;
    console.log("Type of resource: " + inProgressTypes);

    // Saves link to new object variable for database config
    inProgressLinks = {
      link: inProgressLinks,
      title: inProgressTitles,
      studyType: inProgressTypes,
      inProgress: true
    };

    // Saves link to MongoDB
    API.saveLink(inProgressLinks)
      .then(
        this.setState({
          message: alert("Link saved to your in progress!")
        })
      )
      .catch(err => console.log(err));
  };


  render() {
    return (
      <Container fluid>
        <Container>
          <Navbar></Navbar>
          <Wrapper>
            <Saved
              savedLinks={this.state.savedLinks}
              handleDeleteButton={this.handleDeleteButton}
              links={this.state.links}
              inProgressLinks={this.state.inProgressLinks}
              handleinProgressButton={this.handleInProgressButton}
            />
            <TopButton></TopButton>
          </Wrapper>
        </Container>
      </Container>
    );
  }
}

export default SaveLink;

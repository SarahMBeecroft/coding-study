import React, { Component } from "react";
import { Container } from "../../components/Grid";
import "./style.css";
import Sidebar from "../../components/Sidebar";
import SubmitLinkForm from "../../components/SubmitLinkForm";
import API from "../../utils/API";

class Home extends Component {
  // Creates state
  state = {
    input: '',
    savedLinks: [],    
    linkTitle: '',
    error: '',
    message: ''
  };

  // Takes value from user input
  handleInputChange = event => {
    this.setState({ input: event.target.value });
  };

  handleFormSubmit = event => {
     
    // Prevents page from reloading 
    event.preventDefault();
    console.log(this.state.input);
    
    let savedLinks = this.state.input.trim();
    console.log(savedLinks);

    // Saves link to start of array
    savedLinks = savedLinks[0];
   
    // Saves link to database
    API.saveLink(savedLinks)
    .then(this.setState(
      {
        message: alert('Link saved successfully!')
      }))
    .catch(error => console.log(error));
    }

    // API.saveLink(savedLinks)
    
    //   link => link.id === event.target.id
    // );
    // savedLinks = savedLinks[0];
    // API.saveLink(savedLinks)
    //   .then(
    //     this.setState({
    //       message: alert("Link saved")
    //     })
    //   )
    //   .catch(err => console.log(err));
  // };

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

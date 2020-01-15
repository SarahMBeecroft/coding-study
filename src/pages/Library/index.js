import React, { Component } from "react";
import { Container } from "../../components/Grid";
import "./style.css";
import API from "../../utils/API";
import Saved from "../../components/Saved";

class SaveLink extends Component {
  state = {
    savedLinks: []
  };

  componentDidMount() {
    API.getLinks()

      .then(res => this.setState({ savedLinks: res.data }))
      .catch(err => console.log(err));
  }

  handleDeleteButton = id => {
    API.deleteLink(id)
      .then(res => this.componentDidMount())
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container fluid>
        <Container>
          <Saved
            savedLinks={this.state.savedLinks}
            handleDeleteButton={this.handleDeleteButton}
          />
        </Container>
      </Container>
    );
  }
}

export default SaveLink;

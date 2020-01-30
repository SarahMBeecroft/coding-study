import React, { Component } from "react";
import { Container } from "../../components/Grid";
import Wrapper from "../../components/Wrapper";
import "./style.css";
import API from "../../utils/API";
import Saved from "../../components/Saved";
import Navbar from "../../components/Navbar";

class SaveLink extends Component {
  state = {
    savedLinks: []
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

  render() {
    return (
      <Container fluid>
        <Container>
          <Navbar></Navbar>
          <Wrapper>
            <Saved
              savedLinks={this.state.savedLinks}
              handleDeleteButton={this.handleDeleteButton}
            />
          </Wrapper>
        </Container>
      </Container>
    );
  }
}

export default SaveLink;

import React, { Component } from "react";
import { Container } from "../../components/Grid";
import './style.css';
import Wrapper from "../../components/Wrapper";
import API from "../../utils/API";
import Saved from "../../components/Saved";
import NavbarInProgress from "../../components/NavbarInProgress";
import TopButtonInProgress from "../../components/TopButtonInProgress";



class InProgress extends Component {
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
          <NavbarInProgress></NavbarInProgress>
          <Wrapper>
            <Saved
              savedLinks={this.state.savedLinks}
              handleDeleteButton={this.handleDeleteButton}
            />
            <TopButtonInProgress></TopButtonInProgress>
          </Wrapper>
        </Container>
      </Container>
    );
  }
}

export default InProgress;


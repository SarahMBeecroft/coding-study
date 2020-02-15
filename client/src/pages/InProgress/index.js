import React, { Component } from "react";
import { Container } from "../../components/Grid";
import "./style.css";
import Wrapper from "../../components/Wrapper";
import DisplayInProgressLinks from "../../components/InProgress";
import NavbarInProgress from "../../components/NavbarInProgress";
import TopButtonInProgress from "../../components/TopButtonInProgress";

class InProgressPage extends Component {
  state = {
    inProgressLinks: [],
  };

  render() {
    return (
      <Container fluid>
        <Container>
          <NavbarInProgress></NavbarInProgress>
          <Wrapper>
            <DisplayInProgressLinks></DisplayInProgressLinks>
            <TopButtonInProgress></TopButtonInProgress>
          </Wrapper>
        </Container>
      </Container>
    );
  }
}

export default InProgressPage;

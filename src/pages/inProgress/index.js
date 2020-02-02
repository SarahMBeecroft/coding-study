import React, { Component } from "react";
import { Container } from "../../components/Grid";
import './style.css';
import NavbarInProgress from '../../components/NavbarInProgress';
import API from "../../utils/API";



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
        <NavbarInProgress></NavbarInProgress>
  
      </Container>
    );
  }
}

export default InProgress;


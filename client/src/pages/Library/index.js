import React, { Component } from 'react';
import { Container } from '../../components/Grid';
import './style.css';
import API from '../../utils/API';
import Saved from '../../components/Saved';
import Navbar from '../../components/Navbar';
import TopButton from '../../components/TopButton';

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
        <Navbar></Navbar>

        <Saved
          savedLinks={this.state.savedLinks}
          handleDeleteButton={this.handleDeleteButton}
          links={this.state.links}
        />
        <TopButton></TopButton>


      </Container>
    );
  }
}

export default SaveLink;

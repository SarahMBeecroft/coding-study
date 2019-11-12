import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbtron';
import { Container, Row, Col } from '../../components/Grid';
import './style.css';


// Currently set up to use test search field component
class Home extends Component {

  // Creates state
  // state = {
  //   search: '',
  //   beers: [],
  //   error: '',
  //   message: '',
  //   savedBeers: [],
  // };

  // Renders content onto main home page
  render() {
    return (
    <Container fluid>
      <div className="row">
        <div className="col s12">
          <Jumbotron>
            <h1 className="appTitle">Coding Study</h1>
          </Jumbotron>
        </div>
      </div>
    </Container>
    )
  }
}
    
export default Home;
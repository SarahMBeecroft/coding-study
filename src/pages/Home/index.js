import React, { Component } from 'react';
import Jumbotron from '../../components/Jumbtron';
import { Container } from '../../components/Grid';
import './style.css';
import Sidebar from '../../components/Sidebar';
import SubmitLinkForm from '../../components/SubmitLinkForm';
import Footer from '../../components/Footer';


// Items variable for recursive sidebar
const items = [
  { name: 'home', label: 'Home' },
  { name: 'billing', label: 'Billing' },
  { name: 'settings', label: 'Settings' },
]

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
          <div className="col s12" id='paddingRemover'>
            <Jumbotron>
              <h1 className="appTitle">Study Buddy</h1>
            </Jumbotron>
          </div>
        </div>

        <div className="row">
          <div className="col s4" id='sidebarWidth'>
            <Sidebar items={items} />
          </div>

          <div className="col s8">
            <SubmitLinkForm/>
          </div>
        </div>

        <div className="row">
          <div className="col s12" id='paddingRemover'>
            <Footer></Footer>
          </div>
        </div>

      </Container>
    )
  }
}

export default Home;
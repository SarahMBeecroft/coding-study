import React, { Component } from "react";
import { Container } from "../../components/Grid";
import "./style.css";
import Sidebar from "../../components/Sidebar";
import SubmitLinkForm from "../../components/SubmitLinkForm";

// Items variable for recursive sidebar
const items = [
  { name: "home", label: "Home" },
  { name: "billing", label: "Billing" },
  { name: "settings", label: "Settings" }
];

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
        
          <div className="col s5" id="sidebarWidth">
            <Sidebar items={items} />
          </div>

          <div className="col s7">
            <SubmitLinkForm />
          </div>

        </div>

        <div className="row">
          <div className="col s12" id="paddingRemover">
     
          </div>
        </div>
      </Container>
    );
  }
}

export default Home;

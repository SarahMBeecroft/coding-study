import React, { Component } from 'react';
import { Container } from '../../components/Grid';
import './style.css';
import Sidebar from '../../components/Sidebar';
import Search from '../../components/SearchBar';
import SubmitLinkForm from '../../components/SubmitLinkForm';
import API from '../../utils/API';

class Home extends Component {
  // Creates state
  state = {
    search: '',
    links: [],
    titles: [],
    types: [],
    error: '',
    message: '',
    linkInput: '',
    titleInput: '',
    typeInput: ''
  };

  // Takes value from user input for search form
  handleSearchInputChange = event => {
    // Sets input state to whatever user typed in search field
    this.setState({ search: event.target.value });
  };

  // Takes value from user input for title
  handleInputChange = event => {
    // Sets input state to whatever user typed in title field
    this.setState({ titleInput: event.target.value });
  };

  // Takes value from user input for link
  handleInputChange2 = event => {
    // Sets input state to whatever user typed in link field
    this.setState({ linkInput: event.target.value });
  };

  // Takes value from user input for type
  handleInputChange3 = event => {
    // Sets input state to whatever user selected from type field
    this.setState({ typeInput: event.target.value });
  };

  //=======================================
  // Function to handle search form submit
  //=======================================
  handleSearchFormSubmit = event => {
    // Prevents page from reloading
    event.preventDefault();
    // Connects to Google API with search value
    API.searchResource(this.state.search)
      .then(res => {
        if (res.data.items === 'error') {
          throw new Error(res.data.items);
        } else {
          // Stores responses in array
          let results = res.data.items;
          // Maps through the array
          console.log(results);

          results = results.map(result => {
            // Stores resource data in new object
            result = {
              // key: result.id,
              // id: result.id,
              // title: result.volumeInfo.title,
              // authors: result.volumeInfo.authors,
              // description: result.volumeInfo.description,
              // image: result.volumeInfo.imageLinks.thumbnail,
              // link: result.volumeInfo.infoLink
            };
            console.log(result);

            return result;
          });
          // Sets empty link array to new array of objects
          this.setState({ links: results, error: '' });
        }
      })
      .catch(err => this.setState({ error: err.items }));
  };

  //=============================================================
  // Function to handle form submit for user adding own resource
  //=============================================================
  handleFormSubmit = event => {
    // Prevents page from reloading
    event.preventDefault();

    // Sets state of links to user input
    this.setState({ links: event.target.value, error: '' });

    // Sets state of titles to user input
    this.setState({ titles: event.target.value, error: '' });

    // Sets state of types to user selection
    this.setState({ types: event.target.value, error: '' });

    // Saves user input to new variable and trims it
    let savedTitles = this.state.titleInput.trim();
    console.log('Link title: ' + savedTitles);

    // Saves user input to new variable and trims it
    let savedLinks = this.state.linkInput.trim();
    console.log('URL: ' + savedLinks);

    // Saves user input to new variable and trims it
    let savedTypes = this.state.typeInput;
    console.log('Type of resource: ' + savedTypes);

    // Saves link to new object variable for database config
    savedLinks = {
      link: savedLinks,
      title: savedTitles,
      studyType: savedTypes,
      inProgress: false
    };

    // Saves link to MongoDB
    API.saveLink(savedLinks)
      .then(
        this.setState({
          message: alert('Link saved to database!')
        })
      )
      .catch(err => console.log(err));

    // Clears search form fields after hitting submit
    document.getElementById('input1').value = '';
    document.getElementById('input2').value = '';
  };

  //=====================================
  // Renders content onto main home page
  //=====================================
  render() {
    return (
      <Container fluid>
        <div className='row'>
          <div className='col s6' id='sidebarWidth'>
            <Sidebar />
            <Search />
          </div>
          <div className='col s6'>
            <SubmitLinkForm
              links={this.state.links}
              titles={this.state.titles}
              types={this.state.types}
              handleInputChange={this.handleInputChange}
              handleInputChange2={this.handleInputChange2}
              handleInputChange3={this.handleInputChange3}
              handleFormSubmit={this.handleFormSubmit}
            />
          </div>
        </div>

        <div className='row'>
          <div className='col s12' id='paddingRemover'></div>
        </div>
      </Container>
    );
  }
}

export default Home;

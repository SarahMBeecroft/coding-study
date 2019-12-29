import React from 'react';
import { Container } from '../../components/Grid';
import './style.css';

function Library() {
  return (
    <Container fluid>
      <div className='row'>
        <div className='col s12 centerDiv' id='paddingRemover'>
          <h2 id='libraryText'>Library</h2>
        </div>
      </div>
    </Container>
  );
}

export default Library;

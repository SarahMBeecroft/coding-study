import React from 'react';
import { Container } from '../../components/Grid';
import './style.css';
import NavbarInProgress from '../../components/NavbarInProgress';

function InProgress() {
  return (
    <Container fluid>
      <NavbarInProgress></NavbarInProgress>
      <div className='row'>
        <div className='col s12 centerDiv' id='paddingRemover'>
          <h2 id='inProgressText'>In Progress</h2>
        </div>
      </div>
    </Container>
  );
}

export default InProgress;

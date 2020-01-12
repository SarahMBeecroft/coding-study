import React from 'react';
import './style.css';
import { Row, Col } from '../Grid';

const DisplayLinks = props => {
  return (props.savedLinks) ? (
    <div className='card'>
      <div className='card-body player'>
        <div className='article'>
          <h3>Saved Links:</h3>
        </div>
      </div>
    </div>
  ) : (
      <div className='card-body player'>
        <div className='article'>
          <h3>Saved Links:</h3>
          {props.savedLinks.map(savedLink => {
            return (
              <li className='saved-list list-group-item' key={savedLink._id}>
                <Row className='SearchResults' id={savedLink.title + 'Card'} key={savedLink._id}>
               
                  <Col size='1' className='emptyCol' />
                  <Col size='9' className='bookInfo'>
                    <Row>
                      <h2 className='bookTitle'>{savedLink.title}</h2>
                    </Row>
          
                    <Row>
                      <p className='bookDescription'>{savedLink.description}</p>
                    </Row>
                    
                  </Col>
                </Row>
                <br></br>
                <Row className='buttonDiv'>
                  <button className='deleteBtn btn btn-danger' id={savedLink._id} onClick={() => props.handleDeleteButton(savedLink._id)}>
                    Delete Book
                                    </button>
                  <a href={savedLink.link} target='_blank' rel='noopener noreferrer'>
                    <button className='viewBook btn btn-success'>
                      View Resource
                                        </button>
                  </a>
                </Row>
              </li>
            );
          })}
        </div>
      </div>
    )
}

export default DisplayLinks
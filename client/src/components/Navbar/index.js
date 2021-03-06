import React from 'react';
import './style.css';

function Navbar() {
  return (
    <div id='centerNav'>
      <nav className='navbar navbar-expand-lg navbar-light'>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarNav'
          aria-controls='navbarNav'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>
        <div className='collapse navbar-collapse' id='navbarNav'>
          <ul className='navbar-nav'>
            <li className='nav-item'>
              <a className='nav-link' href='home'>
                Home&nbsp;&nbsp;&nbsp;|
              </a>
            </li>
            <li className='nav-item active'>
              <a className='nav-link' href='library' id='activeNav'>
                Library
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;

import React from 'react';
import './style.css';

const Search = props => {
  return (
    <form className='searchForm'>
      <label className='searchLabel'>
        Want to search for a study resource instead of adding your own?
      </label>
      <br></br>
      <input
        className='search-form-control searchInput'
        id='searchInput'
        value={props.search}
        type='text'
        name='search'
        placeholder='Example: HTML, CSS, JavaScript, React, etc.'
        onChange={props.handleSearchInputChange}
      />

      <button
        type='search'
        className='searchButton'
        onClick={props.handleSearchFormSubmit}
      >
        &nbsp;Search&nbsp;
      </button>
    </form>
  );
};

export default Search;

import React from 'react';
import './style.css';
import { Helmet } from 'react-helmet';

const Search = props => {
  return (
    // <form className='searchForm'>
    //   <label className='searchLabel'>
    //     Want to search for a study resource instead of adding your own?
    //   </label>
    //   <br></br>
    //   <input
    //     className='search-form-control searchInput'
    //     id='searchInput'
    //     value={props.search}
    //     type='text'
    //     name='search'
    //     placeholder='Example: HTML, CSS, JavaScript, React, etc.'
    //     onChange={props.handleSearchInputChange}
    //   />

    //   <button
    //     type='search'
    //     className='searchButton'
    //     onClick={props.handleSearchFormSubmit}
    //   >
    //     &nbsp;Search&nbsp;
    //   </button>
    // </form>

    <Helmet>
      <script
        async
        src='https://cse.google.com/cse.js?cx=001349981863271898952:onxjcfpsamh'
      ></script>
      <div class='gcse-search'></div>
    </Helmet>
  );
};

export default Search;

import React from 'react';
import './style.css';

const SubmitLinkForm = props => {
  return (
    <form className='resourceForm'>

    <label>
        Just paste the title here:
        <br></br>
        <input
          className='form-control input'
          value={props.search}
          type='text'
          name='titles'
          placeholder='Example: 15 CSS tricks to make your life easier'
          onChange={props.handleInputChange}
        />
      </label>

      <label>
        Just paste the link to the study resource below:
        <br></br>
        <input
          className='form-control input'
          value={props.search}
          type='text'
          name='links'
          placeholder='Paste link url here'
          onChange={props.handleInputChange}
        />
      </label>
      <br></br>
{/* 
      <select className='resourceDropdown'>
        <option className='optionText'>&nbsp;Type of resource&nbsp;</option>
        <option className='optionText' value='blog'>&nbsp;Blog post&nbsp;</option>
        <option className='optionText' value='course'>&nbsp;Course/Tutorial&nbsp;</option>
        <option className='optionText' value='video'>&nbsp;Video&nbsp;</option>
      </select>
      <br></br> */}

      <button type='submit' className='submitButton' onClick={(event) => props.handleFormSubmit(event)}>
        &nbsp;Add study resource to library&nbsp;
      </button>
 
    </form>
  );
};

export default SubmitLinkForm;

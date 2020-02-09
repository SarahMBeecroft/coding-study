import React from 'react';
import "./style.css";




const SubmitLinkForm = props => {
  return (

    <form className="resourceForm">
      <label>
        Paste the title here:
        <br></br>
        <input
          className="form-control input"
          id="input1"
          value={props.titleInput}
          type="text"
          name="title"
          placeholder="Example: 15 CSS tricks to make your life easier"
          onChange={props.handleInputChange}
        />
      </label>
 <br></br>
      <label>
        Paste the link to the study resource below:
        <br></br>
        <input
          className="form-control input"
          id="input2"
          value={props.linkInput}
          type="text"
          name="link"
          placeholder="Paste link here"
          onChange={props.handleInputChange2}
        />
      </label>
      <br></br>

      <select
        value={props.typeInput}
        onChange={props.handleInputChange3}
        className="resourceDropdown"
      >
        <option className="optionText">&nbsp;Type of resource&nbsp;</option>
        <option value="blog" className="optionText">
          &nbsp;Blog post&nbsp;
        </option>
        <option value="course" className="optionText">
          &nbsp;Course/Tutorial&nbsp;
        </option>
        <option value="video" className="optionText">
          &nbsp;Video&nbsp;
        </option>
      </select>
      <br></br>

      <button
        type="submit"
        className="submitButton"
        onClick={event => {
          props.handleFormSubmit(event);
          
        }}
      >
        &nbsp;Add to library&nbsp;
        
      </button>
 
  
    </form>
    
  );
};

export default SubmitLinkForm;



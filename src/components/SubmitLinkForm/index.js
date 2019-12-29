import React from "react";
import "./style.css";


function SubmitLinkForm() {
  return (
    <form className="resourceForm">
      <label>
        Just paste the link to the study resource below:
        <br></br>
        <input type="text" name="link" className="input" />
      </label>
      <br></br>

      <select className='resourceDropdown'>
        <option className='optionText'>&nbsp;Type of resource&nbsp;</option>
        <option className='optionText'>&nbsp;Blog post&nbsp;</option>
        <option className='optionText'>&nbsp;Course/Tutorial&nbsp;</option>
        <option className='optionText'>&nbsp;Video&nbsp;</option>
      </select>
      <br></br>

      <button type='submit' className='submitButton'>&nbsp;Add study resource to library&nbsp;</button>

    </form>
  );
}

export default SubmitLinkForm;

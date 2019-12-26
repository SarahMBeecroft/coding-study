import React from "react";
import "./style.css";

function SubmitLinkForm() {
  return (
    <form className="resourceForm">
      <p>Add your study resource here by pasting the link:</p>
      <div className="form-group">
        <input className="form-control" type="text" />
      </div>

      <div>
        <button type="submit">Add Resource</button>
      </div>
    </form>
  );
}

export default SubmitLinkForm;

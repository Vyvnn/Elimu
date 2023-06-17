import React from "react";
import EmailValidation from './emailvalidation';

const Parentregister = () => {
  return (
    <div className="form-group">
      <label htmlFor="full-name">FULL NAMES</label>
      <input type="text" placeholder="Enter Full name" name="full-name" id="full-name" required />

      <div>
        <EmailValidation />
        <label htmlFor="email">EMAIL</label>
        <input type="text" placeholder="Enter Email" name="email" id="email" maxlength="8"  required />
      </div>

      <label htmlFor="id-number">ID NUMBER</label>
      
      <input type="text"    maxlength="10"    pattern="\d{10}" required/>


      <label htmlFor="phone-number">PHONE NUMBER</label>
      <input type="text" placeholder="Enter PHONE NUMBER" name="phone-number" id="phone-number" pattern="[0-9]*" maxlength="10"  required />
    </div>
  );
}

export default Parentregister;

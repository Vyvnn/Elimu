import React, { useState } from 'react';

const EmailValidation = () => {
  const [email, setEmail] = useState('');
  const [isValid, setIsValid] = useState(false);

  const validateEmail = () => {
    // Regular expression pattern for email validation
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (emailRegex.test(email)) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  };

  return (
    <div>
      <label htmlFor="email">Email Address:</label>
      <input
        type="text"
        id="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        onBlur={validateEmail}
        className={isValid ? 'success' : 'error'}
      />
      <br />
    
    </div>
  );
};

export default EmailValidation;

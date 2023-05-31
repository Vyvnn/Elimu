import React, { useState } from 'react';
import Signup from './Signup';



function Register() {
    const [selectedProfile, setSelectedProfile] = useState('');
    const [showSignup, setShowSignup] = useState(false);
  
    const handleProfileSelection = (event) => {
      setSelectedProfile(event.target.value);
    };
  
    const handleSignup = () => {
      setShowSignup(true);
    };
  
    return (
      <div>
        <h2>Select your profile:</h2>
        <select value={selectedProfile} onChange={handleProfileSelection}>
          <option value="">-- Select Profile --</option>
          <option value="student">Student</option>
          <option value="teacher">Teacher</option>
          <option value="parent">Parent</option>
        </select>
        <button onClick={handleSignup} disabled={!selectedProfile}>
          Signup
        </button>
  
        {showSignup && <Signup />}
      </div>
    );
  }

export default Register;

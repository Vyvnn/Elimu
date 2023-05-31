import React, { useState } from 'react';
import Signup from './Signup';


const Register = ({ onSelectProfile }) => {
  const [selectedProfile, setSelectedProfile] = useState('');

  const handleProfileSelection = (profile) => {
    setSelectedProfile(profile);
  };

  return (
    <div>
      <h2>Select your profile:</h2>
      <button onClick={() => handleProfileSelection('student')}>Student</button>
      <button onClick={() => handleProfileSelection('teacher')}>Teacher</button>
      <button onClick={() => handleProfileSelection('parent')}>Parent</button>
      <button onClick={selectedProfile && <Signup />}>Signup</button>
      

    </div>
  );
};

export default Register;

import React, { useState } from 'react';

const Signup = () => {
  const [name, setName] = useState('');
  const [admissionNumber, setAdmissionNumber] = useState('');
  const [password, setPassword] = useState('');

  const collectData = () => {
    console.warn(name, admissionNumber, password);
  };

  return (
    <div className='register'>
      <h1>Register</h1>
      <input
        className='inputBox'
        type='text'
        placeholder='Enter Name'
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        className='inputBox'
        type='text'
        placeholder='Enter Admission Number'
        value={admissionNumber}
        onChange={(e) => setAdmissionNumber(e.target.value)}
      />

      <input
        className='inputBox'
        type='password'
        placeholder='Enter Password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button onClick={collectData} className='appButton' type='button'>
        Sign Up
      </button>
    </div>
  );
};

const Register = () => {
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
};

export default Register;

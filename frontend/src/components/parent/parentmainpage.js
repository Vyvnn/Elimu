import React, { useState } from 'react';

const ParentMainPage = ({ getStudentDetails, isAuthenticated }) => {
  const [parentName, setParentName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [studentDetails, setStudentDetails] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!isAuthenticated) {
      setError('Please sign in to access this page');
      return;
    }

    try {
      const response = await getStudentDetails(parentName, studentId);
      setStudentDetails(response);
      setError('');
    } catch (error) {
      setError('Error retrieving student details');
      setStudentDetails('');
    }
  };

  return (
    <div className='container'>
      <h1>Parent Page</h1>

      <form className='container' onSubmit={handleSubmit}>
        <label>
          Parent Name:
          <input type="text" value={parentName} onChange={(e) => setParentName(e.target.value)} />
        </label>
        <br />
        <label>
          Student ID:
          <input type="text" value={studentId} onChange={(e) => setStudentId(e.target.value)} />
        </label>
        <br />
        <button type="submit">Get Student Details</button>
      </form>

      {studentDetails && <p>{studentDetails}</p>}
      {error && <p>{error}</p>}
    </div>
  );
};

export default ParentMainPage;

import React, { useState } from 'react';

const ParentMainPage = ({ getStudentDetails }) => {
  const [parentName, setParentName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [studentDetails, setStudentDetails] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await getStudentDetails(parentName, studentId);
      setStudentDetails(response);
      setError('');
    } catch (error) {
      setError('Error retrieving student');
      setStudentDetails('');
    }
  };

  return (
    <div>
      <h1>Parent Page</h1>

      <form onSubmit={handleSubmit}>
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

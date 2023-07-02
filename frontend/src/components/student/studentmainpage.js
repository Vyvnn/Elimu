import React, { useState } from 'react';

const StudentMainPage = () => {
  const [studentName, setStudentName] = useState('');
  const [studentId, setStudentId] = useState('');
  

  const [grade, setGrade] = useState('');
  const [remark, setRemark] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/grade-and-remark', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ studentName, studentId }),
      });

      if (!response.ok) {
        throw new Error('Error retrieving student');
      }

      const data = await response.json();
      setGrade(data.grade);
      setRemark(data.remark);
      setError('');
    } catch (error) {
      setError('Error retrieving student');
      setGrade('');
      setStudentId('');
      setRemark('');
      setStudentId('');
    }
  };

  return (
    <div className='container' >
      <h1>Student Main Page</h1>

      <form className='container'  onSubmit={handleSubmit}>
        <label>
          Student Name:
          <input type="text" value={studentName} onChange={(e) => setStudentName(e.target.value)} />
        </label>
        <br />
        <label>
          Subject:
          <input type="text" value={subject} onChange={(e) => setSubject(e.target.value)} />
        </label>
        <br />
        <button type="submit">Get Grade and Remark</button>
      </form>

      {grade && remark && (
        <div>
          <h2>Grade: {grade}</h2>
          <p>Remark: {remark}</p>
        </div>
      )}

      {error && <p>{error}</p>}
    </div>
  );
};

export default StudentMainPage;

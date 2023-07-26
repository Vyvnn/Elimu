import React, { useState, useEffect } from 'react';

const StudentMainPage = () => {
  const [studentName, setStudentName] = useState('');
  const [studentId, setStudentId] = useState('');
  const [grade, setGrade] = useState('');
  const [remark, setRemark] = useState('');
  const [error, setError] = useState('');
  const [teacherName, setTeacherName] = useState('');
const [teacherGrade, setTeacherGrade] = useState('');
const [teacherSubject, setTeacherSubject] = useState('');

const currentStudent = JSON.parse(localStorage.getItem("currentUser"));


  useEffect(() => {
    // Get the user data from local storage
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser && currentUser.name) {
      // If the user data exists and contains the name, set it in the state
      setStudentName(currentUser.name);
    }
  }, []); // The empty dependency array ensures this effect runs only once after the component mounts

  const handleSubmit = async (e) => {
    e.preventDefault();
  
    try {
      // Send a request to fetch the student's grade and remark
      const response = await fetch('/api/grade-and-remark', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ studentName, studentId }),
      });
  
      if (!response.ok) {
        throw new Error('Error retrieving student data');
      }
  
      // Extract the student's grade and remark from the response
      const data = await response.json();
      setGrade(data.grade);
      setRemark(data.remark);
      setError('');
  
      // Now, send another request to fetch the teacher's data
      const teacherResponse = await fetch('/api/teacher-data', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });
  
      if (!teacherResponse.ok) {
        throw new Error('Error retrieving teacher data');
      }
  
      // Extract the teacher's data from the response
      const teacherData = await teacherResponse.json();
  
      // Now, you can set the teacher's data in the state
    


      // Set the teacher's data in the state
      setTeacherName(teacherData.name);
      setTeacherGrade(teacherData.grade);
      setTeacherSubject(teacherData.subject);
  
      // setError(''); // If there was an error previously, you can clear it here
    } catch (error) {
      setError('Error retrieving student and/or teacher data');
      setGrade('');
      setStudentId('');
      setRemark('');
      setStudentId('');
    }
  };
  
  
  return (
    <div className='container'>
      <h2>Welcome, {currentStudent.existingStudent.studentName}!</h2>

      <form className='container' onSubmit={handleSubmit}>
      {grade && remark && (
    <div>
      <h2>Grade: {grade}</h2>
      <p>Remark: {remark}</p>
    </div>
  )}

  {teacherName && teacherGrade && teacherSubject && (
    <div>
      <h2>Teacher Name: {teacherName}</h2>
      <p>Teacher Grade: {teacherGrade}</p>
      <p>Teacher Subject: {teacherSubject}</p>
    </div>
  )}

  {error && <p>{error}</p>}
  </form>
    </div>
  );
};

export default StudentMainPage;

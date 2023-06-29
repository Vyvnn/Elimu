import React, { useEffect, useState } from 'react';
import axios from 'axios'; // Assuming you're using axios for API requests

function TeacherPage() {
  const [teacherData, setTeacherData] = useState(null);
  const [studentsData, setStudentsData] = useState([]);

  useEffect(() => {
    // Fetch teacher data from the API
    axios.get('/api/teacher') // Replace '/api/teacher' with your actual API endpoint
      .then(response => {
        setTeacherData(response.data);
      })
      .catch(error => {
        console.error('Error fetching teacher data:', error);
      });

    // Fetch students data from the API
    axios.get('/api/students') // Replace '/api/students' with your actual API endpoint
      .then(response => {
        setStudentsData(response.data);
      })
      .catch(error => {
        console.error('Error fetching students data:', error);
      });
  }, []);

  const handleChange = (e, studentId) => {
    const updatedStudents = studentsData.map(student => {
      if (student.id === studentId) {
        return {
          ...student,
          grade: e.target.value
        };
      }
      return student;
    });
    setStudentsData(updatedStudents);
  };

  return (
    <div className='form-group'>
      <h1>Welcome, {teacherData && teacherData.name}</h1>

      <h2>Subjects: {teacherData && teacherData.subjects}</h2>
      <h2>Class/Form: {teacherData && teacherData.classForm}</h2>

      <h3>Students:</h3>
      {studentsData.length > 0 ? (
        <div>
          {studentsData.map(student => (
            <div key={student.id}>
              <h4>Student Name: {student.name}</h4>
              <p>Grade: 
                <input
                  type="text"
                  value={student.grade}
                  onChange={e => handleChange(e, student.id)}
                />
              </p>
              <p>Remark: {student.remark}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No students found.</p>
      )}
    </div>
  );
}

export default TeacherPage;

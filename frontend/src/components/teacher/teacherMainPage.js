import React, { useState, useEffect } from 'react';
import {AuthContext} from "./context"

const TeacherPage = () => {
  const [students, setStudents] = useState([]);
  const [selectedStudentId, setSelectedStudentId] = useState('');
  const [grade, setGrade] = useState('');
  const [remark, setRemark] = useState('');

  useEffect(() => {
    fetchAllStudents();
  }, []);

  const fetchAllStudents = () => {
    fetch('/api/students')
      .then(response => response.json())
      .then(data => {
        setStudents(data);
      })
      .catch(error => {
        console.error('Error fetching students:', error);
      });
  };

  const handleStudentSelect = (e) => {
    setSelectedStudentId(e.target.value);
  };

  const handleGradeChange = (e) => {
    setGrade(e.target.value);
  };

  const handleRemarkChange = (e) => {
    setRemark(e.target.value);
  };

  const handleUpdateGradeAndRemark = (e) => {
    e.preventDefault();
    if (!selectedStudentId || !grade || !remark) {
      return;
    }

    fetch(`/api/students/${selectedStudentId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ grade, remark })
    })
      .then(() => {
        // Success message or other UI update
        fetchAllStudents();
        setSelectedStudentId('');
        setGrade('');
        setRemark('');
      })
      .catch(error => {
        console.error('Error updating grade and remark:', error);
      });
  };

  return (
    <div>
    <div className='container'>
      <h3>Teacher Page</h3>
      <form  className='container'   onSubmit={handleUpdateGradeAndRemark}>
        <label>
          Select Student:
          <select value={selectedStudentId} onChange={handleStudentSelect}>
            <option value="">-- Select Student --</option>
            {students.map((student) => (
              <option key={student._id} value={student._id}>
                {student.name}
              </option>
            ))}
          </select>
        </label>
        <div>
          <label>
            Grade:
            <input type="text" value={grade} onChange={handleGradeChange} />
          </label>
        </div>
        <div>
          <label>
            Remark:
            <input type="text" value={remark} onChange={handleRemarkChange} />
          </label>
        </div>
        <button type="submit">Update Grade and Remark</button>
      </form>
      </div>
    </div>
  );
};

export default TeacherPage;

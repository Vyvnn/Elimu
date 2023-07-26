import React, { useState, useEffect } from 'react';

const TeacherPage = () => {
  const [student, setStudent] = useState([]);
  const [selectedStudentId, setSelectedStudentId] = useState('');
  const [grade, setGrade] = useState('');
  const [name, setName] = useState('');
  const [remark, setRemark] = useState('');

  const currentTeacher = JSON.parse(localStorage.getItem("currentUser"));
 
  useEffect(() => {
    // Get the user data from local storage
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser && currentUser.name) {
      // If the user data exists and contains the name, set it in the state
      setName(currentUser.name);
    }

    fetchAllStudents(); // Call fetchAllStudents inside useEffect
  }, []);

  const fetchAllStudents = () => {
    fetch('/api/students')
      .then(response => response.json())
      .then(data => {
        setStudent(data); // Fix the state setter to setStudent
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
        // fetchAllStudents();
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
        <h2>Welcome, {currentTeacher?.existingTeacher?.Name}!</h2>
        {/* Rest of the form and JSX */}
      </div>
    </div>
  );
};

export default TeacherPage;
 
import React, { useState } from 'react';

import TeacherMainPage from './teacherMainPage';
import Studentmainpage from './studentmainpage'

// Student Performance Component (unchanged)

// Data Display Component (unchanged)

// Parent Dashboard Component
function ParentMainPage({ studentData }) {
  const [selectedStudentId, setSelectedStudentId] = useState('');

  const handleStudentSelect = (e) => {
    setSelectedStudentId(e.target.value);
  };

  const selectedStudent = studentData.find((student) => student.id === selectedStudentId);

  return (
    <div>
      <h3>Parent Dashboard</h3>
      <label>
        Select Student:
        <select value={selectedStudentId} onChange={handleStudentSelect}>
          <option value="">-- Select Student --</option>
          {studentData.map((student) => (
            <option key={student.id} value={student.id}>
              {student.name}
            </option>
          ))}
        </select>
      </label>

      {selectedStudent && (
        <div>
          <h4>Student Details</h4>
          <p>Name: {selectedStudent.name}</p>
          <p>Class/Form: {selectedStudent.class}</p>
          <p>Subjects Taken: {selectedStudent.subjects.join(', ')}</p>
          <p>Teacher's Name: {selectedStudent.teacher}</p>
          <p>Teacher's Remark: {selectedStudent.remark}</p>
        </div>
      )}
    </div>
  );
}

// App Component (with ParentDashboard)
function App() {
  const [subject, setSubject] = useState('');
  const [studentData, setStudentData] = useState([]);

  const handleSubjectSubmit = (selectedSubject) => {
    setSubject(selectedSubject);
  };

  const handleSavePerformance = (performanceData) => {
    const updatedData = [...studentData, { id: Date.now(), ...performanceData }];
    setStudentData(updatedData);
  };

  return (
    <div>
      <TeacherForm onSubmit={handleSubjectSubmit} />
      <StudentPerformance onSave={handleSavePerformance} />
      <DataDisplay subject={subject} studentData={studentData} />
      <ParentDashboard studentData={studentData} />
    </div>
  );
}

export default ParentMainPage;

import React, { useState } from 'react';

const studentData = [
  { id: 1, name: "John", class: "Grade 10", subjects: ["Math", "Science"], teacher: "Mr. Smith", remark: "Good student" },
  { id: 2, name: "Jane", class: "Grade 9", subjects: ["English", "History"], teacher: "Ms. Johnson", remark: "Hardworking student" }
];

const ParentMainPage = ({ studentData }) => {
  const [selectedStudentId, setSelectedStudentId] = useState('');

  const handleStudentSelect = (e) => {
    setSelectedStudentId(e.target.value);
  };

  const selectedStudent = studentData.find((student) => student.id === selectedStudentId);

  if (selectedStudent) { 
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
  } else {
    return (
      <div>
        {/* Render a message or fallback UI */}
      </div>
    );
  }
};

export default ParentMainPage;

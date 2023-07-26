// StudentRegistrationForm.js
import React, { useState } from "react";
import axios from "axios";

const StudentRegister = ({ teacherId }) => {
  const [studentName, setStudentName] = useState("");
  const [grade, setGrade] = useState("");
  const [password, setPassword] = useState("");
  const [studentNo, setStudentNo] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`http://localhost:5000/api/student/register`, {
        studentName,
        grade,
        password,
        studentNo,
      });
      // Handle successful student registration
      console.log("Student registration successful:", response.data);
    } catch (error) {
      // Handle registration error
      console.error("Student registration failed:", error.response.data);
    }
  };

  return (
    <div className="container">
      <h2>Student Registration</h2>
      <form onSubmit={handleSubmit}>
        {/* Student registration form fields */}
        <div>
          <label>Student Name:</label>
          <input
            type="text"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Grade:</label>
          <input
            type="text"
            value={grade}
            onChange={(e) => setGrade(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Student Number:</label>
          <input
            type="text"
            value={studentNo}
            onChange={(e) => setStudentNo(e.target.value)}
            required
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default StudentRegister;

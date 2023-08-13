// StudentRegistrationForm.js
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const StudentRegister = ({ teacherId }) => {
  const [studentName, setStudentName] = useState("");
  const [grade, setGrade] = useState("");
  const [password, setPassword] = useState("");
  const [studentNo, setStudentNo] = useState("");
  const [error, setError] = useState(false);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

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
      
      navigate("/student/studentsignin");
    } catch (error) {
      if (error.response && error.response.data && error.response.data.error) {
        setShowError(true);
        console.log(error.response.data.error);
      } else {
        setShowError(true);
        console.log("An error occurred during registration:", error);
      }
    }
  }
  return (
    <div className="container">
      <h2>Student Registration</h2>
      <form onSubmit={handleSubmit}>
    
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

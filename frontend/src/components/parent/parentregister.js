import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const ParentRegistrationForm = ({ teacherId }) => {
  const [parentName, setParentName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [student_Id, setStudent_Id] = useState("");
  const [error, setError] = useState(false);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post(`http://localhost:5000/api/parent/register`, {
        parentName,
        email,
        password,
        student_Id,
      });
      // Handle successful parent registration
      console.log("Parent registration successful:", response.data);
      navigate("/parent/parentsignin");
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
      <h2>Parent Registration</h2>
      <form onSubmit={handleSubmit}>
       
        <div>
          <label>Parent Name:</label>
          <input
            type="text"
            value={parentName}
            onChange={(e) => setParentName(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
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
          <label>student_Id:</label>
          <input
            type="student_Id"
            value={student_Id}
            onChange={(e) => setStudent_Id(e.target.value)}
            required
          />
        </div>
       
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default ParentRegistrationForm;

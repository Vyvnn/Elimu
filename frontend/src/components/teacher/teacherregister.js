import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const TeacherRegister = ({ setAuthenticated }) => {
  // State variables for teacher registration form
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subjectsTaught, setSubjectsTaught] = useState("");
  const [TSc_No, setTSc_No] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  // Function to handle form submission
  const handleSubmit = async (event) => {
    
    event.preventDefault();
    console.log("Form data before submission:", { name, email, subjectsTaught, TSc_No, password });
    try {
      // Send teacher registration data to the server
      setShowError(false);
      const response = await axios.post("http://localhost:5000/api/teacher/register", {
        name,
        email,
        subjectsTaught,
        TSc_No,
        password,
      }
      , {
        headers: {
          'Content-Type': 'application/json', // Add Content-Type header for JSON data
          
        },
      });
      
      // Handle successful teacher registration
      console.log("Teacher registration successful:", response.data);
          navigate("/teacher/teachersignin");
      setAuthenticated(true); // Set the teacher as authenticated
   // Save the user data to localStorage
   localStorage.setItem("currentUser", JSON.stringify(response.data));
   const user = response.data.user;

    } catch (error) {
      setError(error.response.data.error);

      setShowError(true);
      console.log(error.response.data.error);
    }
  };     


  return (
    <div className="container">
      <div className="form-data">
      {/* Show Teacher Registration title */}
      <h2>Teacher Registration</h2>
      <form onSubmit={handleSubmit}>
      <div>
          <label>Teacher Name:</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
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
            onChange={(e) => [setPassword(e.target.value)]}
          />
        </div>
        <div>
          <label>TSc_No:</label>
          <input
            type="text"
            value={TSc_No}
            onChange={(e) => [setTSc_No(e.target.value)]}
            required
          />
        </div>
        <div>
          <label>subjectsTaught:</label>
          <input
            type="text"
            value={subjectsTaught}
            onChange={(e) => setSubjectsTaught(e.target.value)}
            required
          />
        </div>
       
        <button type="submit">Register</button>
      </form>
      </div>
    </div>
      
  );
};

export default TeacherRegister;

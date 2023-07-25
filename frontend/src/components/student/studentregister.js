import React, { useState } from "react";
import { Link } from 'react-router-dom';
// import {AuthContext} from "./context";

const StudentRegister = () => {
  const [fullName, setFullName] = useState("");
  const [studentID, setStudentID] = useState("");
  const [password, setPassword] = useState('');
  const [studentClass, setStudentClass] = useState("");
  const [subject, setSubject] = useState("");
  const [interest, setInterest] = useState("");
  const [confirmpassword, setConfirmPassword] = useState('');
  const [formErrors, setFormErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "full-name":
        setFullName(value);
        break;
      case "studentID":
        setStudentID(value);
        break;
      case "studentClass":
        setStudentClass(value);
        break;
      case "subjects":
        setSubject(value);
        break;
      case "interests":
        setInterest(value);
        break;
      default:
        break;
    }
  };

  const handleClassChange = (e) => {
    setStudentClass(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const errors = {};
    if (!fullName) {
      errors.fullName = "Full Name is required";
    }
    if (!studentID) {
      errors.studentID = "Student ID is required";
    }
 
  
    // If there are errors, set the formErrors state and prevent form submission
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }
    // Create an object with the form data
    const formData = {
      fullName,
      studentID,
      password,
      studentClass,
      subject,
      interest,
    };

    fetch('/(http://localhost:5000/api/mainpage', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
 
  .then((response) => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })

  .then((data) => {
    console.log('Registration successful:', data);

  })
  .catch((error) => {

    console.error('Registration failed:', error.message);


  });
};

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="full-name">Full Name</label>
        <input type="text" placeholder="Enter Full Name" name="full-name" id="full-name" value={fullName} onChange={handleChange} required />
  
        <div>
          <label htmlFor="studentID">StudentID</label>
          <input type="text" placeholder="Enter StudentID" name="studentID" id="studentID" maxLength="8" value={studentID} onChange={handleChange} required />
        </div>
  
        <label htmlFor="studentClass"> Select Class</label>
        <select value={studentClass} onChange={handleClassChange}>
          <option value="Form 1">Form 1</option>
          <option value="Form 2">Form 2</option>
          <option value="Form 3">Form 3</option>
          <option value="Form 4">Form 4</option>
        </select>
  
        <label htmlFor="subjects">Choose a Subject:</label>
        <select id="subjects" name="subjects" value={subject} onChange={handleChange}>
          <option value="Maths">Maths</option>
          <option value="English">English</option>
          <option value="Science">Science</option>
          <option value="Kiswahili">Kiswahili</option>
          <option value="C.R.E">C.R.E</option>
          <option value="Biology">Biology</option>
          <option value="Physics">Physics</option>
          <option value="Chemistry">Chemistry</option>
          <option value="Geography">Geography</option>
          <option value="History">History</option>
          <option value="Business Studies">Business Studies</option>
        </select>
  
        <br />
        <br />
  
        <label htmlFor="interests">Choose an Interest:</label>
        <select id="interests" name="interests" value={interest} onChange={handleChange}>
          <option value="Sports">Sports</option>
          <option value="Programming">Programming</option>
          <option value="Yoga">Yoga</option>
          <option value="Cooking">Cooking</option>
          <option value="Robotics">Robotics</option>
        </select>
      </div>
      <div>
            <label>
              Password:
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
          </div>

          <br />
          <label>
          
            <label>
          Confirm Password:
          <input type="password" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </label>
        {formErrors.confirmpassword && <p className="error">{formErrors.confirmpassword}</p>}

        <br />


          </label>
      <div>
    <Link to={"student/studentsignin"} ><button type="submit" className="btn btn-primary">
Register
    </button> </Link>
    </div>
    </form>
  );
}
export default StudentRegister;
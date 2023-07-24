import React, { useState } from "react";
import { Link } from "react-router-dom";

const TeacherRegister = () => {
    const [teacherName, setTeacherName] = useState("");

    const [teacherNumber, setTeacherNumber] = useState("");
    const [specialitySubjects, setSpecialitySubjects] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    const [formErrors, setFormErrors] = useState({});
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = {
            teacherName,
            teacherNumber,
            specialitySubjects,
            phoneNumber,
            email,
          };
            // Perform form validation here
    const errors = {};
    if (!teacherName) {
      errors.teacherName = "Teacher Name is required";
    }
    if (!teacherNumber) {
      errors.teacherNumber = "Teacher Number is required";
    }
    if (!specialitySubjects) {
      errors.specialitySubjects = "Speciality Subjects are required";
    }
    if (!phoneNumber) {
      errors.phoneNumber = "Phone Number is required";
    }
    if (!email) {
      errors.email = "Email Address is required";
    } else if (!isValidEmail(email)) {
      errors.email = "Invalid Email Address";
    }

    // If there are errors, handle them and prevent form submission
    if (Object.keys(errors).length > 0) {
      // Set the formErrors state to display the errors to the user
      setFormErrors(errors);
      return;
    }

    

    // Send the form data to the backend API for registration
    fetch('http://localhost:5000/api/mainpage', {
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
      // You can show a success message to the user or redirect to another page after successful registration.
      // For example: history.push('/teacher/teachermainpage');
    })
    .catch((error) => {
      console.error('Registration failed:', error.message);
      // You can handle the error and show an error message to the user if needed.
    });
  };

  // Helper function to validate email format
  const isValidEmail = (email) => {
    // Use a regular expression for basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="teacher-name">Teacher Name:</label>
        <input
          type="text"
          id="teacher-name"
          value={teacherName}
          onChange={(e) => setTeacherName(e.target.value)}
          required
        />
        {formErrors.teacherName && <p className="error">{formErrors.teacherName}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="teacher-number">Teacher Number:</label>
        <input
          type="text"
          id="teacher-number"
          value={teacherNumber}
          onChange={(e) => setTeacherNumber(e.target.value)}
          required
        />
        {formErrors.teacherNumber && <p className="error">{formErrors.teacherNumber}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="speciality-subjects">Speciality Subjects:</label>
        <select
          id="speciality-subjects"
          value={specialitySubjects}
          onChange={(e) => setSpecialitySubjects(e.target.value)}
          required
        >
          <option value="">Select Speciality Subjects</option>
          {/* Add other options for speciality subjects here */}
        </select>
        {formErrors.specialitySubjects && <p className="error">{formErrors.specialitySubjects}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="phone-number">Phone Number:</label>
        <input
          type="text"
          id="phone-number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          required
        />
        {formErrors.phoneNumber && <p className="error">{formErrors.phoneNumber}</p>}
      </div>

      <div className="form-group">
        <label htmlFor="email">Email Address:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        {formErrors.email && <p className="error">{formErrors.email}</p>}
      </div>

      <div>
        <Link to={"teacher/teachersignin"}>
          <button type="submit" className="btn btn-primary">
            Register
          </button>
        </Link>
      </div>
    </form>
  );
};




export default TeacherRegister;

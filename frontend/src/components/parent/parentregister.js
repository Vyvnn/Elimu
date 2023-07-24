import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Parentregister = () => {
  const [parentName, setParentName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [selectedStudent, setSelectedStudent] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');
  const [formErrors, setFormErrors] = useState({});


  const handleStudentChange = (e) => {
    const { name, value } = e.target;
    if (name === "selectedStudent") {
      setSelectedStudent(value);
    } else if (name === "selectedGrade") {
      setSelectedGrade(value);
    }
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    // Perform form validation
    const errors = {};
    if (!parentName.trim()) {
      errors.parentName = 'Parent\'s Name is required.';
    }

    if (!email.trim()) {
      errors.email = 'Email is required.';
    }

    if (!password.trim()) {
      errors.password = 'Password is required.';
    } else if (password !== confirmpassword) {
      errors.confirmpassword = 'Passwords do not match.';
    }

    if (!selectedStudent) {
      errors.selectedStudent = 'Please select a Student.';
    }

    if (!selectedGrade) {
      errors.selectedGrade = 'Please select a Grade.';
    }

    // If there are errors, set the state and stop form submission
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    // If there are no errors, proceed with the form submission
    const formData = {
      parentName,
      email,
      password,
      childName: selectedStudent,
      grade: selectedGrade,
    };

    // Send the form data to the backend API for registration
    fetch('(http://localhost:5000/api/parent/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: {
        "parentName": formData.get("parentName"),
        "email": formData.get("email"),
        "password": formData.get("password")
      }
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


    <form className='container' onSubmit={handleSubmit}>
      <div className="form-group"></div>
      <div className="row justify-content-center">
        <div>
          <label>
            Parent's Name:
            <input type="text" value={parentName} onChange={(e) => setParentName(e.target.value)} />
          </label>
          {formErrors.parentName && <p className="error">{formErrors.parentName}</p>}
        </div>
        <div>
          <label>
            Email:
            <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
          </label>
          {formErrors.email && <p className="error">{formErrors.email}</p>}
        </div>

        <div>
          <label>
            Password:
            <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          </label>
          {formErrors.password && <p className="error">{formErrors.password}</p>}
        </div>

        <br />
        <label>
          Confirm Password:
          <input type="password" value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} />
        </label>
        {formErrors.confirmpassword && <p className="error">{formErrors.confirmpassword}</p>}

        <br />


        <label>
          Student Name:
          <select name="selectedStudent" value={selectedStudent} onChange={handleStudentChange}>
            <option value="">Select Student</option>
            <option value="Child A">Student A</option>
            <option value="Child B">Student B</option>
            <option value="Child C">Student A</option>
            <option value="Child D">Student B</option>




            {/* Add more options for each child */}
          </select>



        </label>
        {formErrors.selectedStudent && <p className="error">{formErrors.selectedStudent}</p>}

        <div>
          <label>
            Grade:
            <select name="selectedGrade" value={selectedGrade} onChange={handleStudentChange}>
              <option value="">Select Class</option>
              <option value="Form 1">Form 1</option>
              <option value="Form 2">Form 2</option>
              <option value="Form 3">Form 3</option>
              <option value="Form 4">Form 4</option>
            </select>
          </label>

          {formErrors.selectedGrade && <p className="error">{formErrors.selectedGrade}</p>}
        </div>



      </div>
      <div>
        <Link to={"/parent/parentsignin"} ><button type="submit" className="btn btn-primary" onClick={handleSubmit}>
          Register
        </button> </Link>
      </div>
    </form>
  );
}


export default Parentregister;

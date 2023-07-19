import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Parentregister = () => {
  const [parentName, setParentName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmpassword, setConfirmPassword] = useState('');
  const [selectedStudent, setSelectedStudent] = useState('');
  const [selectedGrade, setSelectedGrade] = useState('');



  const handleStudentChange = (e) => {
    setSelectedStudent(e.target.value);
    setSelectedGrade(e.target.value);
  };




  const handleSubmit = (e) => {
    e.preventDefault();
    // Create an object with the form data
    // const  = {
    //   parentName,
    //   email,
    //   password,

    //   childName,
    //   grade,
    // };

    // Send the form data to the backend API for registration
    // You can use libraries like Axios or fetch to make the HTTP request
    // Example: axios.post('/api/register', formData)
    // Handle the backend response as needed
  };

  return (
    <div className="form-group">
      <form className='container' onSubmit={handleSubmit}>

        <div className="row justify-content-center">
          <div>
            <label>
              Parent's Name:
              <input type="text" value={parentName} onChange={(e) => setParentName(e.target.value)} />
            </label>

          </div>
          <div>
            <label>
              Email:
              <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
            </label>
          </div>

          <div>
            <label>
              Password:
              <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </label>
          </div>

          <br />
          <label>
            Confirm Password:
            <input type="  password " value={confirmpassword} onChange={(e) => setConfirmPassword(e.target.value)} />

          </label>


          <br />
          <label>
            Student Name:
            <select value={selectedStudent} onChange={handleStudentChange}>
              <option value="">Select Student</option>
              <option value="Child A">Student A</option>
              <option value="Child B">Student B</option>
              <option value="Child C">Student C</option>
              <option value="Child D">Student D</option>
              <option value="Child E">Student E</option>
              <option value="Child B">Student F</option>
              <option value="Child C">Student G</option>
              <option value="Child D">Student H</option>
              <option value="Child E">CStudent I</option>
              {/* Add more options for each child */}
            </select>
          </label>


          <div>
          <label>
            Grade:

            <select value={selectedGrade} onChange={handleStudentChange}>
              <option value="">Select Class</option>
              <option value="Form 1">Form 1</option>
              <option value="Form 2">Form 2</option>
              <option value="Form 3">Form 3</option>
              <option value="Form 4">Form 4</option>

           
            </select>
          </label>
          </div>




          {/* Other form inputs for password, child's name, grade, etc. */}
          <div>
            <Link to={"parent/parentmainpage"} ><button type="submit" className="btn btn-primary">
              Register
            </button> </Link>
          </div>
        </div>

      </form>
    </div>
  );
};

export default Parentregister;

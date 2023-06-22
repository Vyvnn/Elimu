import React, { useState } from "react";
import EmailValidation from "./emailvalidation";
import { Link } from 'react-router-dom';

const StudentRegister = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [subject, setSubject] = useState("");
  const [interest, setInterest] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "full-name":
        setFullName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "class":
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
  const handleChildChange = (e) => {
    setStudentClass(e.target.value);
  };

  return (
    <form className="container">
      <div className="form-group">

        <label htmlFor="full-name">Full Name</label>
        <input type="text" placeholder="Enter Full Name" name="full-name" id="full-name" value={fullName} onChange={handleChange} required />

        <div>
          {/* <EmailValidation /> */}

          <label htmlFor="email">Email</label>
          <input type="text" placeholder="Enter Email" name="email" id="email" maxLength="8" value={email} onChange={handleChange} required />   </div>

        <label htmlFor="class"> Select Class</label>

        <select value={setStudentClass} onChange={handleChildChange}>

          <option value="Form 1">Form 1</option>
          <option value="Form 2">Form 2</option>
          <option value="Form 3">Form 3</option>
          <option value="Form 4">Form 4</option>

          {/* Add more options for each child */}
        </select>

        <label htmlFor="subjects">Choose a Subject:</label>
        <select id="subjects" name="subjects" value={subject} onChange={handleChange}>

          <option value="Maths">Maths</option>
          <option value="English">English</option>
          <option value="Science">Science</option>
          <option value="Kiswahili">Kiswahili</option>
          <option value="C.R.E">C.R.E</option>
          <option value="I.R.E">I.R.E</option>
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

        <div>
        <Link to={"/studentmainpage"} ><button type="submit" className="btn btn-primary">
Register
    </button> </Link>
</div>

      </div>
    </form>
  );
};

export default StudentRegister;

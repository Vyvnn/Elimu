import React, { useState } from "react";
import { Link } from "react-router-dom";

const TeacherRegister = () => {
    const [teacherName, setTeacherName] = useState("");

    const [teacherNumber, setTeacherNumber] = useState("");
    const [specialitySubjects, setSpecialitySubjects] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [email, setEmail] = useState("");
    
    
    const handleSubmit = (e) => {
        e.preventDefault();
        // Perform form submission logic here
        // Validate and process the form data
    };

    return (
        <div className="form-group">
            <form className="container" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="teacher-name">Teacher Name:</label>
                    <input
                        type="text"
                        id="teacher-name"
                        value={teacherName}
                        onChange={(e) => setTeacherName(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="teacher-number">Teacher Number:</label>
                    <input
                        type="text"
                        id="teacher-number"
                        value={teacherNumber}
                        onChange={(e) => setTeacherNumber(e.target.value)}
                        required
                    />
                </div>

                <div>
                    <label htmlFor="speciality-subjects">Speciality Subjects:</label>
                    <select
                        id="speciality-subjects"
                        value={specialitySubjects}
                        onChange={(e) => setSpecialitySubjects(e.target.value)}
                        required
                    >
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
                
                </div>
   

    <div>
        <label htmlFor="phone-number">Phone Number:</label>
        <input
            type="text"
            id="phone-number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
        />
    </div>
       

    <div>
        <label htmlFor="email">Email Address:</label>
        <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
        />
    </div>
<div>
    <Link to={"teacher/teachermainpage"} ><button type="submit" className="btn btn-primary">
Register
    </button> </Link>
    </div>
      </form >
    </div >
  );
};
export default TeacherRegister;

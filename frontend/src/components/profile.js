import React from 'react';
import { useNavigate } from "react-router-dom";
import {Link} from 'react-router-dom';

const Profile = () => {
  const navigate = useNavigate();

  const handleProfileSelection = (role) => {
    // Perform any necessary actions based on the selected role
    // For example, you can store the selected role in local storage or state

    // Redirect the user to the appropriate sign-in page based on the role
    if (role === 'student') {
     navigate('/student/studentsignin');
    } else if (role === 'parent') {
      navigate('/parent/parentsignin');
    } else if (role === 'teacher') {
      navigate('/teacher/teachersignin');
    }
  };

  return (
    <div>
      <div >
        <strong><p id='choose'>Are you a:</p></strong>
      </div>
      <br />
      <Link to='/student/studentsignin'> <img src="./images/studentpic.png" alt="Student" className="Student"/></Link>
      {/* <button id="profile" onClick={() => handleProfileSelection('student')}>
  <h3>STUDENT</h3>
</button> */}
       
      <br />
      <Link to='/parent/parentsignin'> <img src="./images/parent_guide.png" alt="Parent" className="Parent"/></Link>
      {/* <button  id="profile"onClick={() => handleProfileSelection('parent')}>
        <h3>PARENT/GUARDIAN</h3>
      </button> */}
      
      <br />
      <Link to='/teacher/teachersignin'> <img src="./images/teacherpic.png" alt="Teacher" className="Teacher"/></Link>
      {/* <button  id="profile"onClick={() => handleProfileSelection('teacher')}>
        <h3>TEACHER</h3>
      </button> */}
    </div>
  );
};

export default Profile;

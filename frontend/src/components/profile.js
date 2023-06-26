

import React from 'react';
import { useNavigate } from "react-router-dom";

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
      <button id="profile" onClick={() => handleProfileSelection('student')}>
  <h3>STUDENT</h3>
</button>
       
      <br />
      <button  id="profile"onClick={() => handleProfileSelection('parent')}>
        <h3>PARENT/GUARDIAN</h3>
      </button>
      <br />
      <button  id="profile"onClick={() => handleProfileSelection('teacher')}>
        <h3>TEACHER</h3>
      </button>
    </div>
  );
};

export default Profile;

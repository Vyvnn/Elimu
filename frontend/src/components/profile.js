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
   {/* <div className='profiles'> */}
      {/* <Link to='/student/studentsignin'> <img   src="./images/studentpic.png" alt="Student" className="studentpic"/>
      <div class="overlay">
      <div class="text">Student</div>
    </div>
      
      </Link> */}
       <button id="profile" onClick={() => handleProfileSelection('student')}>
        <img src="images/icon.jpg" alt=""  width="50" height="50"/>
      <h3>STUDENT</h3>
      </button> 
       
      <br />
      {/* <div className='profileparent'> */}
      {/* <Link to='/parent/parentsignin'> <img src="./images/parent_guide.png" alt="Parent" className="Parentpic"/>
      <div class="overlays">
      <div class="texts">Parent</div>
    </div>
      </Link> */}
      <button  id="profile"onClick={() => handleProfileSelection('parent')}>
      <img src="images/parent.png" alt=""  width="50" height="50"/>
        <h3>PARENT/GUARDIAN</h3>
      </button> 
      
      <br />
      {/* </div> */}
    {/* <Link to='/teacher/teachersignin'> <img src="./images/teacherpic.png" alt="Teacher" className="Teacherpic"/></Link> */}
      <button  id="profile"onClick={() => handleProfileSelection('teacher')}>
      <img src="images/teacher.jpg" alt=""  width="50" height="50"/>
        <h3>TEACHER</h3>
      </button> 


    </div>
  );
};

export default Profile;

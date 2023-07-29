import React, { useState,useEffect } from "react";
import { Link } from 'react-router-dom';

const Nav = () => {
    const [thereisauser,setThereisauser]=useState(false)
    useEffect(() => { const currentStudent = JSON.parse(localStorage.getItem("currentUser")); 

    if (currentStudent) { setThereisauser(true); } }, []);


    const logout=()=>{
        localStorage.removeItem("currentUser")
        setThereisauser(false)
    }
    return (
        <nav className="navbar">
         
         <Link to='/'> <img src="images/logo.PNG" alt="logo" className="logo" /></Link>

            <div className="links">
            
                
                {thereisauser && <Link to=''onClick={logout}>Logout</Link>}
                {/*<Link to='parent/parentmainpage'>Parent</Link>
                <Link to='student/studentmainpage'>Student</Link>
                <Link to='teacher/teacherMainPage'>Teacher</Link> */}

               


              








            </div>
        </nav>
    );
}

export default Nav;
import React from "react";
import { Link } from 'react-router-dom';

const Nav = () => {
    const logout=()=>{
        localStorage.removeItem("currentUser")
    }
    return (
        <nav className="navbar">
         
         <Link to='/'> <img src="images/logo.PNG" alt="logo" className="logo" /></Link>

            <div className="links">
            
                <Link to='/'>Home</Link>
                <Link to=''onClick={logout}>Logout</Link>
                {/*<Link to='parent/parentmainpage'>Parent</Link>
                <Link to='student/studentmainpage'>Student</Link>
                <Link to='teacher/teacherMainPage'>Teacher</Link> */}

                <Link to='/contact_Us'>Contact Us</Link>


              








            </div>
        </nav>
    );
}

export default Nav;
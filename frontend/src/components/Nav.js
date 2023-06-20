import React from "react";
import {Link} from 'react-router-dom';

const Nav = () => {
    return (  
        <nav className="navbar">
            <img src="./images/logo.PNG" alt="logo" className="logo"/>

    
            <div className="links">
           <Link to='/'>Home</Link>
           <Link to='/profile'>Profile</Link>
           <Link to='/parentmainpage'>Parent</Link>
           <Link to='/studentmainpage'>Student</Link>
           <Link to='/teachermainpage'>Teacher</Link>
           


                
                

            </div>
        </nav>
    );
}
 
export default Nav;
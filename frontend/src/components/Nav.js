import React from "react";
// import {links} from 'react-router-dom';

const Nav = () => {
    return (  
        <nav className="navbar">
            <img src="./images/logo.avif" alt="logo" className="logo"
            
            />

    
            <div className="links">
              
            
        
            
                <a href="/"className>Home</a>
                <a href="/register">Register</a>
                {/* <a href="/parent">Parent</a>
                <a href="/teachers">Teachers</a> */}
                <a href="/contact-us">Contact_us</a>
                <a href="/Signup">Sign Up</a>

            </div>
        </nav>
    );
}
 
export default Nav;
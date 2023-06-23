import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Teachersignin = () => {
    const [formData, setFormData] = useState({
        username: '',
        password: ''
      });
    
      const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
          ...prevData,
          [name]: value
        }));
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        // Perform login logic here
        // You can access form data from the 'formData' state
        console.log(formData);



      }
    return (  

       
            <div className="container">
      <div className="row justify-content-center">
        <div id="welcomeS">
          <p>Welcome to</p>
          <h3>Elimu</h3>
        </div>
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label>TSCNO</label>
              <input
                type="text"
                name="username"
                className="form-control border border-dark rounded"
                placeholder=" enter your TSC NO"
                required
                value={formData.TSCNO}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control border border-dark rounded"
                placeholder="Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control border border-dark rounded"
                placeholder=" Confirm Password"
                value={formData.password}
                onChange={handleChange}
              />
            </div>

<div>

            <Link to={"/teachermainpage"} ><button type="submit" className="btn btn-primary">
                                Sign in
                            </button> </Link>

                            </div>
          </form>
          <p>
            <a href="/teacherregister">If not registered,please Signup</a>
          </p>
        </div>
      </div>
   



        </div>
    );
}
 
export default Teachersignin;
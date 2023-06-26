import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { Navigate } from 'react-router-dom';
import { useNavigate } from "react-router-dom";


const ParentSignin = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        parentsname: '',
        password: ''
    });


   // eslint-disable-next-line
const [authenticated, setauthenticated] = useState(localStorage.getItem(localStorage.getItem("authenticated") || false));
  
    const users = [{ parentsname: "Jane", password: "testpassword" }];
    const account = users.find((user) => user.parentsname === formData.parentsname);


    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
      
        if (account && account.password === formData.password) {
          setauthenticated(true);
          localStorage.setItem("authenticated", true);
          navigate("/parentmainpage");
        }
        console.log(formData);

        if (!authenticated) {
            return <Navigate replace to="/login" />;
          } else {
            return (
              <div>
                <p>Welcome to your Dashboard</p>
              </div>
            );
          }
      };
      
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
                            <label>Parent's Name:</label>
                            <input
                                type="text"
                                name="parentsname"
                                className="form-control border border-dark rounded"
                                placeholder=" enter username"
                                required
                                value={formData.parentsname}
                                onChange={handleChange}
                            />
                        </div>
                        <div className="form-group">
                            <label>Password: </label>
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
                            <label> Confirm Password:</label>
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
                        <Link to={"/parent/parentMainPage"} ><button type="submit" className="btn btn-primary">
                                Sign in
                            </button> </Link>
                        </div>
                    </form>

                    <p>
                        <a href="/parent/parentRegister">If not registered,please Signup</a>
                    </p>
                </div>
            </div>
        </div>
    );
};


export default ParentSignin;
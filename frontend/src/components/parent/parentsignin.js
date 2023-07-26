import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import {AuthContext} from "./context"
const ParentSignin = () => {
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem("authenticated") || false
  );
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const [error, setError] = useState(null);

  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();
  // const handleChange = (event) => {
  //   const { name, value } = event.target;
  //   setFormData((prevData) => ({
  //     ...prevData,
  //     [name]: value
  //   }));
  // };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setShowError(false);
      const response = await axios.post(
        "http://localhost:5000/api/parent/signin",
        {
          password,
          email,
        }
      );
      const json = response.data;
      localStorage.setItem("currentUser", JSON.stringify(json));
      const user = json.user;
      // dispatch({ type: "LOGIN", payload: json });
      // setIsLoading(false);
      console.log("login success");
      navigate("/parent/parentmainpage");
    } catch (error) {
      setError(error.response.data.error);
      
      setShowError(true);
      console.log(error.response.data.error);
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
              <label>Email:</label>
              <input
                type="text"
                name="email"
                className="form-control border border-dark rounded"
                placeholder="Enter email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                
              />
            </div>
            <div className="form-group">
              <label>Password: </label>
              <input
                type="password"
                name="password"
                className="form-control border border-dark rounded"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => [setPassword(e.target.value)]}
              />
            </div>

            <div>
              <button type="submit" className="btn btn-primary">
                Sign in
              </button>
            </div>
          </form>
          {error && <div className="alert alert-danger">{error}</div>}
          <p>
            <a href="/parent/parentregister">If not registered,please Signup</a>
          </p>
        </div>
      </div>
      {showError && <p className="error">{error}</p>}
    </div>
  );
};
export default ParentSignin;

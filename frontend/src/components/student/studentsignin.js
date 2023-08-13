import React, { useState } from "react";
import "../../index.css";
import axios from "axios";
import { useNavigate } from "react-router-dom";
// import { AuthContext } from "./context";

const Studentsignin = () => {
  const [authenticated, setAuthenticated] = useState(
    localStorage.getItem("authenticated") || false
  );
  const [studentNo, setStudentNo] = useState("");

  const [password, setPassword] = useState("");

  const [error, setError] = useState(false);
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
        "http://localhost:5000/api/student/signin",
        {
          password,
          studentNo,
        }
      );
      const json = response.data;
      localStorage.setItem("currentUser", JSON.stringify(json));
      const user = json.user;
      // dispatch({ type: "LOGIN", payload: json });
      // setIsLoading(false);
      console.log("login success");
      navigate("/student/studentmainpage");
   
  } catch (error) {
    if (error.response && error.response.data && error.response.data.error) {
      setError(error.response.data.error);
      setShowError(true);
      console.log(error.response.data.error);
    } else {
      setError("wrong credentials.");
      setShowError(true);
      console.log("An error occurred during sign-in.", error);
    }
  };
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
              <label>StudentNo:</label>
              <input
                type="text"
                name="studentNo"
                className="form-control border border-dark rounded"
                placeholder=" enter studentNo"
                required
                value={studentNo}
                onChange={(e) => setStudentNo(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>Password:</label>
              <input
                type="password"
                name="password"
                className="form-control border border-dark rounded"
                placeholder="Password"
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
          <p>
            <a href="/student/studentregister">
              If not registered,please Signup
            </a>
          </p>
        </div>
      </div>
      {showError && <p className="error">{error}</p>}
    </div>
  );
};


export default Studentsignin;

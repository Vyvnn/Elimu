import React, { useState } from "react";

// import { AuthContext } from "./context";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Teachersignin = () => {
  const [TSc_No, setTSc_No] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [showError, setShowError] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setShowError(false);
      const response = await axios.post(
        "http://localhost:5000/api/teacher/signin",
        {
          password,
          TSc_No,
        }
      );
      const json = response.data;
      localStorage.setItem("currentUser", JSON.stringify(json));
      const user = json.user;
      // dispatch({ type: "LOGIN", payload: json });
      // setIsLoading(false);
      console.log("login success");
      navigate("/teacher/teacherMainPage");

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
              <label>TSCNO</label>
              <input
                type="text"
                name="username"
                className="form-control border border-dark rounded"
                placeholder=" enter your TSC NO"
                required
                value={TSc_No}
                onChange={(e) =>{
                  setShowError(false)
                setTSc_No(e.target.value)} }
               
              />
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                name="password"
                className="form-control border border-dark rounded"
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
          <a href="/teacher/teacherregister">If not registered,please Signup</a>
          </p>
        </div>
      </div>
      {showError && <p className="error">{error}</p>}
      </div>
  );
};


export default Teachersignin;

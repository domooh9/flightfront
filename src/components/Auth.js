import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import "./App.css";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

function Login() {
  const [emaillog, setEmaillog] = useState("");
  const [passwordlog, setPasswordlog] = useState("");
  const [flag, setFlag] = useState(false);
  const history = useNavigate();

  function handleLogin(e) {
    e.preventDefault();

    // Send a POST request to the server to check if the user exists in the database
    axios.post("http://localhost:3001/signin", {
      email: emaillog,
      password: passwordlog,
    })
    .then(response => {
      const user = response.data;
      // If the user exists in the database, redirect to the home page
      history("/home");
      setFlag(false);
    })
    .catch(error => {
      console.error(error);
      // If the user does not exist in the database, set the flag to display an error message
      setFlag(true);
    });
  }

  return (
    <>
      <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleLogin}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">LogIn</h3>
            <div className="form-group mt-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control mt-1"
                placeholder="Enter email"
                onChange={(event) => setEmaillog(event.target.value)}
              />
            </div>

            <div className="form-group mt-3">
              <label>Password</label>
              <input
                type="password"
                className="form-control mt-1"
                placeholder="Enter password"
                onChange={(event) => setPasswordlog(event.target.value)}
              />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
              <div>
                <Link to="/auth" id='tt' className="btn btn-primary">
                  SignUp
                </Link>
              </div>
            </div>
            {flag && (
              <Alert color="primary" variant="warning">
                Invalid email or password.
              </Alert>
            )}
            <div>
              <Link to="/forgot-password" className="link-primary">
                Forgot password?
              </Link>
            </div>
            <div>
              <Link to="/admin" className="link-primary">
                Admin Login
              </Link>
            </div>
          </div>
        </form>
      </div>
    </>
  );
}

export default Login;
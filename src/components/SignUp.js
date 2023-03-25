import React, { useState } from "react";
import { Form, Alert } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./App.css";

function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [flag, setFlag] = useState(false);
  const [message, setMessage] = useState("");
  const [login, setLogin] = useState(true);

  const history = useNavigate();

  function handleFormSubmit(e) {
    e.preventDefault();

    if (!name || !email || !password || !phone) {
      setFlag(true);
      setMessage("Please fill in all the fields.");
    } else {
      axios
        .post("http://localhost:3001/signup", {
          name,
          email,
          password,
          phone,
        })
        .then((response) => {
          console.log(response);
          setFlag(false);
          setMessage("Signup successful!");
          history("/signin");
        })
        .catch((error) => {
          console.log(error);
          setFlag(true);
          setMessage("Signup failed!");
        });
    }
  }



  return (
    <>
      <div className="Auth-form-container">
        {login ? (
          <form className="Auth-form" onSubmit={handleFormSubmit}>
            <div className="Auth-form-content">
              <h3 className="Auth-form-title">SignUp</h3>
              <div className="form-group">
                <label>Name</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Full Name"
                  name="name"
                  onChange={(event) => setName(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Email</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  onChange={(event) => setEmail(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  onChange={(event) => setPassword(event.target.value)}
                />
              </div>

              <div className="form-group">
                <label>Phone No.</label>
                <input
                  type="Phone"
                  className="form-control"
                  placeholder="Enter contact no"
                  onChange={(event) => setPhone(event.target.value)}
                />
              </div>

              <div className="d-grid gap-2 mt-3">
                <button type="submit" className="btn btn-primary">
                  Sign Up
                </button>
              </div>

              <div className="Auth-form-bottom-text">
             
                <span ></span>
              </div>
            </div>
          </form>
        ) : (
          <div>Redirecting to Sign In page...</div>
        )}
      </div>

      {flag && (
        <Alert className="mt-3" variant="danger">
          {message}
        </Alert>
      )}
    </>
  );
}

export default SignUp;
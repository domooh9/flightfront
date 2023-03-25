import React, { useState } from "react";
import { Alert } from "react-bootstrap";
import "./App.css";

function ChangePassword() {
 


  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [flag, setFlag] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    fetch("http://localhost:3001/forgot-password", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ name, email, password })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error("Failed to reset password");
        }
        setFlag(false);
        alert("Password reset successful.");
      })
      .catch(error => {
        console.error(error);
        setFlag(true);
      });
  }

  return (
    <div className="Auth-form-container">
      <form className="Auth-form" onSubmit={handleSubmit}>
        <h3 className="Auth-form-title">Reset Password</h3>
        <div className="form-group mt-3">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            className="form-control mt-1"
            id="name"
            name="name"
            placeholder="Enter your name"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control mt-1"
            id="email"
            name="email"
            placeholder="Enter your email address"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>
        <div className="form-group mt-3">
          <label htmlFor="password">New Password</label>
          <input
            type="password"
            className="form-control mt-1"
            id="password"
            name="password"
            placeholder="Enter your new password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>
        <div className="d-grid gap-2 mt-3">
          <button type="submit" className="btn btn-primary">
            Reset Password
          </button>
        </div>
        {flag && (
          <Alert color="primary" variant="warning">
            Failed to reset password.
          </Alert>
        )}
      </form>
    </div>
  );
}


export default ChangePassword;
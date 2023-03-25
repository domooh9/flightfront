import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const history = useNavigate();

  useEffect(() => {
    // Check if the user is already logged in
    const isLoggedIn = localStorage.getItem('isAdminLoggedIn') === 'true';
    setIsAdminLoggedIn(isLoggedIn);
  }, []);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = (event) => {
    event.preventDefault();
    if (username === 'John Doe' && password === '12345') {
      setIsAdminLoggedIn(true);
      // Set the login status in local storage
      localStorage.setItem('isAdminLoggedIn', true);
      // Navigate to the Admindash component
      history('/dash');
    } else {
      alert('Invalid username or password');
    }
  };

 

  return (
    <div className="Auth-form-container">
      
        
        <form className="Auth-form" onSubmit={handleLogin}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Admin</h3>
            <div className="form-group mt-3">
              <label>Username</label>
              <input className="form-control mt-1" type="text" value={username} onChange={handleUsernameChange} />
            </div>
            <div className="form-group mt-3">
              <label>Password</label>
              <input className="form-control mt-1" type="password" value={password} onChange={handlePasswordChange} />
            </div>
            <div className="d-grid gap-2 mt-3">
              <button className="btn btn-primary" type="submit">
                Login
              </button>
            </div>
          </div>
        </form>
      
    </div>
  );
};

export default AdminLogin;
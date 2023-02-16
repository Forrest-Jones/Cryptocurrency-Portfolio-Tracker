import React, { useState, useEffect } from 'react';
import './Login.css';
import {Routes,useNavigate,  Link, } from 'react-router-dom';
function Login({ onLogin }) {
  const API = 'http://localhost:4000/Logins';
  const [Email, setEmail] = useState('');
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [login, setLogin] = useState([]);
  const [click,setClick] = useState(false);
  const onClick = () => setClick(!click);

  function handleLogin() {
    setLogin(!login)
}

  // Perform a GET request to retrieve all logins from the JSON server
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setLogin(data));
  }, []);

  function handleSubmit(event) {
    event.preventDefault();
    fetch(API, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ Email: Email, Username: Username, Password: Password }),
    })
      .then((res) => res.json())
      .then((loginData) => onLogin(loginData));
    setEmail('');
    setUsername('');
    setPassword('');
  }
  fetch('http://localhost:4000/Logins')
  .then(response => response.json())
  .then(data => {
    const emails = data.map(login => login.Email);
    console.log(emails);
    // code to store emails in file
  })
  .catch(error => console.error(error));
   

  return (
    
    <div className="login-container">
       <button className="login-button" onClick={onClick}>Sign Up</button>
        
      
    
    {click && (   
      
    <form onSubmit={handleSubmit}>
      <h1>Sign Up</h1> 
        <label>
          <p>Email</p>
          <input type="text" name="Email" placeholder="Enter your Email" value={Email} onChange={(event) => setEmail(event.target.value)} />
        </label>
        <label>
          <p>Username</p>
          <input type="text" name="Username" placeholder="Create a Username" value={Username} onChange={(event) => setUsername(event.target.value)} />
        </label>
        <label>
          <p>Password</p>
          <input type="password" name="Password" placeholder="Create a password" value={Password} onChange={(event) => setPassword(event.target.value)} />
        </label>
        <div>
          <button type="submit">Create </button>
        </div>
      </form>
        )}
   
        
      
    </div>
  )
}


export default Login;

import React, { useState, useEffect } from 'react';
import './Login.css';

function Login({ onLogin }) {
  const API = 'http://localhost:4000/Logins';
  const [Email, setEmail] = useState('');
  const [Username, setUsername] = useState('');
  const [Password, setPassword] = useState('');
  const [logins, setLogins] = useState([]);

  // Perform a GET request to retrieve all logins from the JSON server
  useEffect(() => {
    fetch(API)
      .then((response) => response.json())
      .then((data) => setLogins(data));
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
  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
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
          <button type="submit">Submit</button>
        </div>
      </form>
      <div>
        <h2>All Logins</h2>
        <ul>
          {logins.map((login) => (
            <li key={login.id}>
              <span style={{ display: 'none' }}>{login.Email} - {login.Username} - {login.Password}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );

  fetch('http://localhost:4000/Logins')
  .then(response => response.json())
  .then(data => {
    const emails = data.map(login => login.Email);
    console.log(emails);
    // code to store emails in file
  })
  .catch(error => console.error(error));
}

export default Login;

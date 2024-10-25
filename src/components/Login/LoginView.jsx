import React, { useState } from 'react';

function LoginView({ onLoggedIn }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    fetch("https://my-flix-app-7899.onrender.com/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ Username: username, Password: password })
    })
    .then(response => response.json())
    .then(data => {
      if (data.token) {
        localStorage.setItem('token', data.token);
        onLoggedIn(data.token); // To set logged-in state
      }
    });
  };

  return (
    <div>
      <input type="text" onChange={(e) => setUsername(e.target.value)} placeholder="Username" />
      <input type="password" onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
      <button onClick={handleLogin}>Log In</button>
    </div>
  );
}

export default LoginView;

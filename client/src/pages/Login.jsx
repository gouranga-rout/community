// src/pages/Login.jsx

import React, { useState } from 'react';
import { useReferralContext } from '../contexts/ReferralContext';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { login } = useReferralContext(); // Accessing login function from context
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Replace with your backend login API endpoint
      const { data } = await axios.post('https://community-fc8g.onrender.com/api/auth/login', { email, password });
      login(data); // Set the user data in context
      navigate('/dashboard'); // Redirect to Dashboard
    } catch (error) {
      console.error('Error during login', error);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;

import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div className="login__background">
      <div className="login__box">
        <label htmlFor="">Email</label>
        <br />
        <input type="text" className="input" onChange={e => setEmail(e.target.value)} />
        <br />
        <label htmlFor="">Password</label>
        <br />
        <input type="password" name="" id="" className="input" onChange={e => setPassword(e.target.value)} />
        <br />
        <div className="fc-row">
          <button className="btn-primary">Login</button>
        </div>
        <div className="fc-col">
          <p>Already have an account? </p>
          <Link to="/register">Register here</Link>
        </div>
      </div>
    </div>
  );
};

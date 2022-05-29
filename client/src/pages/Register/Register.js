import React from 'react';
import { Link } from 'react-router-dom';

export const Register = () => {
  return (
    <div className="login__background">
      <div className="login__box">
        <label htmlFor="">Email</label>
        <br />
        <input type="text" className="input" />
        <br />
        <label htmlFor="">Password</label>
        <br />
        <input type="password" name="" id="" className="input" />
        <br />
        <div className="fc-row">
          <button className="btn-primary">Login</button>
        </div>
        <div className="fc-col">
          <p>Already have an account? </p>
          <Link to="/">Login here</Link>
        </div>
      </div>
    </div>
  );
};

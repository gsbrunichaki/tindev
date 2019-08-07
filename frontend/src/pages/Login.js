import React from 'react';
import logo from '../assets/logo.svg';

import './Login.css';

export default function pages() {
  return (
    <div className="login-container">
      <form>
        <img src={logo} alt="Tindev" />
        <input placeholder="Seu usuário do github" />
        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
}

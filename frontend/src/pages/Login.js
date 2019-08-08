import React, { useState } from 'react';

import api from '../services/api';
import logo from '../assets/logo.svg';
import './Login.css';

export default function Login(props) {
  const [username, setUsername] = useState('');

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await api.post('/devs', {
      username,
    });

    const { _id } = response.data;

    props.history.push(`/dev/${_id}`);
  }

  return (
    <div className="login-container">
      <form onSubmit={handleSubmit} >
        <img src={logo} width={160} alt="Tindev" />
        <input
          placeholder="Seu usuário do github"
          value={username}
          onChange={event => setUsername(event.target.value)}
        />
        <p>Não possui uma conta no GitHub? <a href="https://github.com/join">Cadastre-se</a>.</p>
        <button type="submit">ENTRAR</button>
      </form>
    </div>
  );
}

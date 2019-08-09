import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import api from '../services/api';
import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';

import './Main.css';

export default function Main({ match }) {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function loadUsers() {
      const response = await api.get('/devs', {
        headers: {
          user: match.params.id,
        }
      });

      setUsers(response.data);
    }

    loadUsers();
  }, [match.params.id]);

  async function handleLike(targetId) {
    await api.post(`/devs/${targetId}/likes`, null, {
      headers: {
        user: match.params.id,
      }
    });

    setUsers(users.filter(user => user._id !== targetId));
  };

  async function handleDislike(targetId) {
    await api.post(`/devs/${targetId}/dislikes`, null, {
      headers: {
        user: match.params.id,
      }
    });

    setUsers(users.filter(user => user._id !== targetId));
  }

  return (
    <div className="main-container">
      <Link to="/">
        <img src={logo} alt="Tindev" />
      </Link>
      <div className="devs">
        {
          users.length > 0 ? users.map(user => (
            <div className="dev-card" key={user._id}>
              <img className="dev-card-avatar" src={user.avatar} alt={user.name || user.user} />
              <div className="dev-card-content">
                <strong className="dev-card-name">{user.name || user.user}</strong>
                <span className="dev-card-username">/{user.user}</span>
                <p className="dev-card-bio">{user.bio}</p>
              </div>
              <div className="dev-card-actions">
                <button type="button" onClick={() => handleDislike(user._id)}>
                  <img src={dislike} alt="Disike" />
                </button>
                <button type="button" onClick={() => handleLike(user._id)}>
                  <img src={like} alt="Like" />
                </button>
              </div>
            </div>
          )) : <div className="empty">Deu por hoje!</div>
        }
      </div>
    </div>
  );
}

import React from 'react';

import logo from '../assets/logo.svg';
import like from '../assets/like.svg';
import dislike from '../assets/dislike.svg';

import './Main.css';

export default function Main({ match }) {
  return (
    <div className="main-container">
      <p>{match.params.id}</p>
      <img src={logo} alt="Tindev" />
      <div className="devs">
        <div className="dev-card">
          <img src="https://avatars0.githubusercontent.com/u/28872143?v=4" alt="Gabriel Weich" className="dev-card-avatar" />
          <span className="dev-card-name">Gabriel Weich</span>
          <span className="dev-card-username">gabrielweich</span>
          <p className="dev-card-bio">Software Engineering student</p>
          <div className="dev-card-actions">
            <button type="button">
              <img src={like} alt="Like" />
              <img src={dislike} alt="Disike" />
            </button>
          </div>
        </div>
        <div className="dev-card">
          <img src="https://avatars0.githubusercontent.com/u/28872143?v=4" alt="Gabriel Weich" className="dev-card-avatar" />
          <span className="dev-card-name">Gabriel Weich</span>
          <span className="dev-card-username">gabrielweich</span>
          <p className="dev-card-bio">Software Engineering student sddsds fdsf dsfdsfdfdf sdf df sdfsfsd fsdf sfdfsd sdf sdf sdfs sfddfdfs.</p>
          <div className="dev-card-actions">
            <button type="button">
              <img src={like} alt="Like" />
              <img src={dislike} alt="Disike" />
            </button>
          </div>
        </div>
        <div className="dev-card">
          <img src="https://avatars0.githubusercontent.com/u/28872143?v=4" alt="Gabriel Weich" className="dev-card-avatar" />
          <span className="dev-card-name">Gabriel Weich</span>
          <span className="dev-card-username">gabrielweich</span>
          <p className="dev-card-bio">Software Engineering student</p>
          <div className="dev-card-actions">
            <button type="button">
              <img src={like} alt="Like" />
              <img src={dislike} alt="Disike" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

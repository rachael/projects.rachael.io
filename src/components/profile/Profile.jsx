import React from 'react';
import profileImageSm from './images/profile_sm.png';
import profileImageLg from './images/profile_lg.png';
import './Profile.scss';

function Profile() {
  return (
    <div className="Profile">
      <div className="Profile-text">
        <header className="Profile-header">
          Rachael Passov :: Portfolio
        </header>
        <main>
          <p>
            This will eventually hold notable projects and ideas from the brain of Rachael Passov.
          </p>
          <p>
            For now, there is nothing here.
          </p>
          <p>
            <a
              className="Profile-link"
              href="https://github.com/rachael"
              target="_blank"
              rel="noopener noreferrer"
            >
              @rachael at Github
            </a>
          </p>
        </main>
      </div>
      <img src={profileImageSm} className="Profile-image" alt="profile image" />
    </div>
  );
}

export default Profile;

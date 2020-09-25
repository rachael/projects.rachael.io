import React, { useEffect, useState } from 'react';
import profileImageSm from './images/profile_sm.png';
import profileImageLg from './images/profile_lg.png';
import './Profile.scss';

function Profile() {
  const [profileImageSrc, setProfileImageSrc] = useState(profileImageSm);

  useEffect(() => {
    const mql = window.matchMedia('(max-height: 711px)');
    const screenTest = (e) => {
      if(e.matches) setProfileImageSrc(profileImageSm);
      else setProfileImageSrc(profileImageLg);
    };
    mql.addListener(screenTest);
    screenTest(mql);
    return mql.removeListener(screenTest);
  });

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
      <img src={profileImageSrc} className="Profile-image" alt="profile" />
    </div>
  );
}

export default Profile;

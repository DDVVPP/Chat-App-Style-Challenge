import React from 'react';

import home from '../assets/icons/home.png';
import inbox from '../assets/icons/inbox.png';
import notifications from '../assets/icons/notifications.png';
import options from '../assets/icons/options.png';
import sendGrey from '../assets/icons/sendGrey.png';
import settings from '../assets/icons/settings.png';
import users from '../assets/icons/users.png';
import currentUser from '../assets/users/MainUser.png';

const NavigationPanel = () => {
  return (
    <div>
      <p>NavigationPanel</p>
      <button type="button" style={{ borderWidth: 0 }}>
        <img src={currentUser} alt="current user" />
      </button>
      <button type="button" style={{ borderWidth: 0 }}>
        <img src={home} alt="home" />
      </button>
      <button type="button" style={{ borderWidth: 0 }}>
        <img src={sendGrey} alt="sendGrey" />
      </button>
      <button type="button" style={{ borderWidth: 0 }}>
        <img src={inbox} alt="inbox" />
      </button>
      <button type="button" style={{ borderWidth: 0 }}>
        <img src={users} alt="users" />
      </button>
      <button type="button" style={{ borderWidth: 0 }}>
        <img src={notifications} alt="notifications" />
      </button>
      <button type="button" style={{ borderWidth: 0 }}>
        <img src={options} alt="options" />
      </button>
      <button type="button" style={{ borderWidth: 0 }}>
        <img src={settings} alt="settings" />
      </button>
    </div>
  );
};

export default NavigationPanel;

import React, { useState } from 'react';
import { RiSettingsLine } from 'react-icons/ri';

const SettingsPage = () => {
  const [darkMode, setDarkMode] = useState(true);
  const [notifications, setNotifications] = useState(true);
  const [language, setLanguage] = useState('English');

  return (
    <div style={{ padding: '40px' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        marginBottom: '30px'
      }}>
        <RiSettingsLine size={28} color="#00ff88" />
        <h1 style={{
          color: '#00ff88',
          fontSize: '28px',
          fontWeight: '700',
          margin: 0,
          textShadow: '0 0 10px rgba(0, 255, 136, 0.3)'
        }}>
          Account Settings
        </h1>
      </div>

      <div style={{
        backgroundColor: '#121212',
        padding: '30px',
        borderRadius: '16px',
        border: '1px solid rgba(0, 255, 136, 0.1)',
        boxShadow: '0 0 12px rgba(0,255,136,0.1)',
        color: '#ccc'
      }}>
        {/* Dark Mode */}
        <div style={{ marginBottom: '25px' }}>
          <label style={{ color: '#00ff88', fontWeight: '600' }}>Theme</label>
          <div style={{ marginTop: '8px' }}>
            <label style={{ marginRight: '20px' }}>
              <input
                type="checkbox"
                checked={darkMode}
                onChange={() => setDarkMode(!darkMode)}
              /> Enable Dark Mode
            </label>
          </div>
        </div>

        {/* Notifications */}
        <div style={{ marginBottom: '25px' }}>
          <label style={{ color: '#00ff88', fontWeight: '600' }}>Notifications</label>
          <div style={{ marginTop: '8px' }}>
            <label>
              <input
                type="checkbox"
                checked={notifications}
                onChange={() => setNotifications(!notifications)}
              /> Receive email and in-app alerts
            </label>
          </div>
        </div>

        {/* Language */}
        <div>
          <label style={{ color: '#00ff88', fontWeight: '600' }}>Preferred Language</label>
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            style={{
              display: 'block',
              marginTop: '10px',
              padding: '8px',
              borderRadius: '6px',
              backgroundColor: '#1c1c1c',
              border: '1px solid #00ff88',
              color: '#fff'
            }}
          >
            <option>English</option>
            <option>Telugu</option>
            <option>Hindi</option>
            <option>Tamil</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default SettingsPage;

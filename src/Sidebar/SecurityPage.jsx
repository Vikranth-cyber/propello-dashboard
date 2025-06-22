import React, { useState } from 'react';
import { RiLockLine } from 'react-icons/ri';

const SecurityPage = () => {
  const [formData, setFormData] = useState({
    currentPassword: '',
    newUsername: '',
    newPassword: ''
  });

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.currentPassword === 'user_current_pass') {
      setMessage('✅ Username and password updated successfully.');
      setFormData({ currentPassword: '', newUsername: '', newPassword: '' });
    } else {
      setMessage('❌ Current password is incorrect.');
    }
  };

  return (
    <div style={{ padding: '40px' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        marginBottom: '30px'
      }}>
        <RiLockLine size={28} color="#00ff88" />
        <h1 style={{
          color: '#00ff88',
          fontSize: '28px',
          fontWeight: '700',
          margin: 0,
          textShadow: '0 0 10px rgba(0, 255, 136, 0.3)'
        }}>
          Account Security
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
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '20px' }}>
            <label style={{ color: '#00ff88', fontWeight: '600' }}>Current Password</label><br />
            <input
              type="password"
              name="currentPassword"
              value={formData.currentPassword}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '10px',
                marginTop: '6px',
                borderRadius: '6px',
                border: '1px solid #00ff88',
                backgroundColor: '#1c1c1c',
                color: '#fff'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ color: '#00ff88', fontWeight: '600' }}>New Username</label><br />
            <input
              type="text"
              name="newUsername"
              value={formData.newUsername}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '10px',
                marginTop: '6px',
                borderRadius: '6px',
                border: '1px solid #00ff88',
                backgroundColor: '#1c1c1c',
                color: '#fff'
              }}
            />
          </div>

          <div style={{ marginBottom: '20px' }}>
            <label style={{ color: '#00ff88', fontWeight: '600' }}>New Password</label><br />
            <input
              type="password"
              name="newPassword"
              value={formData.newPassword}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '10px',
                marginTop: '6px',
                borderRadius: '6px',
                border: '1px solid #00ff88',
                backgroundColor: '#1c1c1c',
                color: '#fff'
              }}
            />
          </div>

          <button
            type="submit"
            style={{
              backgroundColor: '#00ff88',
              color: '#000',
              fontWeight: '600',
              padding: '10px 20px',
              borderRadius: '6px',
              border: 'none',
              cursor: 'pointer'
            }}
          >
            Update Credentials
          </button>
        </form>

        {message && <p style={{ marginTop: '20px', color: '#00ff88' }}>{message}</p>}
      </div>
    </div>
  );
};

export default SecurityPage;

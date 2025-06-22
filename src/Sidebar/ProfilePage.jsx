import React, { useState } from 'react';
import { RiUserLine } from 'react-icons/ri';

const ProfilePage = () => {
  const [profile, setProfile] = useState({
    name: 'Vikranth D',
    email: 'vikranth@example.com',
    phone: '9876543210'
  });

  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleEditToggle = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
    alert('Profile updated successfully!');
  };

  return (
    <div style={{ padding: '40px' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        marginBottom: '30px'
      }}>
        <RiUserLine size={28} color="#00ff88" />
        <h1 style={{
          color: '#00ff88',
          fontSize: '28px',
          fontWeight: '700',
          margin: 0,
          textShadow: '0 0 10px rgba(0, 255, 136, 0.3)'
        }}>
          User Profile
        </h1>
      </div>

      <div style={{
        backgroundColor: '#121212',
        padding: '30px',
        borderRadius: '16px',
        border: '1px solid rgba(0, 255, 136, 0.1)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
        color: '#ccc'
      }}>
        <div style={{ marginBottom: '20px' }}>
          <label style={{ color: '#00ff88', fontWeight: '600' }}>Full Name</label><br />
          <input
            name="name"
            type="text"
            value={profile.name}
            disabled={!isEditing}
            onChange={handleChange}
            style={{
              padding: '10px',
              marginTop: '6px',
              width: '100%',
              borderRadius: '6px',
              border: '1px solid #00ff88',
              backgroundColor: isEditing ? '#1c1c1c' : '#121212',
              color: '#fff'
            }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ color: '#00ff88', fontWeight: '600' }}>Email</label><br />
          <input
            name="email"
            type="email"
            value={profile.email}
            disabled={!isEditing}
            onChange={handleChange}
            style={{
              padding: '10px',
              marginTop: '6px',
              width: '100%',
              borderRadius: '6px',
              border: '1px solid #00ff88',
              backgroundColor: isEditing ? '#1c1c1c' : '#121212',
              color: '#fff'
            }}
          />
        </div>

        <div style={{ marginBottom: '20px' }}>
          <label style={{ color: '#00ff88', fontWeight: '600' }}>Phone Number</label><br />
          <input
            name="phone"
            type="tel"
            value={profile.phone}
            disabled={!isEditing}
            onChange={handleChange}
            style={{
              padding: '10px',
              marginTop: '6px',
              width: '100%',
              borderRadius: '6px',
              border: '1px solid #00ff88',
              backgroundColor: isEditing ? '#1c1c1c' : '#121212',
              color: '#fff'
            }}
          />
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button
            onClick={isEditing ? handleSave : handleEditToggle}
            style={{
              backgroundColor: '#00ff88',
              color: '#000',
              border: 'none',
              padding: '10px 20px',
              borderRadius: '6px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            {isEditing ? 'Save Changes' : 'Edit Profile'}
          </button>
          {isEditing && (
            <button
              onClick={() => setIsEditing(false)}
              style={{
                backgroundColor: '#222',
                color: '#ccc',
                border: '1px solid #444',
                padding: '10px 20px',
                borderRadius: '6px',
                fontWeight: '500',
                cursor: 'pointer'
              }}
            >
              Cancel
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;

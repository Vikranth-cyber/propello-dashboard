import React, { useState, useEffect } from 'react';
import { FiLogIn, FiBell, FiHelpCircle } from 'react-icons/fi';
import { createPortal } from 'react-dom';

const Header = ({ onLoginClick }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const [dropdownPosition, setDropdownPosition] = useState({ top: 0, left: 0 });

  const toggleDropdown = (type, e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setDropdownPosition({ top: rect.bottom + 8, left: rect.left });
    if (type === 'notifications') {
      setShowHelp(false);
      setShowNotifications(!showNotifications);
    } else {
      setShowNotifications(false);
      setShowHelp(!showHelp);
    }
    setAnchorEl(e.currentTarget);
  };

  useEffect(() => {
    const close = () => {
      setShowNotifications(false);
      setShowHelp(false);
    };
    window.addEventListener('click', close);
    return () => window.removeEventListener('click', close);
  }, []);

  const DropdownCard = ({ children }) =>
    createPortal(
      <div style={{
        position: 'fixed',
        top: dropdownPosition.top,
        left: dropdownPosition.left,
        width: '280px',
        backgroundColor: '#1f1f1f',
        padding: '15px',
        borderRadius: '10px',
        border: '1px solid #00ff88',
        color: '#ccc',
        zIndex: 9999,
        boxShadow: '0 8px 24px rgba(0,255,136,0.2)'
      }}>
        {children}
      </div>,
      document.body
    );

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      marginBottom: '40px',
      padding: '20px 30px',
      backgroundColor: 'rgba(10, 10, 15, 0.7)',
      borderRadius: '16px',
      border: '1px solid rgba(0, 255, 136, 0.1)',
      backdropFilter: 'blur(12px)',
      boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)',
      position: 'relative'
    }}>
      {/* Left Section */}
      <div>
        <h1 style={{
          fontSize: '24px',
          fontWeight: '700',
          margin: 0,
          color: '#00ff88',
          letterSpacing: '0.5px',
          textShadow: '0 0 10px rgba(0, 255, 136, 0.3)'
        }}>
          PROPELLO AI
        </h1>
        <p style={{
          color: 'rgba(0, 255, 136, 0.7)',
          fontSize: '13px',
          margin: '4px 0 0',
          fontWeight: '500',
          letterSpacing: '0.3px'
        }}>
          AI-powered analytics dashboard
        </p>
      </div>

      {/* Right Section */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
        {/* Help Button */}
        <div onClick={(e) => {
          e.stopPropagation();
          toggleDropdown('help', e);
        }} style={{ cursor: 'pointer' }}>
          <FiHelpCircle size={20} color="#00ff88" />
        </div>

        {/* Notification Bell */}
        <div onClick={(e) => {
          e.stopPropagation();
          toggleDropdown('notifications', e);
        }} style={{ position: 'relative', cursor: 'pointer' }}>
          <FiBell size={20} color="#00ff88" />
          <div style={{
            position: 'absolute',
            top: '-5px',
            right: '-5px',
            backgroundColor: '#FF5252',
            borderRadius: '50%',
            width: '16px',
            height: '16px',
            fontSize: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: '#fff'
          }}>3</div>
        </div>

        {/* Divider */}
        <div style={{
          height: '40px',
          width: '1px',
          backgroundColor: 'rgba(0, 255, 136, 0.2)',
          margin: '0 10px'
        }}></div>

        {/* Sign In Button */}
        <button
          onClick={onLoginClick}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 24px',
            background: 'linear-gradient(90deg, rgba(0, 255, 136, 0.1), rgba(0, 255, 136, 0.05))',
            color: '#00ff88',
            border: '1px solid rgba(0, 255, 136, 0.3)',
            borderRadius: '12px',
            fontWeight: '600',
            fontSize: '14px',
            cursor: 'pointer'
          }}
        >
          <FiLogIn size={18} />
          Sign In
        </button>
      </div>

      {/* Dropdowns Rendered via Portal */}
      {showHelp && (
        <DropdownCard>
          <strong style={{ color: '#00ff88' }}>What is Propello AI?</strong>
          <p style={{ fontSize: '13px', marginTop: '10px' }}>
            Propello AI is a smart voice caller bot platform designed to automate and analyze your call campaigns across industries.
          </p>
        </DropdownCard>
      )}

      {showNotifications && (
        <DropdownCard>
          <strong style={{ color: '#00ff88' }}>Notifications</strong>
          <ul style={{ fontSize: '13px', marginTop: '10px', paddingLeft: '16px' }}>
            <li>New lead from Real Estate</li>
            <li>Bot call scheduled for 2PM</li>
            <li>Subscription renewal tomorrow</li>
          </ul>
        </DropdownCard>
      )}
    </div>
  );
};

export default Header;

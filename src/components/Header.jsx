import React, { useState, useEffect } from 'react';
import { FiLogIn, FiBell, FiHelpCircle } from 'react-icons/fi';
import { createPortal } from 'react-dom';

const Header = ({ onLoginClick }) => {
  const [showNotifications, setShowNotifications] = useState(false);
  const [showHelp, setShowHelp] = useState(false);
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
        backgroundColor: '#fdfdfd',
        padding: '15px',
        borderRadius: '12px',
        border: '1px solid #8B5CF6',
        color: '#333',
        zIndex: 9999,
        boxShadow: '0 6px 20px rgba(139, 92, 246, 0.2)'
      }}>
        {children}
      </div>,
      document.body
    );

  return (
    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: '20px',
      padding: '20px 30px',
      backgroundColor: '#ffffff',
      borderRadius: '16px',
      border: '1px solid #E0E7FF',
      boxShadow: '0 4px 16px rgba(14, 165, 233, 0.1)',
      position: 'relative'
    }}>
      {/* Left Section */}
      <div>
        <h1 style={{
          fontSize: '24px',
          fontWeight: '700',
          margin: 0,
          color: '#0EA5E9' // Sky blue
        }}>
          PROPELLO AI
        </h1>
        <p style={{
          color: '#8B5CF6', // Violet
          fontSize: '13px',
          margin: '4px 0 0',
          fontWeight: '500'
        }}>
          AI-powered analytics dashboard
        </p>
      </div>

      {/* Right Section */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px',
        flexWrap: 'wrap'
      }}>
        {/* Help Button */}
        <div onClick={(e) => {
          e.stopPropagation();
          toggleDropdown('help', e);
        }} style={{ cursor: 'pointer' }}>
          <FiHelpCircle size={20} color="#D946EF" /> {/* Fuchsia */}
        </div>

        {/* Notification Bell */}
        <div onClick={(e) => {
          e.stopPropagation();
          toggleDropdown('notifications', e);
        }} style={{ position: 'relative', cursor: 'pointer' }}>
          <FiBell size={20} color="#06B6D4" /> {/* Cyan */}
          <div style={{
            position: 'absolute',
            top: '-5px',
            right: '-5px',
            backgroundColor: '#F43F5E', // Red for error
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
          backgroundColor: '#E5E7EB'
        }}></div>

        {/* Sign In Button */}
        <button
          onClick={onLoginClick}
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            padding: '12px 24px',
            background: '#0EA5E9',
            color: '#fff',
            border: 'none',
            borderRadius: '10px',
            fontWeight: '600',
            fontSize: '14px',
            cursor: 'pointer',
            transition: 'background 0.3s ease'
          }}
          onMouseOver={e => e.currentTarget.style.background = '#0284C7'}
          onMouseOut={e => e.currentTarget.style.background = '#0EA5E9'}
        >
          <FiLogIn size={18} />
          Sign In
        </button>
      </div>

      {/* Dropdowns Rendered via Portal */}
      {showHelp && (
        <DropdownCard>
          <strong style={{ color: '#8B5CF6' }}>What is Propello AI?</strong>
          <p style={{ fontSize: '13px', marginTop: '10px' }}>
            Propello AI is a smart voice caller bot platform designed to automate and analyze your call campaigns across industries.
          </p>
        </DropdownCard>
      )}

      {showNotifications && (
        <DropdownCard>
          <strong style={{ color: '#06B6D4' }}>Notifications</strong>
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

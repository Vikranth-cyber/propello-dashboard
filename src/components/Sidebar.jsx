import React, { useState, useEffect } from 'react';
import {
  RiDashboardLine,
  RiSettingsLine,
  RiUserLine,
  RiLockLine,
  RiWalletLine,
  RiMenu3Line,
  RiCloseLine
} from 'react-icons/ri';
import {
  MdOutlineAnalytics,
  MdOutlineSchedule,
  MdOutlineHelp,
  MdOutlineLibraryBooks,
  MdOutlineContactSupport
} from 'react-icons/md';
import { BsMic, BsFileText } from 'react-icons/bs';

// Import page components
import RecordingsPage from '../Sidebar/RecordingsPage';
import ScriptsPage from '../Sidebar/ScriptsPage';
import AnalyticsPage from '../Sidebar/AnalyticsPage';
import SchedulingPage from '../Sidebar/SchedulingPage';
import ProfilePage from '../Sidebar/ProfilePage';
import SecurityPage from '../Sidebar/SecurityPage';
import SettingsPage from '../Sidebar/SettingsPage';
import BillingPage from '../Sidebar/BillingPage';
import HelpCenterPage from '../Sidebar/HelpCenterPage';
import DocsPage from '../Sidebar/DocsPage';
import ContactPage from '../Sidebar/ContactPage';

const Sidebar = ({ onSelectPage }) => {
  const [activeItem, setActiveItem] = useState('Dashboard');
  const [hoveredItem, setHoveredItem] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 1024);
  const [sidebarOpen, setSidebarOpen] = useState(false); // default false

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 1024;
      setIsMobile(mobile);
      if (!mobile) setSidebarOpen(true);
      else setSidebarOpen(false); // important
    };

    handleResize(); // set on initial mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handlePageSelect = (name) => {
    setActiveItem(name);

    const pages = {
      'Dashboard': 'Dashboard',
      'Recordings': <RecordingsPage />,
      'Scripts': <ScriptsPage />,
      'Analytics': <AnalyticsPage />,
      'Scheduling': <SchedulingPage />,
      'Profile': <ProfilePage />,
      'Security': <SecurityPage />,
      'Settings': <SettingsPage />,
      'Billing': <BillingPage />,
      'Help Center': <HelpCenterPage />,
      'Docs': <DocsPage />,
      'Contact': <ContactPage />
    };

    onSelectPage(pages[name] || 'Dashboard');
    if (isMobile) setSidebarOpen(false);
  };

  const renderButton = (name, icon) => {
    const isActive = activeItem === name;
    const isHovered = hoveredItem === name;

    return (
      <button
        key={name}
        onClick={() => handlePageSelect(name)}
        onMouseEnter={() => setHoveredItem(name)}
        onMouseLeave={() => setHoveredItem(null)}
        style={{
          margin: '8px 0',
          padding: '14px 20px',
          borderRadius: '10px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          fontSize: '15px',
          fontWeight: '500',
          border: 'none',
          background: isActive ? 'rgba(0, 180, 255, 0.1)' : 'transparent',
          color: isActive ? '#007acc' : '#444',
          borderLeft: isActive ? '4px solid #007acc' : 'none',
          textAlign: 'left',
          width: '100%',
          transition: 'all 0.3s',
          transform: isHovered ? 'translateX(4px)' : 'none'
        }}
      >
        <span style={{ fontSize: '20px' }}>{icon}</span>
        <span>{name}</span>
      </button>
    );
  };

  return (
    <>
      {isMobile && (
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          style={{
            position: 'fixed',
            top: '24px',
            right: '24px',
            zIndex: 1000,
            background: '#007acc',
            border: 'none',
            borderRadius: '50%',
            width: '48px',
            height: '48px',
            padding: '12px',
            cursor: 'pointer',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(0, 122, 204, 0.3)',
            transition: 'all 0.3s ease'
          }}
          aria-label="Toggle menu"
        >
          {sidebarOpen ? (
            <RiCloseLine style={{ color: 'white', fontSize: '24px' }} />
          ) : (
            <RiMenu3Line style={{ color: 'white', fontSize: '24px' }} />
          )}
        </button>
      )}

      <div
        style={{
          position: isMobile ? 'fixed' : 'relative',
          zIndex: 900,
          transform: isMobile
            ? sidebarOpen
              ? 'translateX(0)'
              : 'translateX(-100%)'
            : 'none',
          transition: 'transform 0.4s ease',
          height: '100%',
          width: isMobile ? '280px' : '300px',
          backgroundColor: '#fff',
          boxShadow: isMobile
            ? '4px 0 30px rgba(0, 0, 0, 0.1)'
            : '2px 0 20px rgba(0, 0, 0, 0.05)',
          borderRight: isMobile ? 'none' : '1px solid rgba(0, 0, 0, 0.05)'
        }}
      >
        <aside
          style={{
            width: '100%',
            height: '100%',
            padding: '28px 20px',
            color: '#333',
            overflowY: 'auto'
          }}
        >
          <h1
            style={{
              color: '#007acc',
              fontSize: '24px',
              fontWeight: '700',
              marginBottom: '36px',
              paddingLeft: '12px',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
              <path d="M12 2L2 7L12 12L22 7L12 2Z" fill="#007acc" />
              <path d="M2 17L12 22L22 17" fill="#007acc" />
              <path d="M2 12L12 17L22 12" fill="#007acc" />
            </svg>
            PROPELLO AI
          </h1>

          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '28px' }}>
            {renderButton('Dashboard', <RiDashboardLine />)}
          </ul>

          <div style={{ margin: '16px 0', fontSize: '12px', fontWeight: '600', color: '#007acc' }}>Call Center</div>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '28px' }}>
            {renderButton('Recordings', <BsMic />)}
            {renderButton('Scripts', <BsFileText />)}
            {renderButton('Analytics', <MdOutlineAnalytics />)}
            {renderButton('Scheduling', <MdOutlineSchedule />)}
          </ul>

          <div style={{ margin: '16px 0', fontSize: '12px', fontWeight: '600', color: '#007acc' }}>Account</div>
          <ul style={{ listStyle: 'none', padding: 0, marginBottom: '28px' }}>
            {renderButton('Profile', <RiUserLine />)}
            {renderButton('Security', <RiLockLine />)}
            {renderButton('Settings', <RiSettingsLine />)}
            {renderButton('Billing', <RiWalletLine />)}
          </ul>

          <div style={{ margin: '16px 0', fontSize: '12px', fontWeight: '600', color: '#007acc' }}>Support</div>
          <ul style={{ listStyle: 'none', padding: 0 }}>
            {renderButton('Help Center', <MdOutlineHelp />)}
            {renderButton('Docs', <MdOutlineLibraryBooks />)}
            {renderButton('Contact', <MdOutlineContactSupport />)}
          </ul>
        </aside>
      </div>
    </>
  );
};

export default Sidebar;

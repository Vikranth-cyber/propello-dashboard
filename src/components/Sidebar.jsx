import React, { useState } from 'react';
import { FiHome, FiShoppingBag, FiPackage, FiBriefcase } from 'react-icons/fi';
import {
  RiDashboardLine,
  RiSettingsLine,
  RiUserLine,
  RiLockLine,
  RiWalletLine
} from 'react-icons/ri';
import {
  MdOutlineAnalytics,
  MdOutlineSchedule,
  MdOutlineHelp,
  MdOutlineLibraryBooks,
  MdOutlineContactSupport
} from 'react-icons/md';
import { BsMic, BsFileText } from 'react-icons/bs';

// Import all page components
import RealEstatePage from '../Sidebar/RealEstatePage';
import RetailPage from '../Sidebar/RetailPage';
import PharmaPage from '../Sidebar/PharmaPage';
import CommercialPage from '../Sidebar/CommercialPage';
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

  const handlePageSelect = (name) => {
    setActiveItem(name);

    if (name === 'Dashboard') {
      onSelectPage('Dashboard'); // Special case for Dashboard
    } else {
      switch (name) {
        case 'Real Estate':
          onSelectPage(<RealEstatePage />);
          break;
        case 'Retail':
          onSelectPage(<RetailPage />);
          break;
        case 'Pharma':
          onSelectPage(<PharmaPage />);
          break;
        case 'Commercial':
          onSelectPage(<CommercialPage />);
          break;
        case 'Recordings':
          onSelectPage(<RecordingsPage />);
          break;
        case 'Scripts':
          onSelectPage(<ScriptsPage />);
          break;
        case 'Analytics':
          onSelectPage(<AnalyticsPage />);
          break;
        case 'Scheduling':
          onSelectPage(<SchedulingPage />);
          break;
        case 'Profile':
          onSelectPage(<ProfilePage />);
          break;
        case 'Security':
          onSelectPage(<SecurityPage />);
          break;
        case 'Settings':
          onSelectPage(<SettingsPage />);
          break;
        case 'Billing':
          onSelectPage(<BillingPage />);
          break;
        case 'Help Center':
          onSelectPage(<HelpCenterPage />);
          break;
        case 'Docs':
          onSelectPage(<DocsPage />);
          break;
        case 'Contact':
          onSelectPage(<ContactPage />);
          break;
        default:
          onSelectPage('Dashboard');
      }
    }
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
          margin: '12px 0',
          padding: '14px 20px',
          borderRadius: '8px',
          cursor: 'pointer',
          display: 'flex',
          alignItems: 'center',
          gap: '16px',
          fontSize: '15px',
          fontWeight: '500',
          border: 'none',
          background: isActive ? 'rgba(0,255,136,0.1)' : 'transparent',
          color: isActive ? '#fff' : '#00ff88',
          borderLeft: isActive ? '3px solid #00ff88' : 'none',
          textAlign: 'left',
          width: '100%',
          textShadow: isActive ? '0 0 6px #00ff88' : 'none'
        }}
      >
        {icon}
        <span>{name}</span>
      </button>
    );
  };

  return (
    <aside
      style={{
        width: '280px',
        backgroundColor: '#0A0A0F',
        height: '100vh',
        padding: '40px 20px',
        color: '#B0B0B8',
        overflowY: 'auto',
        boxShadow: '10px 0 30px rgba(0,0,0,0.3)'
      }}
    >
      <h1
        style={{
          color: '#00ff88',
          fontSize: '24px',
          fontWeight: '700',
          marginBottom: '40px'
        }}
      >
        PROPELLO AI
      </h1>

      {/* Main Navigation */}
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {renderButton('Dashboard', <RiDashboardLine />)}
      </ul>

      <div
        style={{
          color: '#00ff88',
          margin: '32px 0 12px 20px',
          fontSize: '12px',
          fontWeight: '600'
        }}
      >
        Campaigns
      </div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {renderButton('Real Estate', <FiHome />)}
        {renderButton('Retail', <FiShoppingBag />)}
        {renderButton('Pharma', <FiPackage />)}
        {renderButton('Commercial', <FiBriefcase />)}
      </ul>

      <div
        style={{
          color: '#00ff88',
          margin: '32px 0 12px 20px',
          fontSize: '12px',
          fontWeight: '600'
        }}
      >
        Call Center
      </div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {renderButton('Recordings', <BsMic />)}
        {renderButton('Scripts', <BsFileText />)}
        {renderButton('Analytics', <MdOutlineAnalytics />)}
        {renderButton('Scheduling', <MdOutlineSchedule />)}
      </ul>

      <div
        style={{
          color: '#00ff88',
          margin: '32px 0 12px 20px',
          fontSize: '12px',
          fontWeight: '600'
        }}
      >
        Account
      </div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {renderButton('Profile', <RiUserLine />)}
        {renderButton('Security', <RiLockLine />)}
        {renderButton('Settings', <RiSettingsLine />)}
        {renderButton('Billing', <RiWalletLine />)}
      </ul>

      <div
        style={{
          color: '#00ff88',
          margin: '32px 0 12px 20px',
          fontSize: '12px',
          fontWeight: '600'
        }}
      >
        Support
      </div>
      <ul style={{ listStyle: 'none', padding: 0 }}>
        {renderButton('Help Center', <MdOutlineHelp />)}
        {renderButton('Docs', <MdOutlineLibraryBooks />)}
        {renderButton('Contact', <MdOutlineContactSupport />)}
      </ul>
    </aside>
  );
};

export default Sidebar;

import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import Sidebar from './components/Sidebar';
import Header from './components/Header';
import StatCards from './components/StatCards';
import CallsStats from './components/CallsStats';
import CallGraphs from './components/CallGraphs';
import SummaryTable from './components/SummaryTable';
import BotPerformance from './components/BotPerformance';
import Transactions from './components/Transactions';
import AuthModal from './components/AuthModal';
import './global.css';

function App() {
  const [showAuth, setShowAuth] = useState(false);
  const [currentPage, setCurrentPage] = useState('Dashboard'); // Tracks selected page name

  const appStyle = {
    display: 'flex',
    width: '100vw',
    height: '100vh',
    margin: 0,
    padding: 0,
    overflow: 'hidden',
    backgroundColor: '#0A0A0F',
    color: '#FFFFFF',
    boxSizing: 'border-box',
    fontFamily: "'Inter', sans-serif"
  };

  const contentStyle = {
    flex: 1,
    padding: '30px',
    overflowY: 'auto',
  };

  // This function will be passed to Sidebar
  const handlePageSelect = (pageNameOrComponent) => {
    setCurrentPage(pageNameOrComponent);
  };

  return (
    <div style={appStyle}>
      <Helmet>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </Helmet>

      <Sidebar onSelectPage={handlePageSelect} />

      <div style={contentStyle}>
        {currentPage === 'Dashboard' ? (
          <>
            <Header onLoginClick={() => setShowAuth(true)} />
            <StatCards />
            <CallsStats />
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: '1fr 1fr',
                gap: '30px',
                marginBottom: '30px'
              }}
            >
              <CallGraphs />
              <Transactions />
            </div>
            <SummaryTable />
            <BotPerformance />
          </>
        ) : (
          currentPage // render selected page component
        )}
      </div>

      {showAuth && <AuthModal onClose={() => setShowAuth(false)} />}
    </div>
  );
}

export default App;

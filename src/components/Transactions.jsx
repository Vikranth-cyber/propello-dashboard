import React from 'react';
import { FiDownload, FiEye } from 'react-icons/fi';

const transactionData = [
  { id: 1, title: 'Account Top-Up', date: 'Today, 10:45 AM', amount: '+$2,000.00', type: 'positive', icon: '💳' },
  { id: 2, title: 'Service Subscription', date: 'Today, 09:30 AM', amount: '-$500.00', type: 'negative', icon: '🔄' },
  { id: 3, title: 'Usage Charges', date: 'Yesterday, 08:15 PM', amount: '-$320.50', type: 'negative', icon: '⚡' },
  { id: 4, title: 'Initial Deposit', date: 'Yesterday, 12:00 AM', amount: '+$5,000.00', type: 'positive', icon: '💰' }
];

const Transactions = () => {
  const containerStyle = {
    background: 'linear-gradient(135deg, rgba(10, 20, 15, 0.8) 0%, rgba(10, 10, 15, 0.9) 100%)',
    padding: '25px',
    borderRadius: '16px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    height: '100%',
    border: '1px solid rgba(0, 255, 136, 0.1)'
  };

  const headerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '25px',
    color: '#fff',
  };

  const viewAllStyle = {
    color: '#00ff88',
    textDecoration: 'none',
    fontSize: '14px',
    fontWeight: '600',
    cursor: 'pointer',
    transition: 'all 0.2s ease',
    ':hover': {
      textDecoration: 'underline',
      textShadow: '0 0 8px rgba(0, 255, 136, 0.3)'
    }
  };

  const transactionStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '15px 0',
    borderBottom: '1px solid rgba(0, 255, 136, 0.05)',
    color: '#fff',
    ':last-child': {
      borderBottom: 'none'
    }
  };

  const detailsStyle = {
    flex: 1,
    marginLeft: '15px',
  };

  const dateStyle = {
    color: 'rgba(0, 255, 136, 0.7)',
    fontSize: '13px',
    marginTop: '4px'
  };

  const actionButtonStyle = {
    backgroundColor: 'transparent',
    border: 'none',
    color: 'rgba(0, 255, 136, 0.7)',
    cursor: 'pointer',
    fontSize: '16px',
    padding: '8px',
    borderRadius: '50%',
    transition: 'all 0.2s ease',
    ':hover': {
      backgroundColor: 'rgba(0, 255, 136, 0.1)',
      color: '#00ff88'
    }
  };

  return (
    <div style={containerStyle}>
      <div style={headerStyle}>
        <div style={{ fontSize: '18px', fontWeight: 600, color: '#00ff88' }}>Recent Transactions</div>
        <div style={viewAllStyle}>View All</div>
      </div>
      
      {transactionData.map(txn => (
        <div key={txn.id} style={transactionStyle}>
          <div style={{
            width: 42,
            height: 42,
            backgroundColor: 'rgba(0, 255, 136, 0.1)',
            borderRadius: '10px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '18px',
            color: '#00ff88'
          }}>
            {txn.icon}
          </div>
          <div style={detailsStyle}>
            <div style={{ fontWeight: 600 }}>{txn.title}</div>
            <div style={dateStyle}>{txn.date}</div>
          </div>
          <div style={{ 
            fontWeight: '700', 
            color: txn.type === 'positive' ? '#00ff88' : '#FF5252',
            fontSize: '15px',
            marginRight: '15px'
          }}>
            {txn.amount}
          </div>
          <div style={{ display: 'flex', gap: '8px' }}>
            <button style={actionButtonStyle} title="View Details">
              <FiEye />
            </button>
            <button style={actionButtonStyle} title="Download Receipt">
              <FiDownload />
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Transactions;
import React from 'react';
import { FiPlay, FiVolume2, FiDownload, FiMoreVertical } from 'react-icons/fi';

const SummaryTable = () => {
  const data = [
    { id: 1, type: 'Call', duration: '1:12', result: 'Connected', timestamp: 'Today, 10:32 AM', sentiment: 'Positive' },
    { id: 2, type: 'Call', duration: '0:09', result: 'Hangup', timestamp: 'Today, 10:29 AM', sentiment: 'Negative' },
    { id: 3, type: 'Call', duration: '2:00', result: 'Voicemail', timestamp: 'Today, 10:25 AM', sentiment: 'Neutral' },
    { id: 4, type: 'Call', duration: '1:45', result: 'Connected', timestamp: 'Today, 10:18 AM', sentiment: 'Positive' },
    { id: 5, type: 'Call', duration: '0:45', result: 'Connected', timestamp: 'Today, 10:12 AM', sentiment: 'Neutral' },
  ];

  const getSentimentColor = (sentiment) => {
    switch(sentiment) {
      case 'Positive': return '#00ff88';
      case 'Negative': return '#FF5252';
      default: return '#FFA726';
    }
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
    <div style={{ 
      background: 'linear-gradient(135deg, rgba(10, 20, 15, 0.8) 0%, rgba(10, 10, 15, 0.9) 100%)', 
      padding: '25px', 
      borderRadius: '16px',
      marginBottom: '30px',
      boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
      border: '1px solid rgba(0, 255, 136, 0.1)'
    }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: '25px'
      }}>
        <h3 style={{ 
          color: '#00ff88', 
          fontSize: '18px',
          fontWeight: '600',
          textShadow: '0 0 8px rgba(0, 255, 136, 0.2)'
        }}>
          Recent Call Summary
        </h3>
        <button style={{
          backgroundColor: 'rgba(0, 255, 136, 0.1)',
          color: '#00ff88',
          border: 'none',
          borderRadius: '6px',
          padding: '8px 16px',
          fontSize: '12px',
          cursor: 'pointer',
          transition: 'all 0.2s ease',
          ':hover': {
            backgroundColor: 'rgba(0, 255, 136, 0.2)',
            boxShadow: '0 0 10px rgba(0, 255, 136, 0.1)'
          }
        }}>
          View All Calls
        </button>
      </div>
      <div style={{ overflowX: 'auto' }}>
        <table style={{ 
          width: '100%', 
          borderCollapse: 'collapse', 
          color: '#fff',
          minWidth: '800px'
        }}>
          <thead>
            <tr style={{ 
              textAlign: 'left',
              borderBottom: '1px solid rgba(0, 255, 136, 0.1)'
            }}>
              <th style={{ padding: '12px 15px', color: '#00ff88' }}>ID</th>
              <th style={{ padding: '12px 15px', color: '#00ff88' }}>Type</th>
              <th style={{ padding: '12px 15px', color: '#00ff88' }}>Duration</th>
              <th style={{ padding: '12px 15px', color: '#00ff88' }}>Result</th>
              <th style={{ padding: '12px 15px', color: '#00ff88' }}>Sentiment</th>
              <th style={{ padding: '12px 15px', color: '#00ff88' }}>Timestamp</th>
              <th style={{ padding: '12px 15px', color: '#00ff88' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {data.map(row => (
              <tr key={row.id} style={{ 
                borderBottom: '1px solid rgba(0, 255, 136, 0.05)',
                ':hover': {
                  backgroundColor: 'rgba(0, 255, 136, 0.03)'
                }
              }}>
                <td style={{ padding: '15px' }}>{row.id}</td>
                <td style={{ padding: '15px' }}>{row.type}</td>
                <td style={{ padding: '15px' }}>{row.duration}</td>
                <td style={{ padding: '15px' }}>{row.result}</td>
                <td style={{ 
                  padding: '15px',
                  color: getSentimentColor(row.sentiment),
                  fontWeight: '500'
                }}>
                  {row.sentiment}
                </td>
                <td style={{ padding: '15px' }}>{row.timestamp}</td>
                <td style={{ padding: '15px', display: 'flex', gap: '8px' }}>
                  <button style={actionButtonStyle} title="Play Recording">
                    <FiPlay />
                  </button>
                  <button style={actionButtonStyle} title="Download Recording">
                    <FiDownload />
                  </button>
                  <button style={actionButtonStyle} title="More Options">
                    <FiMoreVertical />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SummaryTable;
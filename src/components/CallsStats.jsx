import React from 'react';
import { FiArrowUp, FiArrowDown } from 'react-icons/fi';

const CallsStats = () => {
  const stats = [
    { title: 'Site Visits Scheduled', value: 187, change: '+12%', trend: 'up' },
    { title: 'Calls Triggered', value: 5243, change: '+8%', trend: 'up' },
    { title: 'Calls Connected', value: 3892, change: '+5%', trend: 'up' },
    { title: 'Calls Failed', value: 423, change: '-3%', trend: 'down' },
    { title: 'Calls > 1 Min', value: 2785, change: '+15%', trend: 'up' },
    { title: 'Calls < 10 Sec', value: 632, change: '-7%', trend: 'down' },
    { title: 'Positive Sentiment', value: 2874, change: '+2%', trend: 'up' },
  ];

  const getTrendColor = (trend) => trend === 'up' ? '#00ff88' : '#FF5252';

  return (
    <div style={{ 
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
      gap: '20px',
      marginBottom: '30px'
    }}>
      {stats.map((s, i) => (
        <div key={i} style={{ 
          background: 'linear-gradient(135deg, rgba(10, 20, 15, 0.8) 0%, rgba(10, 10, 15, 0.9) 100%)',
          padding: '20px',
          borderRadius: '12px',
          boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
          border: '1px solid rgba(0, 255, 136, 0.1)',
          transition: 'all 0.3s ease',
          ':hover': {
            transform: 'translateY(-3px)',
            boxShadow: '0 8px 20px rgba(0,255,136,0.2)'
          }
        }}>
          <h3 style={{ 
            color: 'rgba(0, 255, 136, 0.7)', 
            fontSize: '14px',
            marginBottom: '10px',
            fontWeight: '500'
          }}>
            {s.title}
          </h3>
          <div style={{ display: 'flex', alignItems: 'flex-end' }}>
            <p style={{ 
              fontSize: '24px', 
              fontWeight: '700',
              margin: 0,
              marginRight: '10px',
              color: '#FFFFFF'
            }}>
              {s.value.toLocaleString()}
            </p>
            <span style={{ 
              color: getTrendColor(s.trend),
              fontSize: '13px',
              marginBottom: '4px',
              display: 'flex',
              alignItems: 'center',
              gap: '4px'
            }}>
              {s.trend === 'up' ? <FiArrowUp size={14} /> : <FiArrowDown size={14} />}
              {s.change}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CallsStats;
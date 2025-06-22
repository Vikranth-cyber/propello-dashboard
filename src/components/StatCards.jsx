import React from 'react';

const StatCards = () => {
  const cards = [
    { 
      title: 'Account Balance', 
      value: '$8,750', 
      change: '+2.5%', 
      color: '#00ff88', 
      icon: '💳',
      trend: 'up'
    },
    { 
      title: 'Consumed Cost', 
      value: '$2,430', 
      change: '-1.2%', 
      color: '#FF5252', 
      icon: '📉',
      trend: 'down'
    },
    { 
      title: 'Remaining Minutes', 
      value: '3,240 min', 
      change: '+15%', 
      color: '#00cc6a', 
      icon: '⏳',
      trend: 'up'
    },
    { 
      title: 'Site Visits Scheduled', 
      value: '187', 
      change: '+8.3%', 
      color: '#FFA726', 
      icon: '📅',
      trend: 'up'
    },
  ];

  return (
    <div style={{ 
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
      gap: '25px',
      marginBottom: '30px'
    }}>
      {cards.map((card, index) => (
        <div 
          key={index} 
          style={{ 
            background: 'linear-gradient(135deg, rgba(10, 20, 15, 0.8) 0%, rgba(10, 10, 15, 0.9) 100%)',
            padding: '25px',
            borderRadius: '16px',
            border: `1px solid ${card.color}30`,
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)',
            transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
            position: 'relative',
            overflow: 'hidden',
            ':hover': {
              transform: 'translateY(-5px)',
              boxShadow: `0 12px 28px ${card.color}20`
            }
          }}
        >
          {/* Glow effect */}
          <div style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '4px',
            background: `linear-gradient(90deg, ${card.color}, transparent)`,
            opacity: 0.7
          }} />
          
          <div style={{ 
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            marginBottom: '20px'
          }}>
            <div>
              <h3 style={{ 
                color: 'rgba(0, 255, 136, 0.7)',
                fontSize: '14px',
                fontWeight: '500',
                letterSpacing: '0.5px',
                marginBottom: '8px',
                textTransform: 'uppercase'
              }}>
                {card.title}
              </h3>
              <p style={{ 
                fontSize: '28px',
                fontWeight: '700',
                color: card.color,
                margin: 0,
                lineHeight: '1.2',
                textShadow: `0 0 10px ${card.color}30`
              }}>
                {card.value}
              </p>
            </div>
            
            <div style={{
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              background: `${card.color}15`,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '20px',
              color: card.color
            }}>
              {card.icon}
            </div>
          </div>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            marginTop: '15px'
          }}>
            <span style={{
              color: card.trend === 'up' ? '#00ff88' : '#FF5252',
              fontSize: '13px',
              fontWeight: '600',
              display: 'flex',
              alignItems: 'center'
            }}>
              {card.trend === 'up' ? '↑' : '↓'} {card.change}
            </span>
            <span style={{
              color: 'rgba(0, 255, 136, 0.7)',
              fontSize: '12px',
              marginLeft: '8px'
            }}>
              vs last month
            </span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default StatCards;
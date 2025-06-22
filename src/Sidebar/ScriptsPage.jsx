import React from 'react';
import { BsFileText } from 'react-icons/bs';

const scriptFiles = [
  { name: 'Real Estate Lead Intro', file: '/scripts/real-estate-intro.txt' },
  { name: 'Follow-up Reminder Call', file: '/scripts/follow-up-reminder.txt' },
  { name: 'Property Site Visit Confirmation', file: '/scripts/site-visit-confirmation.txt' },
  { name: 'Final Call - Lead Nurturing', file: '/scripts/final-call-nurture.txt' }
];

const ScriptsPage = () => {
  return (
    <div style={{ padding: '40px' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        marginBottom: '30px'
      }}>
        <BsFileText size={28} color="#00ff88" />
        <h1 style={{
          color: '#00ff88',
          fontSize: '28px',
          fontWeight: '700',
          margin: 0,
          textShadow: '0 0 10px rgba(0, 255, 136, 0.3)'
        }}>
          Call Scripts
        </h1>
      </div>

      <div style={{
        backgroundColor: 'rgba(10, 20, 15, 0.3)',
        padding: '30px',
        borderRadius: '16px',
        border: '1px solid rgba(0, 255, 136, 0.1)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
        marginBottom: '40px'
      }}>
        <p style={{ color: 'rgba(0, 255, 136, 0.8)', fontSize: '16px' }}>
          Download and manage your AI Bot's call scripts below.
        </p>
      </div>

      <div style={{
        backgroundColor: '#121212',
        border: '1px solid rgba(0,255,136,0.1)',
        borderRadius: '12px',
        padding: '20px',
        boxShadow: '0 0 24px rgba(0,255,136,0.05)'
      }}>
        <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
          {scriptFiles.map((script, i) => (
            <li key={i} style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '14px 0',
              borderBottom: i !== scriptFiles.length - 1 ? '1px solid rgba(0,255,136,0.1)' : 'none'
            }}>
              <span style={{ color: '#ccc', fontSize: '15px' }}>{script.name}</span>
              <a
                href={script.file}
                download
                style={{
                  backgroundColor: '#00ff88',
                  color: '#000',
                  padding: '6px 12px',
                  borderRadius: '6px',
                  fontSize: '14px',
                  fontWeight: '600',
                  textDecoration: 'none',
                  boxShadow: '0 0 10px rgba(0,255,136,0.3)'
                }}
              >
                Download
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ScriptsPage;

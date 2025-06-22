import React from 'react';
import { BsMic } from 'react-icons/bs';

const dummyRecordings = [
  {
    id: 1,
    leadName: 'Rahul Verma',
    campaign: 'Real Estate',
    date: '2025-06-19',
    duration: '02:32',
    audioUrl: '/recordings/rahul-verma.mp3'
  },
  {
    id: 2,
    leadName: 'Sneha Rao',
    campaign: 'Real Estate',
    date: '2025-06-18',
    duration: '01:58',
    audioUrl: '/recordings/sneha-rao.mp3'
  },
  {
    id: 3,
    leadName: 'Amit Singh',
    campaign: 'Real Estate',
    date: '2025-06-17',
    duration: '03:15',
    audioUrl: '/recordings/amit-singh.mp3'
  }
];

const RecordingsPage = () => {
  return (
    <div style={{ padding: '40px' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        marginBottom: '30px'
      }}>
        <BsMic size={28} color="#00ff88" />
        <h1 style={{
          color: '#00ff88',
          fontSize: '28px',
          fontWeight: '700',
          margin: 0,
          textShadow: '0 0 10px rgba(0, 255, 136, 0.3)'
        }}>
          Call Recordings
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
          Access and listen to all call recordings made by the bot to potential leads.
        </p>
      </div>

      <div style={{
        backgroundColor: '#121212',
        border: '1px solid rgba(0,255,136,0.1)',
        borderRadius: '12px',
        padding: '20px',
        boxShadow: '0 0 24px rgba(0,255,136,0.05)'
      }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', color: '#fff' }}>
          <thead>
            <tr style={{ backgroundColor: '#1a1a1a' }}>
              <th style={thStyle}>Lead Name</th>
              <th style={thStyle}>Campaign</th>
              <th style={thStyle}>Date</th>
              <th style={thStyle}>Duration</th>
              <th style={thStyle}>Playback</th>
            </tr>
          </thead>
          <tbody>
            {dummyRecordings.map(recording => (
              <tr key={recording.id} style={{ borderBottom: '1px solid rgba(0,255,136,0.1)' }}>
                <td style={tdStyle}>{recording.leadName}</td>
                <td style={tdStyle}>{recording.campaign}</td>
                <td style={tdStyle}>{recording.date}</td>
                <td style={tdStyle}>{recording.duration}</td>
                <td style={tdStyle}>
                  <audio controls style={{ width: '180px' }}>
                    <source src={recording.audioUrl} type="audio/mpeg" />
                    Your browser does not support the audio element.
                  </audio>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const thStyle = {
  padding: '12px 16px',
  color: '#00ff88',
  textAlign: 'left',
  fontSize: '14px'
};

const tdStyle = {
  padding: '12px 16px',
  fontSize: '14px',
  color: '#ccc'
};

export default RecordingsPage;

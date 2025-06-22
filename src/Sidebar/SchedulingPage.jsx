import React, { useState } from 'react';
import { MdOutlineSchedule } from 'react-icons/md';

const SchedulingPage = () => {
  const [numbers, setNumbers] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');

  const handleCSVUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = function (event) {
      const text = event.target.result;
      const rows = text.split('\n').filter((line) => line.trim() !== '');
      const cleanedNumbers = rows.map(line => line.replace(/\D/g, '').trim());
      setNumbers(cleanedNumbers);
    };
    reader.readAsText(file);
  };

  const handleSchedule = () => {
    if (!selectedDate || !selectedTime || numbers.length === 0) {
      alert("Please provide date, time, and upload numbers.");
      return;
    }
    alert(`Scheduled ${numbers.length} calls on ${selectedDate} at ${selectedTime}`);
  };

  return (
    <div style={{ padding: '40px' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        marginBottom: '30px'
      }}>
        <MdOutlineSchedule size={28} color="#00ff88" />
        <h1 style={{
          color: '#00ff88',
          fontSize: '28px',
          fontWeight: '700',
          margin: 0,
          textShadow: '0 0 10px rgba(0, 255, 136, 0.3)'
        }}>
          Call Scheduling
        </h1>
      </div>

      {/* File Upload and Scheduling Form */}
      <div style={{
        backgroundColor: 'rgba(10, 20, 15, 0.3)',
        padding: '30px',
        borderRadius: '16px',
        border: '1px solid rgba(0, 255, 136, 0.1)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
        marginBottom: '30px'
      }}>
        <p style={{ color: '#00ff88', fontSize: '16px', marginBottom: '10px' }}>
          Upload your phone numbers CSV:
        </p>
        <input type="file" accept=".csv" onChange={handleCSVUpload} style={{ marginBottom: '20px' }} />

        <div style={{ display: 'flex', gap: '20px', marginBottom: '20px' }}>
          <input
            type="date"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            style={{ padding: '10px', borderRadius: '6px', border: '1px solid #00ff88', background: '#121212', color: '#fff' }}
          />
          <input
            type="time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            style={{ padding: '10px', borderRadius: '6px', border: '1px solid #00ff88', background: '#121212', color: '#fff' }}
          />
        </div>

        <button
          onClick={handleSchedule}
          style={{
            padding: '10px 20px',
            borderRadius: '6px',
            background: '#00ff88',
            color: '#000',
            fontWeight: '600',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Schedule Calls
        </button>
      </div>

      {/* Display Numbers */}
      {numbers.length > 0 && (
        <div style={{
          backgroundColor: '#121212',
          padding: '20px',
          borderRadius: '12px',
          border: '1px solid rgba(0,255,136,0.1)',
          color: '#ccc',
          maxHeight: '300px',
          overflowY: 'auto'
        }}>
          <h3 style={{ color: '#00ff88', marginBottom: '10px' }}>Uploaded Numbers:</h3>
          <ul style={{ paddingLeft: '20px' }}>
            {numbers.map((num, index) => (
              <li key={index}>{num}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default SchedulingPage;

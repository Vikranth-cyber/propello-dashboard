import React from 'react';
import { FiHome } from 'react-icons/fi';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
} from 'recharts';

const dummyCallData = [
  { day: 'Mon', calls: 120 },
  { day: 'Tue', calls: 200 },
  { day: 'Wed', calls: 150 },
  { day: 'Thu', calls: 300 },
  { day: 'Fri', calls: 220 },
  { day: 'Sat', calls: 180 },
  { day: 'Sun', calls: 250 }
];

const RealEstatePage = () => {
  return (
    <div style={{ padding: '40px' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        marginBottom: '30px'
      }}>
        <FiHome size={28} color="#00ff88" />
        <h1 style={{
          color: '#00ff88',
          fontSize: '28px',
          fontWeight: '700',
          margin: 0,
          textShadow: '0 0 10px rgba(0, 255, 136, 0.3)'
        }}>
          Real Estate Campaigns
        </h1>
      </div>

      {/* Stats Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px', marginBottom: '40px' }}>
        {[
          { label: 'Total Calls', value: '1,240' },
          { label: 'Interested Leads', value: '312' },
          { label: 'Conversion Rate', value: '25.2%' },
          { label: 'Avg Bot Talk Time', value: '2m 45s' }
        ].map((stat, i) => (
          <div key={i} style={{
            backgroundColor: '#121212',
            border: '1px solid rgba(0,255,136,0.1)',
            padding: '20px',
            borderRadius: '12px',
            boxShadow: '0 0 12px rgba(0,255,136,0.05)'
          }}>
            <p style={{ color: '#aaa', fontSize: '14px', marginBottom: '6px' }}>{stat.label}</p>
            <h2 style={{ color: '#00ff88', fontSize: '24px', fontWeight: '700' }}>{stat.value}</h2>
          </div>
        ))}
      </div>

      {/* Daily Call Graph */}
      <div style={{
        backgroundColor: '#121212',
        padding: '30px',
        borderRadius: '16px',
        marginBottom: '40px',
        border: '1px solid rgba(0,255,136,0.1)',
        boxShadow: '0 0 24px rgba(0,255,136,0.05)'
      }}>
        <h3 style={{ color: '#00ff88', marginBottom: '16px' }}>Daily Calls Over Time</h3>
        <div style={{ width: '100%', height: 300 }}>
          <ResponsiveContainer>
            <LineChart data={dummyCallData} margin={{ top: 10, right: 20, bottom: 0, left: 0 }}>
              <CartesianGrid strokeDasharray="3 3" stroke="#333" />
              <XAxis dataKey="day" stroke="#aaa" />
              <YAxis stroke="#aaa" />
              <Tooltip contentStyle={{ backgroundColor: '#222', borderColor: '#00ff88' }} />
              <Line type="monotone" dataKey="calls" stroke="#00ff88" strokeWidth={2} dot={{ r: 4 }} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Top Queries List */}
      <div style={{
        backgroundColor: '#121212',
        padding: '30px',
        borderRadius: '16px',
        border: '1px solid rgba(0,255,136,0.1)',
        boxShadow: '0 0 24px rgba(0,255,136,0.05)'
      }}>
        <h3 style={{ color: '#00ff88', marginBottom: '16px' }}>Top Properties Queried by Leads</h3>
        <ul style={{ color: '#ccc', paddingLeft: '16px', lineHeight: '1.8' }}>
          <li>2BHK - Prestige Villas, Gachibowli</li>
          <li>3BHK - My Home Bhooja, HITEC City</li>
          <li>Plots - Shadnagar Premium Layout</li>
          <li>2BHK - Aparna Zenon, Miyapur</li>
        </ul>
      </div>
    </div>
  );
};

export default RealEstatePage;

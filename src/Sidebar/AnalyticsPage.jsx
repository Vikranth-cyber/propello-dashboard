import React from 'react';
import { MdOutlineAnalytics } from 'react-icons/md';
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const pieData = [
  { name: 'Interested', value: 320 },
  { name: 'Not Interested', value: 210 },
  { name: 'Follow-up', value: 150 },
  { name: 'Not Answered', value: 100 }
];

const COLORS = ['#00ff88', '#ff4c4c', '#ffaa00', '#8884d8'];

const barData = [
  { day: 'Mon', leads: 50 },
  { day: 'Tue', leads: 70 },
  { day: 'Wed', leads: 60 },
  { day: 'Thu', leads: 90 },
  { day: 'Fri', leads: 75 },
  { day: 'Sat', leads: 45 },
  { day: 'Sun', leads: 30 }
];

const AnalyticsPage = () => {
  return (
    <div style={{ padding: '40px' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        marginBottom: '30px'
      }}>
        <MdOutlineAnalytics size={28} color="#00ff88" />
        <h1 style={{
          color: '#00ff88',
          fontSize: '28px',
          fontWeight: '700',
          margin: 0,
          textShadow: '0 0 10px rgba(0, 255, 136, 0.3)'
        }}>
          Call Analytics
        </h1>
      </div>

      {/* KPI Cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '30px', marginBottom: '40px' }}>
        {[
          { label: 'Total Calls', value: '1,200' },
          { label: 'Leads Generated', value: '630' },
          { label: 'Positive Responses', value: '320' },
          { label: 'Follow-up Scheduled', value: '150' }
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

      {/* Charts */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '30px' }}>
        {/* Pie Chart */}
        <div style={{
          backgroundColor: '#121212',
          padding: '30px',
          borderRadius: '16px',
          border: '1px solid rgba(0,255,136,0.1)',
          boxShadow: '0 0 24px rgba(0,255,136,0.05)'
        }}>
          <h3 style={{ color: '#00ff88', marginBottom: '16px' }}>Lead Response Breakdown</h3>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie data={pieData} dataKey="value" outerRadius={80} label>
                {pieData.map((_, i) => <Cell key={i} fill={COLORS[i % COLORS.length]} />)}
              </Pie>
              <Tooltip />
            </PieChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div style={{
          backgroundColor: '#121212',
          padding: '30px',
          borderRadius: '16px',
          border: '1px solid rgba(0,255,136,0.1)',
          boxShadow: '0 0 24px rgba(0,255,136,0.05)'
        }}>
          <h3 style={{ color: '#00ff88', marginBottom: '16px' }}>Daily Leads Generated</h3>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={barData}>
              <XAxis dataKey="day" stroke="#aaa" />
              <YAxis stroke="#aaa" />
              <Tooltip />
              <Bar dataKey="leads" fill="#00ff88" barSize={30} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default AnalyticsPage;

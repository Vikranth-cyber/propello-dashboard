import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { FiBarChart2 } from 'react-icons/fi';

const data = [
  { day: 'Mon', calls: 842, fill: '#00ff88' },
  { day: 'Tue', calls: 1043, fill: '#00ff88' },
  { day: 'Wed', calls: 932, fill: '#00ff88' },
  { day: 'Thu', calls: 1254, fill: '#00ff88' },
  { day: 'Fri', calls: 876, fill: '#00ff88' },
  { day: 'Sat', calls: 543, fill: '#00ff88' },
  { day: 'Sun', calls: 321, fill: '#00ff88' },
];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{
        background: 'rgba(10, 20, 15, 0.95)',
        border: '1px solid rgba(0, 255, 136, 0.3)',
        borderRadius: '8px',
        padding: '12px',
        boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
      }}>
        <p style={{ 
          color: '#00ff88', 
          fontWeight: '600', 
          marginBottom: '8px'
        }}>
          {label}
        </p>
        <p style={{ 
          color: '#FFFFFF',
          fontSize: '14px'
        }}>
          Calls: <strong style={{color: '#00ff88'}}>{payload[0].value.toLocaleString()}</strong>
        </p>
      </div>
    );
  }
  return null;
};

const CallGraphs = () => (
  <div style={{ 
    background: 'linear-gradient(135deg, rgba(10, 20, 15, 0.8) 0%, rgba(10, 10, 15, 0.9) 100%)', 
    padding: '25px', 
    borderRadius: '16px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.1)',
    height: '100%',
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
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        textShadow: '0 0 8px rgba(0, 255, 136, 0.2)'
      }}>
        <FiBarChart2 style={{ color: '#00ff88' }} />
        Calls Triggered (Weekly)
      </h3>
      <select style={{
        backgroundColor: 'rgba(0, 255, 136, 0.1)',
        color: '#FFFFFF',
        border: '1px solid rgba(0, 255, 136, 0.3)',
        borderRadius: '8px',
        padding: '8px 12px',
        fontSize: '13px',
        cursor: 'pointer',
        transition: 'all 0.2s ease',
        ':hover': {
          borderColor: 'rgba(0, 255, 136, 0.5)'
        }
      }}>
        <option>Last 7 Days</option>
        <option>Last 30 Days</option>
        <option>This Month</option>
      </select>
    </div>
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis 
          dataKey="day" 
          stroke="rgba(0, 255, 136, 0.7)" 
          tickLine={false}
          axisLine={false}
        />
        <YAxis 
          stroke="rgba(0, 255, 136, 0.7)" 
          tickLine={false}
          axisLine={false}
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar 
          dataKey="calls" 
          radius={[6, 6, 0, 0]} 
          animationDuration={2000}
          fill="#00ff88"
        />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default CallGraphs;
import React from 'react';
import { 
  BarChart, 
  Bar, 
  LineChart, 
  Line, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  Legend, 
  ResponsiveContainer, 
  Cell 
} from 'recharts';
import { FiActivity, FiTrendingUp, FiClock } from 'react-icons/fi';

const botData = {
  bot: 'PROPELLO AI',
  metrics: {
    dialed: 2450,
    connected: 1987,
    pickup: 1823,
    positive: 1421,
    scheduled: 487,
    over1min: 1543,
    conversion: 68.2,
    avgDuration: '2:45'
  },
  trend: [
    { week: 'W1', dialed: 520, connected: 410 },
    { week: 'W2', dialed: 610, connected: 495 },
    { week: 'W3', dialed: 680, connected: 562 },
    { week: 'W4', dialed: 640, connected: 520 }
  ]
};

const COLORS = ['#00ff88', '#FFA726', '#00cc6a', '#FF5252'];

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
          marginBottom: '8px',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          paddingBottom: '6px'
        }}>
          {label}
        </p>
        {payload.map((entry, index) => (
          <p key={`item-${index}`} style={{ 
            color: '#fff',
            fontSize: '13px',
            display: 'flex',
            alignItems: 'center',
            gap: '6px'
          }}>
            <span style={{
              display: 'inline-block',
              width: '10px',
              height: '10px',
              backgroundColor: entry.color,
              borderRadius: '2px'
            }}></span>
            {entry.name}: <strong style={{color: entry.color}}>{entry.value.toLocaleString()}</strong>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const BotPerformance = () => (
  <div style={{ marginBottom: '40px' }}>
    {/* Performance Overview Card */}
    <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '20px',
      marginBottom: '30px'
    }}>
      <div style={{
        background: 'linear-gradient(135deg, rgba(10, 20, 15, 0.8) 0%, rgba(10, 10, 15, 0.9) 100%)',
        borderRadius: '16px',
        padding: '25px',
        border: '1px solid rgba(0, 255, 136, 0.1)',
        boxShadow: '0 8px 24px rgba(0,0,0,0.2)',
        position: 'relative',
        overflow: 'hidden'
      }}>
        <div style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '4px',
          height: '100%',
          background: 'linear-gradient(to bottom, #00ff88, #00cc6a)'
        }}></div>
        <h3 style={{
          color: '#00ff88',
          fontSize: '20px',
          fontWeight: '600',
          marginBottom: '20px',
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          textShadow: '0 0 10px rgba(0, 255, 136, 0.3)'
        }}>
          <FiActivity style={{ color: '#00ff88' }} />
          {botData.bot} Performance
        </h3>
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '20px'
        }}>
          <div>
            <p style={{ color: 'rgba(0, 255, 136, 0.7)', fontSize: '14px', marginBottom: '8px' }}>Total Calls</p>
            <p style={{ color: '#FFFFFF', fontSize: '24px', fontWeight: '700' }}>
              {botData.metrics.dialed.toLocaleString()}
            </p>
          </div>
          <div>
            <p style={{ color: 'rgba(0, 255, 136, 0.7)', fontSize: '14px', marginBottom: '8px' }}>Connected</p>
            <p style={{ color: '#FFFFFF', fontSize: '24px', fontWeight: '700' }}>
              {botData.metrics.connected.toLocaleString()}
            </p>
          </div>
          <div>
            <p style={{ color: 'rgba(0, 255, 136, 0.7)', fontSize: '14px', marginBottom: '8px' }}>Conversion Rate</p>
            <p style={{ color: '#FFFFFF', fontSize: '24px', fontWeight: '700' }}>
              {botData.metrics.conversion}%
            </p>
          </div>
          <div>
            <p style={{ color: 'rgba(0, 255, 136, 0.7)', fontSize: '14px', marginBottom: '8px' }}>Avg Duration</p>
            <p style={{ color: '#FFFFFF', fontSize: '24px', fontWeight: '700', display: 'flex', alignItems: 'center' }}>
              <FiClock style={{ marginRight: '6px', color: 'rgba(0, 255, 136, 0.7)' }} />
              {botData.metrics.avgDuration}
            </p>
          </div>
        </div>
      </div>
    </div>

    {/* Trend Analysis */}
    <div style={{ 
      background: 'linear-gradient(135deg, rgba(10, 20, 15, 0.8) 0%, rgba(10, 10, 15, 0.9) 100%)',
      padding: '25px', 
      borderRadius: '16px', 
      marginBottom: '30px',
      border: '1px solid rgba(0, 255, 136, 0.1)',
      boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
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
          <FiTrendingUp style={{ color: '#00ff88' }} />
          Weekly Performance Trend
        </h3>
        <select style={{
          background: 'rgba(0, 255, 136, 0.1)',
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
          <option>Last 4 Weeks</option>
          <option>Last 8 Weeks</option>
          <option>Quarterly</option>
        </select>
      </div>
      
      <div style={{ height: '300px' }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={botData.trend}>
            <CartesianGrid strokeDasharray="3 3" stroke="rgba(0, 255, 136, 0.05)" />
            <XAxis 
              dataKey="week" 
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
            <Legend />
            <Line 
              type="monotone" 
              dataKey="dialed" 
              name="Dialed Calls"
              stroke={COLORS[0]}
              strokeWidth={2}
              dot={{ r: 4, strokeWidth: 2, fill: COLORS[0] }}
              activeDot={{ r: 6, strokeWidth: 0 }}
            />
            <Line 
              type="monotone" 
              dataKey="connected" 
              name="Connected Calls"
              stroke={COLORS[2]}
              strokeWidth={2}
              dot={{ r: 4, strokeWidth: 2, fill: COLORS[2] }}
              activeDot={{ r: 6, strokeWidth: 0 }}
            />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>

    {/* Detailed Metrics */}
    <div style={{ 
      background: 'linear-gradient(135deg, rgba(10, 20, 15, 0.8) 0%, rgba(10, 10, 15, 0.9) 100%)',
      padding: '25px', 
      borderRadius: '16px',
      border: '1px solid rgba(0, 255, 136, 0.1)',
      boxShadow: '0 8px 24px rgba(0,0,0,0.2)'
    }}>
      <h3 style={{ 
        color: '#00ff88', 
        fontSize: '18px',
        fontWeight: '600',
        marginBottom: '25px',
        display: 'flex',
        alignItems: 'center',
        gap: '10px',
        textShadow: '0 0 8px rgba(0, 255, 136, 0.2)'
      }}>
        <FiActivity style={{ color: '#00ff88' }} />
        Performance Metrics Breakdown
      </h3>
      
      <div style={{ overflowX: 'auto' }}>
        <table style={{ 
          width: '100%', 
          color: '#fff', 
          borderCollapse: 'separate',
          borderSpacing: '0',
          minWidth: '800px'
        }}>
          <thead>
            <tr>
              <th style={{ 
                padding: '16px',
                textAlign: 'left',
                backgroundColor: 'rgba(0, 255, 136, 0.1)',
                borderTopLeftRadius: '12px',
                color: '#00ff88'
              }}>Metric</th>
              <th style={{ 
                padding: '16px',
                textAlign: 'right',
                backgroundColor: 'rgba(0, 255, 136, 0.1)',
                color: '#00ff88'
              }}>Count</th>
              <th style={{ 
                padding: '16px',
                textAlign: 'right',
                backgroundColor: 'rgba(0, 255, 136, 0.1)',
                color: '#00ff88'
              }}>Rate</th>
              <th style={{ 
                padding: '16px',
                textAlign: 'right',
                backgroundColor: 'rgba(0, 255, 136, 0.1)',
                borderTopRightRadius: '12px',
                color: '#00ff88'
              }}>Conversion</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{ 
              borderBottom: '1px solid rgba(0, 255, 136, 0.05)',
              ':hover': {
                backgroundColor: 'rgba(0, 255, 136, 0.03)'
              }
            }}>
              <td style={{ 
                padding: '16px',
                fontWeight: '500',
                borderLeft: `4px solid ${COLORS[0]}`
              }}>Dialed Calls</td>
              <td style={{ padding: '16px', textAlign: 'right' }}>{botData.metrics.dialed.toLocaleString()}</td>
              <td style={{ padding: '16px', textAlign: 'right' }}>100%</td>
              <td style={{ padding: '16px', textAlign: 'right' }}>-</td>
            </tr>
            <tr style={{ 
              borderBottom: '1px solid rgba(0, 255, 136, 0.05)',
              ':hover': {
                backgroundColor: 'rgba(0, 255, 136, 0.03)'
              }
            }}>
              <td style={{ 
                padding: '16px',
                fontWeight: '500',
                borderLeft: `4px solid ${COLORS[1]}`
              }}>Connected Calls</td>
              <td style={{ padding: '16px', textAlign: 'right' }}>{botData.metrics.connected.toLocaleString()}</td>
              <td style={{ padding: '16px', textAlign: 'right' }}>{Math.round((botData.metrics.connected/botData.metrics.dialed)*100)}%</td>
              <td style={{ padding: '16px', textAlign: 'right' }}>-</td>
            </tr>
            <tr style={{ 
              borderBottom: '1px solid rgba(0, 255, 136, 0.05)',
              ':hover': {
                backgroundColor: 'rgba(0, 255, 136, 0.03)'
              }
            }}>
              <td style={{ 
                padding: '16px',
                fontWeight: '500',
                borderLeft: `4px solid ${COLORS[2]}`
              }}>Positive Outcomes</td>
              <td style={{ padding: '16px', textAlign: 'right' }}>{botData.metrics.positive.toLocaleString()}</td>
              <td style={{ padding: '16px', textAlign: 'right' }}>{Math.round((botData.metrics.positive/botData.metrics.connected)*100)}%</td>
              <td style={{ padding: '16px', textAlign: 'right' }}>{botData.metrics.conversion}%</td>
            </tr>
            <tr style={{ 
              borderBottom: '1px solid rgba(0, 255, 136, 0.05)',
              ':hover': {
                backgroundColor: 'rgba(0, 255, 136, 0.03)'
              }
            }}>
              <td style={{ 
                padding: '16px',
                fontWeight: '500',
                borderLeft: `4px solid ${COLORS[3]}`
              }}>Scheduled Appointments</td>
              <td style={{ padding: '16px', textAlign: 'right' }}>{botData.metrics.scheduled.toLocaleString()}</td>
              <td style={{ padding: '16px', textAlign: 'right' }}>{Math.round((botData.metrics.scheduled/botData.metrics.positive)*100)}%</td>
              <td style={{ padding: '16px', textAlign: 'right' }}>{Math.round((botData.metrics.scheduled/botData.metrics.dialed)*100)}%</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
);

export default BotPerformance;
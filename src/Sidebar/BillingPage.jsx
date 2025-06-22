import React from 'react';
import { RiWalletLine } from 'react-icons/ri';

const BillingPage = () => {
  const billingHistory = [
    { date: '2025-05-01', amount: '₹999', method: 'UPI', status: 'Paid' },
    { date: '2025-04-01', amount: '₹999', method: 'Credit Card', status: 'Paid' },
    { date: '2025-03-01', amount: '₹999', method: 'Credit Card', status: 'Paid' },
  ];

  return (
    <div style={{ padding: '40px' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        marginBottom: '30px'
      }}>
        <RiWalletLine size={28} color="#00ff88" />
        <h1 style={{
          color: '#00ff88',
          fontSize: '28px',
          fontWeight: '700',
          margin: 0,
          textShadow: '0 0 10px rgba(0, 255, 136, 0.3)'
        }}>
          Billing & Payments
        </h1>
      </div>

      {/* Subscription Info */}
      <div style={{
        backgroundColor: '#121212',
        padding: '30px',
        borderRadius: '16px',
        marginBottom: '30px',
        border: '1px solid rgba(0, 255, 136, 0.1)',
        boxShadow: '0 0 24px rgba(0,255,136,0.05)',
        color: '#ccc'
      }}>
        <h3 style={{ color: '#00ff88', marginBottom: '16px' }}>Subscription Details</h3>
        <p>Plan: <strong style={{ color: '#fff' }}>Pro Monthly</strong></p>
        <p>Next Renewal: <strong style={{ color: '#fff' }}>July 1, 2025</strong></p>
        <p>Status: <strong style={{ color: '#00ff88' }}>Active</strong></p>
      </div>

      {/* Billing History */}
      <div style={{
        backgroundColor: '#121212',
        padding: '30px',
        borderRadius: '16px',
        border: '1px solid rgba(0, 255, 136, 0.1)',
        boxShadow: '0 0 24px rgba(0,255,136,0.05)',
        color: '#ccc'
      }}>
        <h3 style={{ color: '#00ff88', marginBottom: '16px' }}>Billing History</h3>
        <table style={{ width: '100%', color: '#ccc', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid #00ff88' }}>
              <th style={{ textAlign: 'left', padding: '8px' }}>Date</th>
              <th style={{ textAlign: 'left', padding: '8px' }}>Amount</th>
              <th style={{ textAlign: 'left', padding: '8px' }}>Method</th>
              <th style={{ textAlign: 'left', padding: '8px' }}>Status</th>
            </tr>
          </thead>
          <tbody>
            {billingHistory.map((entry, idx) => (
              <tr key={idx} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '8px' }}>{entry.date}</td>
                <td style={{ padding: '8px' }}>{entry.amount}</td>
                <td style={{ padding: '8px' }}>{entry.method}</td>
                <td style={{ padding: '8px', color: entry.status === 'Paid' ? '#00ff88' : '#f00' }}>{entry.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Payment Method Info (Optional Placeholder) */}
      <div style={{
        backgroundColor: '#121212',
        padding: '30px',
        borderRadius: '16px',
        marginTop: '30px',
        border: '1px solid rgba(0, 255, 136, 0.1)',
        boxShadow: '0 0 12px rgba(0,255,136,0.1)',
        color: '#ccc'
      }}>
        <h3 style={{ color: '#00ff88', marginBottom: '16px' }}>Payment Method</h3>
        <p>Saved: UPI - <strong>vik***@oksbi</strong></p>
        <button style={{
          marginTop: '12px',
          padding: '10px 20px',
          borderRadius: '6px',
          border: 'none',
          backgroundColor: '#00ff88',
          color: '#000',
          fontWeight: '600',
          cursor: 'pointer'
        }}>
          Update Payment Method
        </button>
      </div>
    </div>
  );
};

export default BillingPage;

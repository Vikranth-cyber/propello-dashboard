import React, { useState } from 'react';
import { MdOutlineHelp } from 'react-icons/md';

const HelpCenterPage = () => {
  const [expanded, setExpanded] = useState(null);

  const faqs = [
    {
      question: 'How do I schedule a call using the bot?',
      answer: 'Go to the "Call Scheduling" page and upload your CSV with numbers. Set a time and campaign details.'
    },
    {
      question: 'Can I listen to previous bot calls?',
      answer: 'Yes, visit the "Recordings" page to playback, download, or share audio files of bot calls.'
    },
    {
      question: 'How do I update my profile or password?',
      answer: 'Visit the "Profile" or "Security" page to manage and update personal and login details.'
    },
    {
      question: 'How do I cancel or change my subscription?',
      answer: 'Visit the "Billing & Payments" page. You can view, change, or cancel your plan under subscription settings.'
    }
  ];

  return (
    <div style={{ padding: '40px' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        marginBottom: '30px'
      }}>
        <MdOutlineHelp size={28} color="#00ff88" />
        <h1 style={{
          color: '#00ff88',
          fontSize: '28px',
          fontWeight: '700',
          margin: 0,
          textShadow: '0 0 10px rgba(0, 255, 136, 0.3)'
        }}>
          Help Center
        </h1>
      </div>

      {/* FAQ Section */}
      <div style={{
        backgroundColor: '#121212',
        padding: '30px',
        borderRadius: '16px',
        border: '1px solid rgba(0, 255, 136, 0.1)',
        marginBottom: '30px',
        boxShadow: '0 0 24px rgba(0,255,136,0.05)',
        color: '#ccc'
      }}>
        <h3 style={{ color: '#00ff88', marginBottom: '20px' }}>Frequently Asked Questions</h3>
        {faqs.map((faq, index) => (
          <div key={index} style={{ marginBottom: '18px' }}>
            <p
              onClick={() => setExpanded(expanded === index ? null : index)}
              style={{
                cursor: 'pointer',
                fontWeight: '600',
                color: '#fff',
                marginBottom: '6px'
              }}
            >
              {faq.question}
            </p>
            {expanded === index && (
              <p style={{ color: '#aaa', paddingLeft: '10px' }}>{faq.answer}</p>
            )}
          </div>
        ))}
      </div>

      {/* Contact Support */}
      <div style={{
        backgroundColor: '#121212',
        padding: '30px',
        borderRadius: '16px',
        border: '1px solid rgba(0, 255, 136, 0.1)',
        boxShadow: '0 0 12px rgba(0,255,136,0.05)',
        color: '#ccc'
      }}>
        <h3 style={{ color: '#00ff88', marginBottom: '16px' }}>Still need help?</h3>
        <p style={{ marginBottom: '12px' }}>
          You can contact our support team via email at <strong>support@propelloai.in</strong> or submit your query below:
        </p>
        <textarea
          placeholder="Describe your issue..."
          style={{
            width: '100%',
            height: '100px',
            backgroundColor: '#1b1b1b',
            color: '#fff',
            border: '1px solid #00ff88',
            borderRadius: '6px',
            padding: '10px',
            marginBottom: '10px'
          }}
        />
        <button style={{
          backgroundColor: '#00ff88',
          color: '#000',
          padding: '10px 20px',
          borderRadius: '6px',
          fontWeight: '600',
          cursor: 'pointer',
          border: 'none'
        }}>
          Submit Request
        </button>
      </div>
    </div>
  );
};

export default HelpCenterPage;

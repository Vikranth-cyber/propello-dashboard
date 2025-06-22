import React from 'react';
import { MdOutlineLibraryBooks } from 'react-icons/md';

const DocsPage = () => {
  const docs = [
    { title: "Getting Started", description: "Set up your account and first campaign", link: "#" },
    { title: "Scheduling Calls", description: "Upload CSV and manage call timings", link: "#" },
    { title: "Understanding Analytics", description: "Interpret dashboard metrics", link: "#" },
    { title: "Bot Script Writing", description: "Create effective call scripts", link: "#" },
    { title: "Managing Recordings", description: "Playback, download and analyze call audio", link: "#" },
    { title: "Billing & Subscription", description: "Know your plan, payment methods and invoices", link: "#" },
  ];

  return (
    <div style={{ padding: '40px' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        marginBottom: '30px'
      }}>
        <MdOutlineLibraryBooks size={28} color="#00ff88" />
        <h1 style={{
          color: '#00ff88',
          fontSize: '28px',
          fontWeight: '700',
          margin: 0,
          textShadow: '0 0 10px rgba(0, 255, 136, 0.3)'
        }}>
          Documentation
        </h1>
      </div>

      <div style={{
        backgroundColor: '#121212',
        padding: '30px',
        borderRadius: '16px',
        border: '1px solid rgba(0, 255, 136, 0.1)',
        boxShadow: '0 0 24px rgba(0,255,136,0.05)',
        color: '#ccc'
      }}>
        <h3 style={{ color: '#00ff88', marginBottom: '20px' }}>User Guides & Docs</h3>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {docs.map((doc, index) => (
            <li key={index} style={{
              marginBottom: '20px',
              padding: '16px',
              backgroundColor: '#1c1c1c',
              borderRadius: '12px',
              border: '1px solid rgba(0, 255, 136, 0.08)',
              transition: '0.3s ease',
              cursor: 'pointer'
            }}>
              <a href={doc.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#00ff88' }}>
                <h4 style={{ margin: '0 0 6px 0', fontSize: '18px' }}>{doc.title}</h4>
                <p style={{ margin: 0, color: '#aaa', fontSize: '14px' }}>{doc.description}</p>
              </a>
            </li>
          ))}
        </ul>
      </div>

      <div style={{
        backgroundColor: '#1c1c1c',
        marginTop: '30px',
        padding: '30px',
        borderRadius: '12px',
        border: '1px solid rgba(0,255,136,0.1)',
        boxShadow: '0 0 16px rgba(0,255,136,0.05)',
        color: '#ccc'
      }}>
        <h4 style={{ color: '#00ff88', marginBottom: '12px' }}>Download Quick Start PDF</h4>
        <a
          href="/docs/propello-quickstart.pdf"
          download
          style={{
            backgroundColor: '#00ff88',
            color: '#000',
            padding: '10px 16px',
            fontWeight: '600',
            borderRadius: '6px',
            textDecoration: 'none',
            display: 'inline-block'
          }}
        >
          Download Guide
        </a>
      </div>
    </div>
  );
};

export default DocsPage;

import React, { useState } from 'react';
import { MdOutlineContactSupport } from 'react-icons/md';

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    query: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Your query has been submitted. Our support team will reach out shortly!');
    setFormData({ name: '', email: '', query: '' });
  };

  return (
    <div style={{ padding: '40px' }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '15px',
        marginBottom: '30px'
      }}>
        <MdOutlineContactSupport size={28} color="#00ff88" />
        <h1 style={{
          color: '#00ff88',
          fontSize: '28px',
          fontWeight: '700',
          margin: 0,
          textShadow: '0 0 10px rgba(0, 255, 136, 0.3)'
        }}>
          Contact Support
        </h1>
      </div>

      <div style={{
        backgroundColor: '#121212',
        padding: '30px',
        borderRadius: '16px',
        border: '1px solid rgba(0, 255, 136, 0.1)',
        boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
        color: '#ccc'
      }}>
        <p style={{ color: '#00ff88', marginBottom: '20px' }}>
          Need help? Fill out the form below and our team will assist you shortly.
        </p>
        
        <form onSubmit={handleSubmit}>
          <label style={{ display: 'block', marginBottom: '10px' }}>
            Name:
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                display: 'block',
                width: '100%',
                padding: '10px',
                marginTop: '6px',
                backgroundColor: '#1f1f1f',
                border: '1px solid #00ff88',
                borderRadius: '8px',
                color: '#fff'
              }}
            />
          </label>

          <label style={{ display: 'block', marginBottom: '10px' }}>
            Email:
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                display: 'block',
                width: '100%',
                padding: '10px',
                marginTop: '6px',
                backgroundColor: '#1f1f1f',
                border: '1px solid #00ff88',
                borderRadius: '8px',
                color: '#fff'
              }}
            />
          </label>

          <label style={{ display: 'block', marginBottom: '20px' }}>
            Your Message:
            <textarea
              name="query"
              value={formData.query}
              onChange={handleChange}
              required
              rows="5"
              style={{
                display: 'block',
                width: '100%',
                padding: '10px',
                marginTop: '6px',
                backgroundColor: '#1f1f1f',
                border: '1px solid #00ff88',
                borderRadius: '8px',
                color: '#fff'
              }}
            />
          </label>

          <button
            type="submit"
            style={{
              backgroundColor: '#00ff88',
              color: '#000',
              padding: '10px 20px',
              border: 'none',
              borderRadius: '8px',
              fontWeight: '600',
              cursor: 'pointer'
            }}
          >
            Submit
          </button>
        </form>
      </div>

      <div style={{
        marginTop: '30px',
        backgroundColor: '#1a1a1a',
        padding: '20px',
        borderRadius: '12px',
        border: '1px solid rgba(0,255,136,0.08)',
        color: '#bbb'
      }}>
        <h4 style={{ color: '#00ff88' }}>Other Ways to Reach Us</h4>
        <p>Email: support@propelloai.com</p>
        <p>Phone: +91-98765-43210</p>
        <p>Support Hours: Mon–Fri, 9AM–6PM IST</p>
      </div>
    </div>
  );
};

export default ContactPage;

import React, { useState } from 'react';

const AuthModal = ({ onClose }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle auth logic here
    onClose();
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    // Handle forgot password logic here
    alert(`Password reset link sent to ${email}`);
    setShowForgotPassword(false);
  };

  return (
    <div style={{ 
      position: 'fixed', 
      top: 0, 
      left: 0, 
      right: 0, 
      bottom: 0, 
      backgroundColor: 'rgba(0,0,0,0.8)', 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center',
      zIndex: 1000
    }}>
      <div style={{ 
        backgroundColor: '#121218', 
        padding: '40px', 
        borderRadius: '16px', 
        width: '400px',
        boxShadow: '0 10px 30px rgba(0,0,0,0.5)',
        border: '1px solid rgba(0, 255, 136, 0.1)',
        position: 'relative',
        overflow: 'hidden',
        '::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          background: 'linear-gradient(135deg, rgba(0, 255, 136, 0.03) 0%, rgba(0, 255, 136, 0) 100%)',
          zIndex: -1
        }
      }}>
        {showForgotPassword ? (
          <>
            <h2 style={{ 
              color: '#00ff88', 
              marginBottom: '25px', 
              fontSize: '24px',
              textAlign: 'center',
              textShadow: '0 0 10px rgba(0, 255, 136, 0.3)'
            }}>
              Reset Password
            </h2>
            
            <form onSubmit={handleForgotPassword}>
              <input 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle} 
                type="email"
                required
              />
              
              <button style={btnStyle} type="submit">
                Send Reset Link
              </button>
              
              <p style={{ 
                color: 'rgba(0, 255, 136, 0.7)', 
                marginTop: '20px', 
                textAlign: 'center',
                fontSize: '14px'
              }}>
                Remember your password?{' '}
                <span 
                  onClick={() => setShowForgotPassword(false)} 
                  style={{ 
                    color: '#00ff88', 
                    cursor: 'pointer',
                    fontWeight: '600',
                    textShadow: '0 0 8px rgba(0, 255, 136, 0.3)',
                    transition: 'all 0.2s ease',
                    ':hover': {
                      textShadow: '0 0 12px rgba(0, 255, 136, 0.5)'
                    }
                  }}
                > 
                  Sign In
                </span>
              </p>
            </form>
          </>
        ) : (
          <>
            <h2 style={{ 
              color: '#00ff88', 
              marginBottom: '25px', 
              fontSize: '24px',
              textAlign: 'center',
              textShadow: '0 0 10px rgba(0, 255, 136, 0.3)'
            }}>
              Welcome to PROPELLO AI
            </h2>
            
            <form onSubmit={handleSubmit}>
              <input 
                placeholder="Email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={inputStyle} 
                type="email"
                required
              />
              <input 
                placeholder="Password" 
                type="password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={inputStyle} 
                required
              />
              
              <p 
                onClick={() => setShowForgotPassword(true)}
                style={{ 
                  color: '#00ff88', 
                  cursor: 'pointer', 
                  fontSize: '14px',
                  textAlign: 'right',
                  margin: '10px 0 20px',
                  textShadow: '0 0 8px rgba(0, 255, 136, 0.2)',
                  transition: 'all 0.2s ease',
                  ':hover': {
                    textShadow: '0 0 12px rgba(0, 255, 136, 0.4)'
                  }
                }}
              >
                Forgot Password?
              </p>
              
              <button style={btnStyle} type="submit">
                Login
              </button>
            </form>
          </>
        )}
        
        <button 
          onClick={onClose} 
          style={{ 
            marginTop: '20px', 
            background: 'none', 
            border: '1px solid rgba(0, 255, 136, 0.3)', 
            color: '#00ff88', 
            padding: '12px 16px',
            width: '100%',
            borderRadius: '8px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '600',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
            ':hover': {
              background: 'rgba(0, 255, 136, 0.1)',
              boxShadow: '0 4px 15px rgba(0, 255, 136, 0.2)',
              transform: 'translateY(-2px)'
            },
            ':active': {
              transform: 'translateY(0)'
            }
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  );
};

const inputStyle = {
  display: 'block',
  width: '100%',
  padding: '14px 16px',
  margin: '10px 0',
  backgroundColor: 'rgba(0, 255, 136, 0.03)',
  border: '1px solid rgba(0, 255, 136, 0.2)',
  borderRadius: '8px',
  color: '#fff',
  fontSize: '14px',
  transition: 'all 0.3s ease',
  ':focus': {
    borderColor: '#00ff88',
    outline: 'none',
    boxShadow: '0 0 0 2px rgba(0, 255, 136, 0.2)',
    backgroundColor: 'rgba(0, 255, 136, 0.05)'
  }
};

const btnStyle = {
  background: 'linear-gradient(90deg, #00ff88 0%, #00cc6a 100%)',
  color: '#000',
  padding: '14px',
  width: '100%',
  border: 'none',
  borderRadius: '8px',
  fontWeight: '700',
  fontSize: '15px',
  cursor: 'pointer',
  transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
  boxShadow: '0 4px 15px rgba(0, 255, 136, 0.3)',
  position: 'relative',
  overflow: 'hidden',
  ':hover': {
    transform: 'translateY(-3px)',
    boxShadow: '0 6px 20px rgba(0, 255, 136, 0.4)',
    '::after': {
      opacity: 1
    }
  },
  ':active': {
    transform: 'translateY(0)'
  },
  '::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: 'linear-gradient(90deg, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0) 100%)',
    opacity: 0,
    transition: 'opacity 0.3s ease'
  }
};

export default AuthModal;
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../redux/slices/authSlice';

export default function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { initials, firstName, lastName, userEmail } = useSelector(state => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate('/');
  };

  return (
    <nav style={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '15px 30px',
      backgroundColor: '#f8f9fa',
      borderBottom: '1px solid #e9ecef',
      marginBottom: '20px',
      borderRadius: '8px'
    }}>
      <div style={{
        fontSize: '18px',
        fontWeight: '600',
        color: '#007bff',
        letterSpacing: '0.5px'
      }}>
        Dashboard
      </div>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '20px'
      }}>
        <div style={{
          display: 'flex',
          alignItems: 'center',
          gap: '15px',
          backgroundColor: 'white',
          padding: '10px 20px',
          borderRadius: '8px',
          border: '1px solid #e0e0e0',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.06)'
        }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '50%',
            backgroundColor: '#007bff',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            color: 'white',
            fontWeight: '700',
            fontSize: '16px'
          }}>
            {initials || 'U'}
          </div>

          <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }}>
            <p style={{
              margin: '0',
              fontSize: '13px',
              color: '#999',
              fontWeight: '500',
              textTransform: 'uppercase',
              letterSpacing: '0.3px'
            }}>Logged In As</p>
            <p style={{
              margin: '4px 0 0 0',
              fontSize: '15px',
              color: '#1a1f3a',
              fontWeight: '700',
              letterSpacing: '0.2px'
            }}>
              {firstName} {lastName}
            </p>
            <p style={{
              margin: '2px 0 0 0',
              fontSize: '12px',
              color: '#999'
            }}>
              {userEmail}
            </p>
          </div>
        </div>

        <button 
          onClick={handleLogout}
          style={{
            padding: '8px 16px',
            backgroundColor: '#dc3545',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '14px',
            fontWeight: '500',
            transition: 'all 0.3s ease'
          }}
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = '#c82333';
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = '#dc3545';
          }}
        >
          Logout
        </button>
      </div>
    </nav>
  );
}

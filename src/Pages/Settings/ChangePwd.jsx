import React, { useState, useEffect } from 'react';
import SettingSidebar from '../../Components/SettingSidebar';
import ScrollReveal from 'scrollreveal';

const ChangePwd = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (newPassword !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    // Logic to handle password change goes here
    console.log('Password changed successfully!');
    setCurrentPassword('');
    setNewPassword('');
    setConfirmPassword('');
    setError('');
  };
  useEffect(() => {
    ScrollReveal({
      reset: true,
      distance: '100px',
      duration: 2500,
      delay: 40
    });

    ScrollReveal().reveal('.settings-right', { origin: 'left' });
  }, []);

  return (
    <div className="settings-container">
      <h1 className="settings-heading">Settings and Privacy</h1>
      <div className="settings-content">
        <SettingSidebar />
        <div className="settings-right changepwd">
          <div className="update-detail text-center">
            <h1>Change password</h1>
          </div>
          <div className="change-password-form">
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="currentPassword">Current Password</label>
                <input
                  type="password"
                  id="currentPassword"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="newPassword">New Password</label>
                <input
                  type="password"
                  id="newPassword"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm New Password</label>
                <input
                  type="password"
                  id="confirmPassword"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </div>
              {error && <p className="error-message">{error}</p>}
              <button type="submit" className="change-password-btn">
                Change Password
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangePwd;

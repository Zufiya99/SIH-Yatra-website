import React from 'react';
import { Link } from 'react-router-dom';

const SettingSidebar = () => {
  return (
    <>
      <div className="settings-left">
        <nav>
          <ul className='no-bullets'>
            <li><Link to="/about-us" className='link'>About</Link></li>
            <li><Link to="/help-center" className='link'>Help Center</Link></li>
            <li><Link to="/privacy-policy" className='link'>Privacy Policy</Link></li>
            <li><Link to="/change-password" className='link'>Change Password</Link></li>
          </ul>
        </nav>
      </div>
    </>
  )
}

export default SettingSidebar;

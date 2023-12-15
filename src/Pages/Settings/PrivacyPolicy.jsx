import React, { useEffect } from 'react';
import SettingSidebar from '../../Components/SettingSidebar';
import ScrollReveal from 'scrollreveal';

const PrivacyPolicy = () => {
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
        <div className="settings-right scrollable-content">
          <div className="update-detail text-center">
            <h1>Terms and privacy</h1>
          </div>
          <div className="privacy-policy">
            <div className="privacy-column">
              <h3>Privacy Policy</h3>
              <ul>
                <li>At Yatra, the privacy of our visitors is of utmost importance to us. This privacy policy document outlines the types of personal information received and collected by Yatra and how it is used.</li>
              </ul>
              <h3>Log Files</h3>
              <ul>
                <li>Yatra employs log files containing internet protocol (IP) addresses, browser types, Internet Service Provider (ISP), date/time stamps, referring/exit pages, and click numbers. These logs help analyze trends, administer the site, track user movement, and gather demographic information.</li>
              </ul>
            </div>
            <div className="privacy-column">
              <h3>Cookies and Web Beacons</h3>
              <ul>
                <li>Yatra uses cookies to store visitor preferences, record user-specific information on visited pages, and customize content based on browser types or other details sent via browsers.</li>
              </ul>
              <h3>Personal Information</h3>
              <ul>
                <li>Any personal information collected by Yatra is voluntarily submitted by users, such as through contact forms or email subscriptions. This data is used solely for the stated purpose at the time of collection and isn't shared with third parties without explicit consent, except when required by law.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;

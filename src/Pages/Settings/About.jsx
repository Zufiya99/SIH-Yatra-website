import React from 'react';
import { useEffect } from 'react';
import SettingSidebar from '../../Components/SettingSidebar';
import ScrollReveal from 'scrollreveal';

const About = () => {
  useEffect(() => {
    ScrollReveal({
      reset: true,
      distance: '100px',
      duration: 2500,
      delay: 40
    });

    ScrollReveal().reveal('.settings-right', { origin: 'left' });
  });
  return (
    <>
      <div className="settings-container">
        <h1 className="settings-heading">Settings and Privacy</h1>
        <div className="settings-content">
          <SettingSidebar />
          <div className="settings-right">
            <div className="update-detail text-center">
              <h1>About Us</h1>
            </div>
            
          </div>
        </div>
      </div>
    </>
  )
}

export default About;

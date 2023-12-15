// import React from 'react';
// import { useEffect } from 'react';
// import SettingSidebar from '../../Components/SettingSidebar';
// import ScrollReveal from 'scrollreveal';

// const Help = () => {
//   useEffect(() => {
//     ScrollReveal({
//       reset: true,
//       distance: '100px',
//       duration: 2500,
//       delay: 40
//     });

//     ScrollReveal().reveal('.settings-right', { origin: 'left' });
//   });
//   return (
//     <div>
//       <div className="settings-container">
//         <h1 className="settings-heading">Settings and Privacy</h1>
//         <div className="settings-content">
//           <SettingSidebar />
//           <div className="settings-right">
//             <div className="update-detail text-center">
//               <h1>Contact us for the help</h1>
//             </div>
//             <div className="content">
//               <div className="help-section">
//                 <h2 className="section-title">Welcome to our Help Center</h2>
//                 <p className="section-description">
//                   If you need assistance or have any queries, our support team is here to help you.
//                   Please feel free to reach out to us using the contact information below.
//                 </p>
//                 <div className="contact-info">
//                   <h3>Contact Information:</h3>
//                   <p>Email: support@example.com</p>
//                   <p>Phone: +1-123-456-7890</p>
//                   {/* You can add additional contact details */}
//                 </div>
//               </div>
//               <div className="faq-section">
//                 <h2 className="section-title">Frequently Asked Questions</h2>
//                 <p className="section-description">
//                   Check our frequently asked questions for quick answers to common queries.
//                 </p>
//                 {/* Add FAQ content here */}
//                 <div className="faq-list">
//                   <p>Q: How do I reset my password?</p>
//                   <p>A: To reset your password, go to the 'Forgot Password' page...</p>
//                   {/* Add more FAQ items */}
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Help
import React from 'react';
import { useEffect } from 'react';
import SettingSidebar from '../../Components/SettingSidebar';
import ScrollReveal from 'scrollreveal';
import { IoLogoTwitter } from "react-icons/io";
import { FaInstagram } from "react-icons/fa";
import { FaTelegramPlane } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaSlack } from "react-icons/fa";
const Help = () => {
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
    <div>
      <div className="settings-container">
        <h1 className="settings-heading">Settings and Privacy</h1>
        <div className="settings-content">
          <SettingSidebar />
          <div className="settings-right scrollable-content">
            <div className="update-detail text-center">
              <h1>Contact us for help</h1>
            </div>
            <div className="content">
              <div className="help-section">
                <h2 className="section-title">Welcome to our Help Center</h2>
                <p className="section-description">
                  If you need assistance or have any queries, our support team is here to help you.
                  Please feel free to reach out to us using the contact information below.
                </p>
                <div className="contact-info">
                  <h3>Contact Information:</h3>
                  <p> <b>Email</b>: yatra@mhssce.ac.in</p>
                  <p> <b>Phone</b>: +1-123-456-7890</p>
                </div>
                <div className="social-media-info">
                  <h3>Reach out to us Social Media</h3>
                  <a
                    href="https://www.linkedin.com/in/zufiyaidrisi9797/"
                    target="_blank"><FaInstagram className="social-icon"/></a>
                  <a href="https://twitter.com/Zufiya_Idrisi" target="_blank"
                  ><IoLogoTwitter className="social-icon"/></a>
                  <a href="https://github.com/Zufiya99" target="_blank"
                  ><FaWhatsapp className="social-icon"/></a>
                  <a href="https://www.instagram.com/_zufi_99_/" target="_blank"
                  ><FaTelegramPlane className="social-icon"/>
                  </a>
                  <a href="https://www.instagram.com/_zufi_99_/" target="_blank"
                  ><FaSlack className="social-icon"/>
                  </a>
              </div>
            </div>
            <div className="faq-section">
              <h2 className="section-title">Frequently Asked Questions</h2>
              <p className="section-description">
                Check our frequently asked questions for quick answers to common queries.
              </p>
              {/* Add FAQ content here */}
              <div className="faq-list">
                <p className='questions'>Q: How do I reset my password?</p>
                <p>A: To reset your password, go to the 'Forgot Password' page...</p>
                <p className='questions'>Q: How do I reset my password?</p>
                <p>A: To reset your password, go to the 'Forgot Password' page...</p>
                <p className='questions'>Q: How do I reset my password?</p>
                <p>A: To reset your password, go to the 'Forgot Password' page...</p>
                <p className='questions'>Q: How do I reset my password?</p>
                <p>A: To reset your password, go to the 'Forgot Password' page...</p>
                <p className='questions'>Q: How do I reset my password?</p>
                <p>A: To reset your password, go to the 'Forgot Password' page...</p>
                {/* Add more FAQ items */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div >
  );
};

export default Help;

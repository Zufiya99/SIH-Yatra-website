import React, { useEffect, useState } from 'react';
import ScrollReveal from 'scrollreveal';
import SettingSidebar from '../../Components/SettingSidebar';

const About = () => {
  const [userData, setUserData] = useState({
    firstName: 'John',
    lastName: 'Doe',
    email: 'johndoe@example.com',
    location: 'Mumbai',
    role: 'Frontend developer',
    contactNumber: '123-456-7890',
    profilePic: 'https://cdn5.vectorstock.com/i/1000x1000/25/54/businessman-profile-ico-vector-20022554.jpg',
    bio: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil facere iure harum autem commodi dolores, tempore accusamus assumenda alias dolore! Qui, numquam repudiandae! Quibusdam officiis totam quaerat consequuntur mollitia fugiat fugit eos! Veniam, illo."
  });

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
            <h1>About</h1>
          </div>
          <div className="user-details ">
            <div className="profile-pic">
              {/* Displaying profile picture */}
              <img src={userData.profilePic} alt="Profile" width="200px" className='profile-img' />
            </div>
            <div className="personal-details">
              {/* Displaying user details */}
              <div className="left-details">
                <div className="details">
                  <label>First Name:</label>
                  <p>{userData.firstName}</p>
                </div>
                <div className="details">
                  <label>Last Name:</label>
                  <p>{userData.lastName}</p>
                </div>
                <div className="details">
                  <label>Email:</label>
                  <p>{userData.email}</p>
                </div>
              </div>
              <div className="right-details">
                <div className="details">
                  <label>Location:</label>
                  <p>{userData.location}</p>
                </div>
                <div className="details">
                  <label>Role:</label>
                  <p>{userData.role}</p>
                </div>
                <div className="details">
                  <label>Contact Number:</label>
                  <p>{userData.contactNumber}</p>
                </div>
              </div>
              <div className="details">
                <label>Bio: </label>
                <p>{userData.bio}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

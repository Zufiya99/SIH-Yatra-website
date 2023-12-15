import React, { useEffect } from 'react';
import { TextField } from '@mui/material';
import { Grid } from '@mui/material';
import ScrollReveal from 'scrollreveal';
import SettingSidebar from '../Components/SettingSidebar';

const Settings = () => {

  useEffect(() => {
    ScrollReveal({
      reset: true,
      distance: '100px',
      duration: 2500,
      delay: 100
    });

    ScrollReveal().reveal('.settings-right', { origin: 'left' });
  });

  return (
    <div className="settings-container">
      <h1 className="settings-heading">Settings and Privacy</h1>
      <div className="settings-content">
        <SettingSidebar />
        <div className="settings-right scrollable-content">
          <div className="update-detail text-center">
            <h1>Update details</h1>
          </div>
          <div className="personal-details">
            <div className="profile-pic">
              <img src="https://cdn5.vectorstock.com/i/1000x1000/25/54/businessman-profile-ico-vector-20022554.jpg" alt="" width="120px" className='profile-img' />
            </div>
            <div className="details">
              <h3>John Doe</h3>
              <h6>Frontend developer</h6>
            </div>
          </div>
          <div className="custom-textfields">
            <div className="textfields-left">
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <TextField id="outlined-basic" label="First Name" variant="outlined" size="small" className="textfieldArea" />
                </Grid>
                <Grid item xs={12}>
                  <TextField id="outlined-basic" label="Email Id" variant="outlined" size="small" className="textfieldArea" />
                </Grid>
                <Grid item xs={12}>
                  <TextField id="outlined-basic" label="Role" variant="outlined" size="small" className="textfieldArea" />
                </Grid>
              </Grid>
            </div>

            <div className="textfields-right">
              <Grid container spacing={4}>
                <Grid item xs={12}>
                  <TextField id="outlined-basic" label="Last Name" variant="outlined" size="small" className="textfieldArea" />
                </Grid>
                <Grid item xs={12}>
                  <TextField id="outlined-basic" label="Contact" variant="outlined" size="small" className="textfieldArea" />
                </Grid>
                <Grid item xs={12}>
                  <TextField id="outlined-basic" label="Location" variant="outlined" size="small" className="textfieldArea" />
                </Grid>
              </Grid>
            </div>
          </div>
          <button type="button" class="btn btn-outline-info update-btn">Update details</button>
        </div>
      </div>
    </div>
  );
};

export default Settings;
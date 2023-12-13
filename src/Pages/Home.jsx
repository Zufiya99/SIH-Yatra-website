import React from 'react';
import { BsFillSuitcase2Fill, BsSearch } from "react-icons/bs";
import ImageWithText from '../Components/ImageWithText'
import "../App.css"

const Home = () => {
  return (
    <>
      <div className="home-container">
        <div className="header home-header">
          <div className="top">
            <BsFillSuitcase2Fill className='home-icon' />
            <span className='home-heading'>Yatra</span>
          </div>
          <div className="marquee-sec">
            {/* <marquee behavior="" direction="" id="marquee">Ministry of tours and travels</marquee> */}
            <h4 id="blinking-logo">Ministry of tours and travel</h4>
          </div>
        </div>
        <div className="home-section">
          <ImageWithText/>
        </div>
      </div>
    </>
  )
}

export default Home

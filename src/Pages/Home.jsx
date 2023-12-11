import React from 'react';
import { BsFillSuitcase2Fill, BsSearch } from "react-icons/bs";
import "../App.css"

const Home = () => {
  return (
    <>
      <div className="header home-header">
        <div className="marquee-sec">
          <marquee behavior="alternate" direction="" id="marquee">Ministry of tours and travels</marquee>
        </div>
        <div className="top">
          <BsFillSuitcase2Fill className='home-icon' />
          <span className='home-heading'>Yatra</span>
        </div>

      </div>
    </>
  )
}

export default Home

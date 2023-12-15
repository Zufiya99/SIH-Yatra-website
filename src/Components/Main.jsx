import React from 'react';
import { BsFillSuitcase2Fill, BsSearch } from "react-icons/bs";
import Cards from './Cards';
import GridBoxes from './GridBoxes';
import ScrollReveal from 'scrollreveal';
import { useEffect } from 'react';

const Main = () => {
  useEffect(() => {
    ScrollReveal({
      reset: true,
      distance: '100px',
      duration: 2500,
      delay: 40
    });

    ScrollReveal().reveal('.main-section', { origin: 'left' });
  }, []);
  return (
    <>
      <div className="main-container">
        {/* Header */}
        <div className="header">
          <div className="top">
            <BsFillSuitcase2Fill className='travel-icon' />
            <span className='heading'>Yatra</span>
          </div>
          <div className="search-box">
            <span className="search-icon">
              <BsSearch />
            </span>
            <input type="text" id="search-bar" placeholder='Search' />
          </div>
        </div>
        {/* Main card section */}
        <div className="main-section">
          <div className="cards-section">
            <Cards />
            <GridBoxes />
          </div>
        </div>
      </div>
    </>
  )
}

export default Main;

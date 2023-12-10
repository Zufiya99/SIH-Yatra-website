// import React from 'react'
// import { FaHome } from "react-icons/fa";
// import { IoBagCheckSharp } from "react-icons/io5";
// import { MdOutlinePeopleAlt } from "react-icons/md";
// import { FaPowerOff } from "react-icons/fa";
// import { IoMdSettings } from "react-icons/io";

// const Sidebar = () => {
//   return (
//     <div className="grid-container">
//       <div className="sidebar">
//         <div className="top-icons">
//           <FaHome className="icon" />
//           <IoBagCheckSharp className="icon" />
//           <MdOutlinePeopleAlt className="icon" />
//           <IoMdSettings className="icon" />
//         </div>
//         <div className="bottom-icon">
//         <FaPowerOff className="icon" />
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Sidebar;

import React from 'react'
import { FaHome } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { FaPowerOff } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <>
      <BrowserRouter>
        <div className="grid-container">
          <div className="sidebar">
            <div className="top-icons">
              <Link to="/"><FaHome className="icon" /></Link>
              <Link to="/dashboard"><MdOutlineDashboard className="icon" /></Link>
              <Link to="/companies"><MdOutlinePeopleAlt className="icon" /></Link>
              <Link to="/settings"><IoMdSettings className="icon" /></Link>
            </div>
            <div className="bottom-icon">
              <Link to="/logout"><FaPowerOff className="icon" /></Link>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  )
}

export default Sidebar;


import React from 'react'
import { FaHome } from "react-icons/fa";
import { IoBagCheckSharp } from "react-icons/io5";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { FaPowerOff } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

const Sidebar = () => {
  return (
    <div className="grid-container">
      <div className="sidebar">
        <div className="top-icons">
          <FaHome className="icon" />
          <IoBagCheckSharp className="icon" />
          <MdOutlinePeopleAlt className="icon" />
          <IoMdSettings className="icon" />
        </div>
        <div className="bottom-icon">
        <FaPowerOff className="icon" />
        </div>
      </div>
    </div>
  )
}

export default Sidebar;

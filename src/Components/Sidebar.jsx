import React from 'react';
import { FaHome } from "react-icons/fa";
import { MdOutlineDashboard } from "react-icons/md";
import { MdOutlinePeopleAlt } from "react-icons/md";
import { FaPowerOff } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
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
  );
}

export default Sidebar;

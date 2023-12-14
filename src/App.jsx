import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Companies from './Pages/Companies';
import Home from './Pages/Home';
import Settings from './Pages/Settings';
import Logout from './Pages/Logout';
import Main from './Components/Main';
import Sidebar from './Components/Sidebar';
import "./App.css"
import About from './Pages/Settings/About';
import ChangePwd from './Pages/Settings/ChangePwd';
import Help from './Pages/Settings/Help';
import PrivacyPolicy from './Pages/Settings/PrivacyPolicy';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <div className="grid-container">
          <Sidebar />
          <Routes>
            <Route path="/dashboard" element={<Main />} />
            <Route path="/" element={<Home />} />
            <Route path="/companies" element={<Companies />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/logout" element={<Logout />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/change-password" element={<ChangePwd />} />
            <Route path="/help-center" element={<Help />} />
            <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

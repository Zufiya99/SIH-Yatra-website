import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Companies from './Pages/Companies';
import Home from './Pages/Home';
import Settings from './Pages/Settings';
import Logout from './Pages/Logout';
import Main from './Components/Main';
import Sidebar from './Components/Sidebar';
import "./App.css"

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
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

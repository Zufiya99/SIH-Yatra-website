import React from 'react';
import './App.css';
import Sidebar from './Components/Sidebar';
import Main from './Components/Main';


const App = () => {
  return (
    <div className="app-container">
      <div className="grid-container">
        <Sidebar />
        <Main />
      </div>
    </div>
  );
};

export default App;

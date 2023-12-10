// import React from 'react';
// import './App.css';
// import Sidebar from './Components/Sidebar';
// import Main from './Components/Main';

// const App = () => {
//   return (
//     <div className="app-container">
//       <div className="grid-container">
//         <Sidebar />
//         <Main />
//       </div>
//     </div>
//   );
// };

// export default App;
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Companies from './Pages/Companies';
import Home from './Pages/Home';
import Settings from './Pages/Settings';
import Logout from './Pages/Logout';
import Main from './Components/Main';
import Sidebar from './Components/Sidebar'

const App = () => {
  return (
      <div className="app-container">
        <Sidebar />
        <Routes>
          <Route path="/dashboard" element={<Main />} />
          <Route path="/" element={<Home />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/settings" element={<Settings />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </div>
  );
}

export default App;

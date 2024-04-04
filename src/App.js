import React from 'react';
import './App.css';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
// import Sidebar from './components/Sidebar/Sidebar';
// import Dashboard from './components/Pages/dashboard';
// import MLModel from './components/Pages/ml';
// import Personal from './components/Pages/personal';
// import Alerts from './components/Pages/alerts';
// import Analytics from './components/Pages/analytics';
import Authentication from './components/Authentication/authentication';

function App() {
  return (
    <Authentication />
    // <div className="App">
    //   <Router>
    //     <Sidebar />
    //     <div className='AppGlass'>
    //       <Routes> {/* Wrap your Route components inside Routes */}
    //         <Route path="/" element={<Dashboard />} />
    //         <Route path="/ml" element={<MLModel />} />
    //         <Route path="/personal" element={<Personal />} />
    //         <Route path="/alert" element={<Alerts />} />
    //         <Route path="/analytics" element={<Analytics />} />
    //       </Routes>
    //     </div>
    //   </Router>
    // </div>
  );
}

export default App;

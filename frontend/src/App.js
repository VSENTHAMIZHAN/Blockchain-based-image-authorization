import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './LandingPage';
import MVPPage from './MVPPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/mvp" element={<MVPPage />} />
      </Routes>
    </Router>
  );
}

export default App;
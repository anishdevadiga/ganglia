import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Techvrse from './components/Techvrse';

const Home = () => {
  return (
    <div className="container mt-5">
      <h1>Welcome to Ganglia Technologies</h1>
      <p>Your one-stop solution for tech innovation.</p>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/techvrse" element={<Techvrse />} />
      </Routes>
    </Router>
  );
};

export default App;

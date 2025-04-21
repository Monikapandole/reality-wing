import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Header from './components/Header';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import CategoryPage from './components/CategoryPage';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <div className="pt-[80px]"> 
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
           <Route path="/about-us" element={<AboutUs />} />
           <Route path="/sign-up" element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/category/:name" element={<CategoryPage />} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

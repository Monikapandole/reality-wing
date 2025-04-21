import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Header from './components/Header';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import CategoryPage from './components/CategoryPage';
import ScrollToTop from './components/ScrollToTop';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <div className="pt-[80px]"> 
          <Routes>
          

            <Route path="/" element={<><ScrollToTop /><Home /></>} />
            <Route path="/home" element={<><ScrollToTop /><Home /></>} />
           <Route path="/about-us" element={<><ScrollToTop /><AboutUs /></>} />
           <Route path="/sign-up" element={<><ScrollToTop /><SignUpPage /></>} />
            <Route path="/login" element={<><ScrollToTop /><LoginPage /></>} />
            <Route path="/category/:name" element={<><ScrollToTop /><CategoryPage /></>} />

          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;

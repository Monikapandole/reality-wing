import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import './App.css';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import Header from './components/Header';
import SignUpPage from './pages/SignUpPage';
import LoginPage from './pages/LoginPage';
import CategoryPage from './components/CategoryPage';
import ScrollToTop from './components/ScrollToTop';
import Blog from './pages/Blog';
import CategoryListPage from './components/CategoryListPage';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <div className="pt-[80px]">
          <Routes>
            <Route path="/" element={<><ScrollToTop /><Home /></>} />
            <Route path="/home" element={<><ScrollToTop /><Home /></>} />
            <Route path="/about-us" element={<><ScrollToTop /><AboutUs /></>} />
            <Route path="/blog" element={<><ScrollToTop /><Blog /></>} />
            <Route path="/sign-up" element={<><ScrollToTop /><SignUpPage /></>} />
            <Route path="/login" element={<><ScrollToTop /><LoginPage /></>} />
            {/* Show all categories */}
            <Route path="/category/:name" element={<CategoryListPage />} />

            {/* Show details for an individual item */}
            <Route path="/category/:name/:id" element={<CategoryPage />} />          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

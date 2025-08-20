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
import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsAndConditions from './pages/TermsAndConditions';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import PropertyListPage from './pages/property';
import AddPropertyForm from './components/propertyDetails/addPropertyForm';
import PropertyViewPage from './components/propertyDetails/PropertyViewPage';
import Profile from './pages/Profile';
import ForgotPasswordPage from './pages/ForgotPasswordPage';
import ResidentialDetail from './components/ResidentialDetail';
import AllPropertiesPage from './pages/AllPropertiesPage';
function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
      <div className="bg-[#f5f5f5]">
        <Header />
        <div className="pt-[80px]">
          <Routes>
            <Route path="/" element={<><ScrollToTop /><Home /></>} />
            <Route path="/home" element={<><ScrollToTop /><Home /></>} />
            <Route path="/about-us" element={<><ScrollToTop /><AboutUs /></>} />
            <Route path="/blog" element={<><ScrollToTop /><Blog /></>} />
            <Route path="/sign-up" element={<><ScrollToTop /><SignUpPage /></>} />
            <Route path="/login" element={<><ScrollToTop /><LoginPage /></>} />
            <Route path="/forgot-password" element={<><ScrollToTop /><ForgotPasswordPage /></>} />
            <Route path="/category/:id" element={<><ScrollToTop /><CategoryListPage /></>} />
            <Route path="/area/:areaId" element={<><ScrollToTop /><CategoryListPage /></>} />
            <Route path="/properties-list" element={<><ScrollToTop /><PropertyListPage /></>} />
            <Route path="/add-property" element={<><ScrollToTop /><AddPropertyForm /></>} />
            <Route path="/property/:id" element={<><ScrollToTop /><PropertyViewPage /></>} />
            <Route path="/all-properties" element={<AllPropertiesPage />} />
            <Route path="/project/:id" element={<ResidentialDetail />} />
            <Route path="/edit-property/:id" element={<><ScrollToTop /><AddPropertyForm /></>} />
            <Route path="/profile" element={<><ScrollToTop /><Profile /></>} />
            <Route path="/category/:name/:id" element={<><ScrollToTop /><CategoryPage /></>} />
            <Route path="/privacy-policy" element={<><ScrollToTop /><PrivacyPolicy /></>} />
            <Route path="/terms-and-conditions" element={<><ScrollToTop /><TermsAndConditions /></>} />
          </Routes>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

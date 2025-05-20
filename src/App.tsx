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
function App() {
  return (
    <BrowserRouter>
      <ToastContainer />
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
            <Route path="//properties-list" element={<PropertyListPage />} />
            <Route path="/add-property" element={<AddPropertyForm />} />
            <Route path="/property/:id" element={<PropertyViewPage />} />
            <Route path="/edit-property/:id" element={<AddPropertyForm />} />
            {/* Show details for an individual item */}
            <Route path="/category/:name/:id" element={<CategoryPage />} />
            <Route path="/privacy-policy" element={<><ScrollToTop /><PrivacyPolicy /></>} />
            <Route path="/terms-and-conditions" element={<><ScrollToTop /><TermsAndConditions /></>} />
          </Routes>

        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

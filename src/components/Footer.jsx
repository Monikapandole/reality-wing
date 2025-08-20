import React from 'react';
import Logo from '../assets/footerLogo.png'; // Adjust the path if needed

const Footer = () => {
  return (
    <footer className="bg-[#f5f5f5] shadow-lg text-black pt-12 pb-6 text-left">
      <div className="px-6 grid grid-cols-1 md:grid-cols-4 gap-10">

        {/* About Section */}
        <div>
          <img src={Logo} alt="Reality Wing Logo" className="h-14 mb-4" />
          <p className="text-sm">
            Reality Wing helps you find rental properties quickly and easily. Whether you're a tenant or landlord, our platform makes renting effortless.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-black">Home</a></li>
            <li><a href="/" className="hover:text-black">Browse Properties</a></li>
            <li><a href="/" className="hover:text-black">List Your Property</a></li>
            <li><a href="/" className="hover:text-black">Contact Us</a></li>
          </ul>
        </div>

        {/* Popular Cities */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-4 ml-10">Popular Areas</h3>
          <div className="flex flex-row gap-8">
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-black">Vijay Nagar</a></li>
              <li><a href="/" className="hover:text-black">Palasia</a></li>
              <li><a href="/" className="hover:text-black">Bhawarkua</a></li>
              <li><a href="/" className="hover:text-black">Rau</a></li>
            </ul>
            <ul className="space-y-2 text-sm">
              <li><a href="/" className="hover:text-black">Scheme No. 78</a></li>
              <li><a href="/" className="hover:text-black">Bengali Square</a></li>
              <li><a href="/" className="hover:text-black">MR 10 / MR 11</a></li>
              <li><a href="/" className="hover:text-black">Khajrana</a></li>
            </ul>
          </div>
        </div>

        {/* App Download & Social */}
        <div>
          <h3 className="text-lg font-semibold text-black mb-4">Get the App</h3>
          <div className="flex flex-col space-y-3 mb-4 items-start">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-10 w-auto" />
            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-10 w-auto" />
          </div>
          <div className="flex space-x-4 text-xl">
            <a href="/"><i className="fab fa-facebook hover:text-black"></i></a>
            <a href="/"><i className="fab fa-x-twitter hover:text-black"></i></a>
            <a href="/"><i className="fab fa-linkedin hover:text-black"></i></a>
            <a href="/"><i className="fab fa-instagram hover:text-black"></i></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-left flex text-sm text-black px-6 gap-6 flex-wrap">
        <p>&copy; 2025 Reality Wing. All rights reserved.</p>
        <div className="space-x-4">
          <a href="/privacy-policy" className="hover:text-black">Privacy Policy</a>
          <a href="/terms-and-conditions" className="hover:text-black">Terms of Service</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

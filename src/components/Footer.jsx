import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-red-600 to-red-400 text-white pt-12 pb-6 text-left">
      <div className=" px-6 grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About Section */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-4">RentHub</h2>
          <p className="text-sm">
            RentHub helps you find rental properties quickly and easily. Whether you're a tenant or landlord, our platform makes renting effortless.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">Home</a></li>
            <li><a href="/" className="hover:text-white">Browse Properties</a></li>
            <li><a href="/" className="hover:text-white">List Your Property</a></li>
            <li><a href="/" className="hover:text-white">Contact Us</a></li>
          </ul>
        </div>

        {/* Popular Cities */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Popular Cities</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="/" className="hover:text-white">New Delhi</a></li>
            <li><a href="/" className="hover:text-white">Mumbai</a></li>
            <li><a href="/" className="hover:text-white">Bangalore</a></li>
            <li><a href="/" className="hover:text-white">Pune</a></li>
          </ul>
        </div>

        {/* App Download & Social */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Get the App</h3>
          <div className="flex flex-col space-y-3 mb-4 items-start">
            <img src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_EN.svg" alt="Google Play" className="h-10 w-auto" />
            <img src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" alt="App Store" className="h-10 w-auto" />
          </div>
          <div className="flex space-x-4 text-xl">
            <a href="/"><i className="fab fa-facebook hover:text-white"></i></a>
            <a href="/"><i className="fab fa-x-twitter hover:text-white"></i></a>
            <a href="/"><i className="fab fa-linkedin hover:text-white"></i></a>
            <a href="/"><i className="fab fa-instagram hover:text-white"></i></a>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="border-t border-gray-700 mt-10 pt-4 text-left flex  text-sm text-white  px-6 gap-6">
        <p>&copy; 2025 RentHub. All rights reserved.</p>
        <div className=" space-x-4">
          <a href="/privacy-policy" className="hover:text-white">Privacy Policy</a>
          <a href="/terms-and-conditions" className="hover:text-white">Terms of Service</a>
          <a href="/" className="hover:text-white">Help</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

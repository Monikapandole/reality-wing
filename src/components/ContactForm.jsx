import React from "react";

const ContactForm = ({ propertyName }) => {
  return (
    <div className="bg-white rounded-2xl shadow-md p-8 w-full max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-4 text-gray-900">
        Looking for a Property in {propertyName}?
      </h2>
      <form className="flex flex-col gap-4">
        <input
          type="text"
          placeholder="Your Name"
          className="border border-gray-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <input
          type="email"
          placeholder="Email"
          className="border border-gray-300 rounded-lg px-4 py-3 text-base focus:outline-none focus:ring-2 focus:ring-red-500"
        />
        <div className="flex gap-2">
          <select className="border border-gray-300 rounded-lg px-2 py-3 text-base focus:outline-none focus:ring-2 focus:ring-red-500 w-24">
            <option value="IN">IND +91</option>
            <option value="US">US +1</option>
            <option value="UK">UK +44</option>
            {/* Add more country codes as needed */}
          </select>
          <input
            type="tel"
            placeholder="Mobile Number"
            className="border border-gray-300 rounded-lg px-4 py-3 text-base flex-1 focus:outline-none focus:ring-2 focus:ring-red-500"
          />
        </div>
        <div className="flex items-center gap-2 text-xs text-gray-500">
          <input type="checkbox" id="terms" className="accent-red-500" />
          <label htmlFor="terms">
            I Agree to MagicBricks' <a href="#" className="underline text-red-500">Terms of Use</a>
          </label>
        </div>
        <button
          type="button"
          className="mt-2 w-full bg-red-600 hover:bg-red-700 text-white font-semibold rounded-full py-3 text-lg shadow transition"
        >
          Get Contact Details
        </button>
      </form>
    </div>
  );
};

export default ContactForm; 
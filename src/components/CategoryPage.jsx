import React from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { FaRupeeSign } from 'react-icons/fa';
import { MdOutlineLocationOn, MdOutlineBedroomParent } from 'react-icons/md';
import { PiArmchairLight } from 'react-icons/pi';
import { FaCalendarAlt } from 'react-icons/fa';

function CategoryPage() {
  const { name } = useParams();
  const location = useLocation();
  const image = location.state?.image;
  const displayName = name.replace(/-/g, " ").replace(/\b\w/g, char => char.toUpperCase());
  const imageUrl = image;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-2xl overflow-hidden flex flex-col md:flex-row">
        {/* Left: Image */}
        <div className="md:w-1/2 w-full">
          <img src={imageUrl} alt={displayName} className="h-full w-full object-cover" />
          <div className="bg-black bg-opacity-70 text-white text-sm px-4 py-2 absolute bottom-0 left-0">
            📌 2 people already contacted yesterday
          </div>
        </div>

        {/* Right: Details */}
        <div className="md:w-1/2 w-full p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-800">{displayName}</h2>

          {/* Configuration */}
          <div className="flex items-center text-gray-700 space-x-2">
            <MdOutlineBedroomParent className="text-xl" />
            <span>1 Bedroom, 1 Bathroom, 2 Balconies with Others</span>
          </div>

          {/* Rent */}
          <div className="flex items-center text-gray-700 space-x-2">
            <FaRupeeSign className="text-xl" />
            <span className="text-lg font-medium">8,000/month</span>
          </div>

          {/* Area */}
          <div className="flex items-center text-gray-700 space-x-2">
            <PiArmchairLight className="text-xl" />
            <span>Super Built-up Area: 550 sq.ft. (51.1 sq.m.)</span>
          </div>
          <div className="ml-7 text-sm text-gray-500">
            Built-up Area: 500 sq.ft. • Carpet Area: 450 sq.ft.
          </div>

          {/* Address */}
          <div className="flex items-center text-gray-700 space-x-2">
            <MdOutlineLocationOn className="text-xl" />
            <span>Silicon City, AB Road, Indore</span>
          </div>

          {/* Furnishing */}
          <div className="flex items-center text-gray-700 space-x-2">
            <PiArmchairLight className="text-xl" />
            <span>Semifurnished</span>
          </div>

          {/* Availability */}
          <div className="flex items-center text-gray-700 space-x-2">
            <FaCalendarAlt className="text-xl" />
            <span>Available from: Immediate</span>
          </div>

          <div className="text-sm text-gray-500">
            Posted by Dealer on Apr 21, 2025
          </div>
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;

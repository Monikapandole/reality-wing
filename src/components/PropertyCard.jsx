import React from "react";
import { useNavigate } from "react-router-dom";

const PropertyCard = ({ image, bhk, price, area, location, images, name, id, ...prop }) => {
  const navigate = useNavigate();

  return (
    <div
      className="bg-white rounded-xl shadow-sm border w-[300px] transition-shadow duration-300 hover:shadow-custom-lg cursor-pointer"
      onClick={() => navigate(`/property/${id}`, { state: { property: prop } })}
    >
      <div className="relative">
        <img src={image} alt={location} className="rounded-t-xl h-48 w-full object-cover" />
        <div className="absolute bottom-2 left-2 bg-black text-white text-xs px-2 py-1 rounded-md opacity-80">
          📷 {images}
        </div>
      </div>
      <div className="p-3">
        <h3 className="text-sm font-semibold">{bhk}</h3>
        <div className="text-lg font-bold text-gray-800 mt-1">
          ₹{price} <span className="font-medium text-sm">|</span>{" "}
          <span className="font-bold text-sm">{area} sqft</span>
        </div>
        <div className="text-sm text-gray-600 mt-1">{location}</div>
        <div className="text-sm text-gray-600">Ready to move</div>
      </div>
    </div>
  );
};

export default PropertyCard;

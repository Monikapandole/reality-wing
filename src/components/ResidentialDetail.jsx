import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ResidentialDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const property = state?.property;

  if (!property) {
    return (
      <div className="text-center py-20 text-xl text-red-500">
        Property data not found. Please go back and select a property again.
      </div>
    );
  }

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  const images = property.residential_images?.length > 0
    ? property.residential_images
    : [property.owner_image];

  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Hero Header */}
      <div className="bg-white shadow-md py-6 px-4 md:px-10">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">
              {property.residential_name}
            </h1>
            <p className="text-gray-600 text-sm md:text-base">
              {property.residential_address}, {property.city}, {property.state} - {property.pincode}
            </p>
          </div>
          <button
            onClick={() => navigate(-1)}
            className="text-sm md:text-base bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700"
          >
            ← Back
          </button>
        </div>
      </div>

      {/* Image Slider */}
      <div className="max-w-7xl mx-auto mt-6 px-4 md:px-10">
        <div className="rounded-xl overflow-hidden shadow-md">
          <Slider {...sliderSettings}>
            {images.map((img, idx) => (
              <div key={idx}>
                <img
                  src={img}
                  alt={`property-${idx}`}
                  className="w-full h-[400px] object-cover"
                />
              </div>
            ))}
          </Slider>
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-7xl mx-auto mt-10 px-4 md:px-10 grid grid-cols-1 md:grid-cols-2 gap-8">

        {/* Left Column */}
        <div className="space-y-6">
          {/* Owner Info */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-indigo-700 mb-4">Owner & Company</h2>
            <div className="text-gray-700 space-y-1">
              <p><strong>Owner:</strong> {property.owner_name}</p>
              <p><strong>Email:</strong> {property.owner_email}</p>
              <p><strong>Contact:</strong> {property.owner_contact}</p>
              <p><strong>Company:</strong> {property.company_name}</p>
            </div>
          </div>

          {/* Project Info */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-indigo-700 mb-4">Project Details</h2>
            <div className="text-gray-700 space-y-1">
              <p><strong>RERA Number:</strong> {property.rera_number}</p>
              <p><strong>Area:</strong> {property.area_name}</p>
              <p><strong>Category:</strong> {property.category_name}</p>
              <p><strong>Status:</strong> {property.status}</p>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="space-y-6">
          {/* Project Specs */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-indigo-700 mb-4">Specifications</h2>
            <div className="text-gray-700 space-y-1">
              <p><strong>Total Area:</strong> {property.total_area} sq.ft.</p>
              <p><strong>Total Plots:</strong> {property.total_plots}</p>
              <p><strong>Facilities:</strong> {property.facilities}</p>
            </div>
          </div>

          {/* Description */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-indigo-700 mb-4">Description</h2>
            <p className="text-gray-700 leading-relaxed">{property.description}</p>
          </div>
        </div>
      </div>

      <div className="h-10" /> {/* Spacer */}
    </div>
  );
};

export default ResidentialDetail;

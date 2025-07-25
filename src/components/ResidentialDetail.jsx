import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import GalleryTwoImageSlider from "./GalleryTwoImageSlider";
import { FaLocationDot, FaUser, FaBuilding, FaEnvelope, FaPhone, FaBuildingShield, FaBed, FaBath, FaRulerCombined, FaBolt, FaDumbbell, FaSchool, FaPlaceOfWorship, FaFaucet, FaChild, FaMedal, FaTree, FaRoad, FaLightbulb } from "react-icons/fa6";
import ContactForm from "./ContactForm";

const RED = "#E53935";
const ORANGE = "#FB8C00";
const WHITE = "#FFFFFF";

const ResidentialDetail = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const property = state?.property;

  if (!property) {
    return (
      <div className="text-center py-20 text-xl" style={{ color: RED }}>
        Property data not found. Please go back and select a property again.
      </div>
    );
  }


  const images = property.residential_images?.length > 0
    ? property.residential_images
    : [property.owner_image];

  // Icon mapping for amenities
  const facilityIconMap = {
    gymnasium: FaDumbbell,
    gym: FaDumbbell,
    school: FaSchool,
    temple: FaPlaceOfWorship,
    water: FaFaucet,
    '24 hours water supply': FaFaucet,
    'kids play area': FaChild,
    tennis: FaMedal,
    park: FaTree,
    road: FaRoad,
    'street light': FaLightbulb,
    'nearby school': FaSchool,
  };

  return (
    <div style={{ background: '#F5F6FA', minHeight: '100vh', fontFamily: 'Inter, Roboto, Arial, sans-serif' }}>
      <div style={{ background: WHITE, boxShadow: "0 2px 8px rgba(229,57,53,0.08)", padding: "2rem 1rem 1rem 1rem" }}>
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-10">
          <div>
            <h1 className="text-4xl font-medium mb-2 " style={{ color: '#111' }}>{property.residential_name}</h1>
            <div className="flex items-center gap-2 mb-1">
              <FaLocationDot style={{ color: ORANGE, fontSize: 24 }} />
              <span className="text-base font-medium" style={{ color: '#111' }}>{property.residential_address}, {property.city}, {property.state} - {property.pincode}</span>
            </div>
          </div>
          <div className="flex flex-col items-end justify-center min-w-[160px]">
            <span className="text-lg font-semibold" style={{ color: ORANGE }}>Total Area</span>
            <span className="text-2xl font-extrabold mt-1" style={{ color: RED }}>
              {property.total_area ? `${property.total_area.toLocaleString()} sq.ft` : 'Contact for Price'}
            </span>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8">
        <div className="p-8 bg-white rounded-2xl shadow-md">
          <GalleryTwoImageSlider images={images} />
        </div>
      </div>
      {/* Main Content & Contact Form Section */}
      <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left: Main Content (2/3 width) */}
        <div className="md:col-span-2 flex flex-col gap-8">
          {/* Description & Features Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {/* Description Card */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#111' }}>Description</h2>
              <p className="text-base mb-8 text-gray-700">{property.description}</p>
              <div className="border-gray-200 flex flex-col sm:flex-row justify-between gap-1 pb-3">
                
                <div className="flex-1 flex items-center gap-3">
                  <span className="text-3xl text-gray-400 pt-3"><FaBed /></span>
                  <div>
                    <div className="text-sm text-gray-500">Area Name</div>
                    <div className="text-xl font-mediumtext-gray-900">{property.area_name || '—'}</div>
                  </div>
                </div>
                {/* Owner Name */}
                <div className="flex-1 flex items-center gap-3   pl-6">
                  <span className="text-3xl text-gray-400 pt-3"><FaBath /></span>
                  <div>
                    <div className="text-sm text-gray-500">Owner Name</div>
                    <div className="text-xl font-mediumtext-gray-900">{property.owner_name || '—'}</div>
                  </div>
                </div>
                {/* Area */}
               
              </div>
              <div className="border-gray-200 border-t border-gray-200 flex flex-col sm:flex-row justify-between gap-1 pb-3">

              <div className="flex-1 flex items-center gap-3  pt-3">
                  <span className="text-3xl text-gray-400 pt-3"><FaRulerCombined /></span>
                  <div>
                    <div className="text-sm text-gray-500">Area</div>
                    <div className="text-xl font-medium text-gray-900">{property.total_area ? `${property.total_area.toLocaleString()} sq.ft` : '—'}</div>
                  </div>
                </div>
                <div className="flex-1 flex items-center gap-3 pt-3 pl-6">
                  <span className="text-3xl text-gray-400 pt-3"><FaBuildingShield /></span>
                  <div>
                    <div className="text-sm text-gray-500">Plots</div>
                    <div className="text-xl font-medium text-gray-900">{property.total_plots ? `${property.total_plots.toLocaleString()} sq.ft` : '—'}</div>
                  </div>
                </div>
                </div>
            </div>
            {/* Features Card */}
            <div className="bg-white rounded-2xl p-6 shadow-md">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#111' }}>Key Features and Amenities</h2>
              <ul className="space-y-4">
                {(property.features || [
                  "Expansive oceanfront terrace for outdoor entertaining",
                  "Gourmet kitchen with top-of-the-line appliances",
                  "Private beach access for morning strolls and sunset views",
                  "Master suite with a spa-inspired bathroom and ocean-facing balcony",
                  "Private garage and ample storage space"
                ]).map((feature, idx) => (
                  <li key={idx} className="flex items-center bg-gray-50 rounded-lg border-l-4" style={{ borderLeftColor: '#2962FF', padding: '1rem' }}>
                    <span className="text-xl text-[#2962FF] mr-4"><FaBolt /></span>
                    <span className="text-base text-gray-900">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Owner & Location Section */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Owner Details Card */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col justify-between">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#111' }}>Owner Details</h2>
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl text-[#E53935]"><FaUser /></span>
                  <span className="text-lg font-bold text-gray-900">{property.owner_name || '—'}</span>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xl text-[#FB8C00]"><FaBuilding /></span>
                  <span className="text-base text-gray-700">{property.company_name || '—'}</span>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xl text-[#2962FF]"><FaEnvelope /></span>
                  <span className="text-base text-gray-700">{property.owner_email || '—'}</span>
                </div>
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-xl text-[#43A047]"><FaPhone /></span>
                  <span className="text-base text-gray-700">{property.owner_contact || '—'}</span>
                </div>
              </div>
              <a
                href={`tel:${property.owner_contact}`}
                className="mt-4 inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#43A047] text-white font-semibold rounded-lg shadow hover:bg-[#388E3C] transition"
                style={{ textDecoration: 'none' }}
              >
                <FaPhone /> Contact Owner
              </a>
            </div>
            {/* Location Card */}
            <div className="bg-white rounded-2xl shadow-md p-8 flex flex-col">
              <h2 className="text-2xl font-bold mb-4" style={{ color: '#111' }}>Location</h2>
              <div className="w-full h-64 rounded-lg overflow-hidden border border-gray-200">
                <iframe
                  title="Property Location"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  loading="lazy"
                  allowFullScreen
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${encodeURIComponent(property.residential_address + ', ' + property.city + ', ' + property.state)}&output=embed`}
                ></iframe>
              </div>
            </div>
            
          </div>

          {/* Amenities Section */}
          <div className=" mt-1 px-4 md:px-0">
            <div className="bg-white rounded-2xl shadow-md p-8">
              <h2 className="text-3xl font-bold mb-6" style={{ color: '#FB8C00', display: 'inline' }}>Amenities</h2>
              <hr className="my-4 border-gray-200" />
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
                {(property.facilities ? property.facilities.split(',').map(facility => facility.trim()) : []).map((facility, idx) => {
                  const key = facility.toLowerCase();
                  const Icon = facilityIconMap[key] || facilityIconMap[key.replace(/[^a-z]/g, '')] || FaBuilding;
                  return (
                    <div key={idx} className="flex flex-col items-center justify-center bg-gray-50 rounded-xl p-6 shadow-sm">
                      <span className="text-4xl mb-2" style={{ color: '#FB8C00' }}><Icon /></span>
                      <span className="text-lg font-medium text-gray-700 text-center">{facility}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
        {/* Right: Sticky Contact Form */}
        <div className="hidden md:block">
          <div style={{ position: 'sticky', top: 140 }}>
            <ContactForm propertyName={property.residential_name} />
          </div>
        </div>
        {/* On mobile, show contact form below */}
        <div className="block md:hidden mt-8">
          <ContactForm propertyName={property.residential_name} />
        </div>
      </div>


      <div className="h-10" /> {/* Spacer */}
    </div>
  );
};

export default ResidentialDetail;

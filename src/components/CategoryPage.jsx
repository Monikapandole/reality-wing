import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { FaCalendarAlt } from 'react-icons/fa';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { getPropertyById } from '../Api/services/propertyServices'; // Import the service
import Loader from './common/Loader'; // Assuming you have a Loader component

function CategoryPage() {
  const { name, id } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const fetchProperty = async () => {
      try {
        setLoading(true);
        const response = await getPropertyById(id);
        console.log("API Response:", response); // Log the full response
        if (response && response.data) {
          setItem(response.data);
        } else {
          console.log("Setting item to null, no data found in response");
          setItem(null);
        }
      } catch (error) {
        console.error("Failed to fetch property details:", error);
        setItem(null);
      } finally {
        setLoading(false);
      }
    };

    if (id) {
      fetchProperty();
    }
  }, [id]);

  const handleRequestClick = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);
  const handleConfirmRequest = () => {
    // Handle actual request logic here
    console.log('Property request sent!');
    setShowPopup(false);
  };

  if (loading) {
    return <Loader />;
  }

  if (!item) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Property not found</h1>
          <p>Sorry, the property you are looking for does not exist.</p>
        </div>
      </div>
    );
  }
  
  const {
    property_name,
    rent_amount,
    area_sqft,
    address,
    property_description,
    available_from,
    features,
    owner_name,
    owner_mobile,
    amenities,
    property_images,
  } = item;


  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto p-4 md:p-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {/* Image Carousel */}
            <div className="mb-6 shadow-lg rounded-lg overflow-hidden">
            {property_images && property_images.length > 0 ? (
                <Carousel showThumbs={false} infiniteLoop useKeyboardArrows autoPlay>
                  {property_images.map((img, index) => (
                    <div key={index}>
                      <img src={img.image_path} alt={`${property_name} ${index + 1}`} className="w-full h-auto object-cover" />
                    </div>
                  ))}
                </Carousel>
              ) : (
                <img src={"https://via.placeholder.com/800x400"} alt="Placeholder" className="w-full h-auto object-cover" />
              )}
            </div>

            {/* Property Details */}
            <div className="bg-white p-6 shadow-md rounded-lg">
              <h1 className="text-3xl font-bold text-gray-800 mb-2">{property_name}</h1>
              <p className="text-gray-600 text-lg mb-4">{address}</p>
              
              <div className="flex items-center text-gray-500 mb-4">
                <FaCalendarAlt className="mr-2" />
                <span>Available from: {new Date(available_from).toLocaleDateString()}</span>
              </div>
              
              <div className="border-t border-gray-200 pt-4">
                <h2 className="text-xl font-semibold text-gray-700 mb-3">Description</h2>
                <p className="text-gray-600 leading-relaxed">{property_description}</p>
              </div>
            </div>

            {/* Features */}
            {features && features.length > 0 && (
              <div className="bg-white p-6 shadow-md rounded-lg mt-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Features</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center text-gray-600">
                      <span className="bg-green-100 text-green-700 rounded-full w-4 h-4 mr-2"></span>
                      <span>{feature.feature_name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
            
            {/* Amenities */}
            {amenities && amenities.length > 0 && (
              <div className="bg-white p-6 shadow-md rounded-lg mt-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Amenities</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                  {amenities.map((amenity, index) => (
                    <div key={index} className="flex items-center text-gray-600">
                      <span className="bg-blue-100 text-blue-700 rounded-full w-4 h-4 mr-2"></span>
                      <span>{amenity.amenity_name}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24">
              {/* Rent Card */}
              <div className="bg-white p-6 shadow-md rounded-lg">
                <div className="text-3xl font-bold text-red-600 mb-2">₹{rent_amount}/month</div>
                <div className="text-gray-600">{area_sqft} sq.ft</div>
                
                <button 
                  className="w-full bg-red-600 text-white font-bold py-3 rounded-lg mt-6 hover:bg-red-700 transition-colors"
                  onClick={handleRequestClick}
                >
                  Request Property
                </button>
              </div>

              {/* Contact Card */}
              <div className="bg-white p-6 shadow-md rounded-lg mt-6">
                <h2 className="text-xl font-semibold text-gray-700 mb-4">Contact Owner</h2>
                <div className="text-gray-800 font-semibold">{owner_name}</div>
                <div className="text-gray-500">{owner_mobile}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Popup for request confirmation */}
      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-xl text-center">
            <h2 className="text-2xl font-bold mb-4">Confirm Request</h2>
            <p className="text-gray-700 mb-6">Are you sure you want to request this property?</p>
            <div className="flex justify-center gap-4">
              <button
                className="bg-gray-300 text-gray-800 px-6 py-2 rounded-lg hover:bg-gray-400"
                onClick={handleClosePopup}
              >
                Cancel
              </button>
              <button
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700"
                onClick={handleConfirmRequest}
              >
                Confirm
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default CategoryPage;

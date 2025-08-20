import React, { useState, useEffect } from 'react';
import { useParams, useLocation, useNavigate } from 'react-router-dom';
import { getPropertiesList, sendPropertyRequest } from '../../Api/services/propertyServices';
import { setProperties } from '../../redux/Slice/propertySlice';
import { useSelector, useDispatch } from 'react-redux';
import Loader from '../common/Loader';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { toast } from 'react-toastify';

function PropertyViewPage() {
  const { id } = useParams();
  const location = useLocation();
  const dispatch = useDispatch();
  const { properties } = useSelector((state) => state.property);
  const { user, token } = useSelector((state) => state.auth);
  const [item, setItem] = useState(location.state?.property?.prop || location.state?.property || null);
  const [loading, setLoading] = useState(!item);
  const [currentImage, setCurrentImage] = useState(0); // for image count
  const [showPopup, setShowPopup] = useState(false);
  const [confirmLoading, setConfirmLoading] = useState(false);
  const navigate = useNavigate();



  const handleRequestClick = () => {
    if (!user?.id || !token) {
      navigate('/login');
      return
    }

    setShowPopup(true)
  };
  const handleClosePopup = () => setShowPopup(false);
  const handleConfirmRequest = async () => {
    if (!user?.id || !token) {
      toast.warn('You must be logged in to request this property.');
      setShowPopup(false);
      return;
    }
    try {
      setConfirmLoading(true); // Start loading
      await sendPropertyRequest({
        property_id: item.id,
        user_id: user.id,
        status: '0',
        token,
      });
      toast.success('Property request sent!');
    } catch (error) {
      console.log(error?.response?.data?.msg, "error");
      toast.error(error?.response?.data?.msg || 'Failed to send property request.');
    } finally {
      setConfirmLoading(false); // Stop loading
      setShowPopup(false);
    }
  };
  useEffect(() => {
    console.log(location.state?.property, "location.")

    if (item) {
      console.log(location.state?.property, "location.state?.property")
      setLoading(false);
      return;
    }
  }, [id, properties, dispatch, item, location.state]);

  if (loading) return <Loader />;

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

  const formatDate = (isoDate) => {
    return new Date(isoDate).toLocaleDateString('en-IN', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const property = {
    photos: item.property_images || [],
    owner: item.owner_name || 'N/A',
    mobile: item.owner_contact || 'N/A',
    type: item.category_id || 'N/A',
    address: item.address || 'N/A',
    location: item.location || 'N/A',
    purpose: item.purpose || 'N/A',
    furnished: item.furnished?.replace(/_/g, ' ') || 'N/A',
    rooms: item.number_of_rooms || 'N/A',
    sqft: item.square_footage || 'N/A',
    bathroomImage: item.bathroom_image ? [item.bathroom_image] : [],
    price: item.price || 'N/A',
    description: item.additional_detail || 'No description available.',
    floor: item.floor,
    amenities: item.amenities,
    availableFrom: formatDate(item.availability_date),
  };



  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    afterChange: (index) => setCurrentImage(index),
  };

  return (
    <div className=" pt-[80px] px-4 flex justify-center">
      <div className="max-w-6xl w-full bg-white p-6 rounded-lg shadow">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* Left: Image Slider with Overlay */}
          <div className="relative rounded-lg overflow-hidden">
            <Slider {...sliderSettings}>
              {property.photos.map((photo, idx) => (
                <div key={idx}>
                  <img
                    src={photo}
                    alt={`photo-${idx}`}
                    className="w-full h-[350px] object-cover rounded"
                  />
                </div>
              ))}
            </Slider>

            {/* Image Count Overlay */}
            <div className="absolute top-2 right-4 bg-black bg-opacity-50 text-white text-xs px-2 py-1 rounded">
              {currentImage + 1} of {property.photos.length}
            </div>
          </div>

          {/* Right: Property Details */}
          <div className="space-y-2 text-left">
            <h2 className="text-2xl font-bold text-gray-800">
              ₹{property.price}/month
            </h2>
            <p className="text-gray-600">
              {property.rooms} Bedrooms • {property.bathroomImage?.length || 0} Bathrooms
            </p>
            <p className="text-gray-600">📍 {property.address}, {property.location}</p>

            <div className="text-sm text-gray-700 mt-4 space-y-1">
              <p><strong>Square Footage:</strong> {property.sqft} sq.ft.</p>
              <p><strong>Furnishing:</strong> {property.furnished}</p>
              <p><strong>Purpose:</strong> {property.purpose}</p>
              <p><strong>Available From:</strong> {property.availableFrom}</p>
              <p><strong>Amenities:</strong> {property.amenities}</p>
              <p><strong>Floor:</strong> {property.floor}</p>
              <p><strong>Description:</strong> {property.description}</p>
            </div>

            <p className="text-sm text-gray-500 mt-4">Posted by Owner</p>

            <button className="bg-red-600 text-white px-4 py-2 rounded mt-2 hover:bg-red-700"
              onClick={handleRequestClick}
            >
              Request For Property
            </button>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6" />

        {/* Bottom Property Meta Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-700">
          <p><strong>Owner:</strong> {property.owner}</p>
          <p><strong>Contact:</strong> {property.mobile}</p>
          <p><strong>Location:</strong> {property.location}</p>
          <p><strong>Category ID:</strong> {property.type}</p>
        </div>
      </div>

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
                className="bg-red-600 text-white px-6 py-2 rounded-lg hover:bg-red-700 disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={handleConfirmRequest}
                disabled={confirmLoading}
              >
                {confirmLoading ? "Processing..." : "Confirm"}
              </button>

            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default PropertyViewPage;

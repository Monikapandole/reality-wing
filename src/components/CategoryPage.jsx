import React from 'react';
import { useParams } from 'react-router-dom';
import { FaRupeeSign } from 'react-icons/fa';
import { MdOutlineLocationOn, MdOutlineBedroomParent } from 'react-icons/md';
import { PiArmchairLight } from 'react-icons/pi';
import { FaCalendarAlt } from 'react-icons/fa';
import icon2 from "../assets/asset2.jpg";
import icon3 from "../assets/asset3.jpg";
import icon4 from "../assets/asset5.jpg";
import icon5 from "../assets/asset6.jpg";
import icon6 from "../assets/asset7.jpg";
import icon1 from "../assets/asset1.jpg";
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
// Sample data (this would come from an API or database in a real app)
const sampleData = {
  villas: [
    {
      id: 1,
      name: 'Luxury Villa in Beachside',
      image:icon1,
      rent: '15,000/month',
      area: '3000 sq.ft',
      location: 'Beachside',
      description: 'A luxurious villa by the beach with a private pool and garden. Perfect for a relaxing getaway or permanent residence.',
      availableFrom: 'Immediate',
      features: ['Private Pool', 'Garden', 'Sea View', 'Fully Furnished'],
      contact: 'John Doe - 9876543210',
      amenities: ['24/7 Security', 'Parking', 'Gym', 'Swimming Pool'],
    },
    {
      id: 2,
      name: 'Modern Villa in the City',
      image:icon3,
      rent: '12,000/month',
      area: '2500 sq.ft',
      location: 'City Center',
      description: 'Modern villa located in the city center with easy access to shops, restaurants, and transport links.',
      availableFrom: 'May 1, 2025',
      features: ['Modern Architecture', 'Balcony', 'Open Plan Living'],
      contact: 'Sarah Lee - 9876543211',
      amenities: ['24/7 Security', 'Parking', 'Air Conditioning', 'Elevator'],
    },
  ],
  apartments: [
    {
      id: 1,
      name: 'Cozy 2BHK Apartment',
      image:icon3,
      rent: '8,000/month',
      area: '1200 sq.ft',
      location: 'Downtown',
      description: 'A cozy 2BHK apartment in the heart of the city with close proximity to shops, schools, and public transport.',
      availableFrom: 'Immediate',
      features: ['2 Bedrooms', '1 Bathroom', 'Balcony'],
      contact: 'Alice Brown - 9876543212',
      amenities: ['24/7 Security', 'Parking', 'Elevator', 'Wi-Fi'],
    },
    {
      id: 2,
      name: 'Spacious 3BHK Apartment',
      image:icon4,
      rent: '10,000/month',
      area: '1500 sq.ft',
      location: 'Suburbs',
      description: 'Spacious 3BHK apartment with ample parking, a quiet neighborhood, and parks nearby.',
      availableFrom: 'June 1, 2025',
      features: ['3 Bedrooms', '2 Bathrooms', 'Garden'],
      contact: 'Tom Williams - 9876543213',
      amenities: ['24/7 Security', 'Parking', 'Gym', 'Children\'s Play Area'],
    },
  ],
  studios: [
    {
      id: 1,
      name: 'Compact Studio in Downtown',
      image:icon1,
      rent: '6,000/month',
      area: '500 sq.ft',
      location: 'Downtown',
      description: 'A compact and cozy studio in the heart of the city, perfect for a single person or couple.',
      availableFrom: 'Immediate',
      features: ['1 Bedroom', '1 Bathroom'],
      contact: 'Emma Clark - 9876543214',
      amenities: ['24/7 Security', 'Parking', 'Elevator', 'Wi-Fi'],
    },
    {
      id: 2,
      name: 'Luxury Studio with City View',
      image:icon4,
      rent: '9,000/month',
      area: '700 sq.ft',
      location: 'City Center',
      description: 'A luxury studio apartment with stunning city views and modern amenities.',
      availableFrom: 'May 15, 2025',
      features: ['1 Bedroom', '1 Bathroom', 'Balcony'],
      contact: 'David Harris - 9876543215',
      amenities: ['24/7 Security', 'Parking', 'Gym', 'Air Conditioning'],
    },
  ],
  sharedRooms: [
    {
      id: 1,
      name: 'Shared Room in City Center',
      image:icon3,
      rent: '4,000/month',
      area: '300 sq.ft',
      location: 'City Center',
      description: 'Shared room in a vibrant area with easy access to public transport and local amenities.',
      availableFrom: 'Immediate',
      features: ['Shared Room', '1 Bathroom'],
      contact: 'Linda Green - 9876543216',
      amenities: ['Wi-Fi', '24/7 Security', 'Elevator'],
    },
    {
      id: 2,
      name: 'Affordable Shared Room in Suburbs',
      image:icon2,
      rent: '3,500/month',
      area: '350 sq.ft',
      location: 'Suburbs',
      description: 'Affordable shared room in a quiet suburban area with parks and grocery stores nearby.',
      availableFrom: 'May 1, 2025',
      features: ['Shared Room', '1 Bathroom'],
      contact: 'Richard Scott - 9876543217',
      amenities: ['Wi-Fi', '24/7 Security', 'Parking'],
    },
  ],
  pgPayingGuest: [
    {
      id: 1,
      name: 'PG in City Center',
      image:icon4,   
       rent: '6,500/month',
      area: '450 sq.ft',
      location: 'City Center',
      description: 'PG accommodation in a prime location, ideal for students or working professionals.',
      availableFrom: 'Immediate',
      features: ['Single Room', '1 Bathroom', 'Shared Kitchen'],
      contact: 'Mary Wilson - 9876543218',
      amenities: ['Wi-Fi', '24/7 Security', 'Parking', 'Laundry Services'],
    },
    {
      id: 2,
      name: 'PG Near University',
      image:icon5,  
        rent: '5,500/month',
      area: '500 sq.ft',
      location: 'Near University',
      description: 'PG room located near the university campus, perfect for students.',
      availableFrom: 'June 1, 2025',
      features: ['Single Room', '1 Bathroom', 'Shared Kitchen'],
      contact: 'James Lee - 9876543219',
      amenities: ['Wi-Fi', '24/7 Security', 'Parking', 'Meals Provided'],
    },
  ],
  hostels: [
    {
      id: 1,
      name: 'Hostel Near Railway Station',
      image:icon4,
      rent: '3,000/month',
      area: '250 sq.ft',
      location: 'Near Railway Station',
      description: 'A basic but affordable hostel located close to the railway station, ideal for travelers.',
      availableFrom: 'Immediate',
      features: ['Bunk Beds', '1 Bathroom'],
      contact: 'David Moore - 9876543220',
      amenities: ['Wi-Fi', 'Shared Kitchen', 'Parking'],
    },
    {
      id: 2,
      name: 'Hostel for Students in Downtown',
      image:icon1,
      rent: '3,500/month',
      area: '300 sq.ft',
      location: 'Downtown',
      description: 'Affordable hostel near major colleges and universities.',
      availableFrom: 'May 1, 2025',
      features: ['Bunk Beds', 'Shared Bathrooms'],
      contact: 'Sara Jackson - 9876543221',
      amenities: ['Wi-Fi', 'Laundry Services', 'Shared Kitchen'],
    },
  ],
  coLivingSpaces: [
    {
      id: 1,
      name: 'Co-living Space in Downtown',
      image:icon3,
      rent: '7,500/month',
      area: '700 sq.ft',
      location: 'Downtown',
      description: 'Spacious co-living space with private and shared rooms, ideal for young professionals.',
      availableFrom: 'Immediate',
      features: ['Private Room', 'Shared Kitchen'],
      contact: 'Oliver King - 9876543222',
      amenities: ['Wi-Fi', '24/7 Security', 'Parking', 'Laundry Services'],
    },
    {
      id: 2,
      name: 'Co-living Space in Suburbs',
      image:icon5,
      rent: '6,000/month',
      area: '650 sq.ft',
      location: 'Suburbs',
      description: 'Affordable co-living space in the suburbs, with easy access to public transport.',
      availableFrom: 'May 1, 2025',
      features: ['Private Room', 'Shared Kitchen'],
      contact: 'Monica Adams - 9876543223',
      amenities: ['Wi-Fi', '24/7 Security', 'Parking', 'Shared Workspace'],
    },
  ],
  luxuryHomes: [
    {
      id: 1,
      name: 'Luxury Penthouse in City Center',
      image:icon1,
      rent: '50,000/month',
      area: '5000 sq.ft',
      location: 'City Center',
      description: 'A luxurious penthouse with city views and premium amenities.',
      availableFrom: 'Immediate',
      features: ['Panoramic City View', 'Private Terrace', 'Jacuzzi'],
      contact: 'Sophia Knight - 9876543224',
      amenities: ['Private Pool', 'Gym', 'Sauna', 'Concierge Services'],
    },
    {
      id: 2,
      name: 'Grand Mansion in Suburbs',
      image:icon5,
      rent: '40,000/month',
      area: '7000 sq.ft',
      location: 'Suburbs',
      description: 'A grand mansion with expansive grounds, perfect for a large family.',
      availableFrom: 'June 1, 2025',
      features: ['Grand Entryway', 'Large Garden', 'Private Pool'],
      contact: 'Charlotte White - 9876543225',
      amenities: ['Tennis Court', 'Private Gym', 'Home Theatre'],
    },
  ],
};

function CategoryPage() {
  const { name, id } = useParams();
  const item = sampleData[name]?.find((item) => item.id === parseInt(id));

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <div className="bg-gray-50 min-h-screen p-4 md:p-8 text-left">
      <div className="max-w-7xl mx-auto bg-white shadow-md rounded-2xl overflow-hidden">
        <div className="md:flex">
          {/* Left: Carousel */}
          <div className="md:w-1/2">
            <Carousel showThumbs={false} infiniteLoop autoPlay>
              {/* {item.images?.map((src, idx) => (
                <div key={idx}> */}
                  <img src={item.image} alt={`Property`} className="h-96 object-cover w-full" />
                {/* </div>
              ))} */}
            </Carousel>
          </div>

          {/* Right: Property Info */}
          <div className="md:w-1/2 p-6 space-y-4">
            <h2 className="text-3xl font-semibold text-gray-800">
              ₹{item.rent} <span className="text-lg font-normal">/ Month</span>
            </h2>
            <p className="text-lg font-medium text-gray-700">
              {item.bedrooms} Bedrooms • {item.bathrooms} Bathrooms • {item.configuration}
            </p>
            <div className="flex items-center text-gray-700 space-x-2">
              <FaCalendarAlt className="text-xl" />
              <span>{item.location}</span>
            </div>

            <div className="text-gray-600 text-sm leading-relaxed">
              <p><strong>Plot Area:</strong> {item.plotArea} sq.ft.</p>
              <p><strong>Built-up Area:</strong> {item.builtUpArea} sq.ft.</p>
              <p><strong>Furnishing:</strong> {item.furnishing}</p>
              <p><strong>Available For:</strong> {item.availableFor}</p>
              <p><strong>Available From:</strong> {item.availableFrom}</p>
              <p><strong>Posted On:</strong> {item.postedOn}</p>
            </div>

            <div className="text-gray-500 text-xs mt-4">Posted by Owner</div>
          </div>
        </div>

        {/* Bottom Info Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6 border-t">
          <div><strong>Total Floors:</strong> {item.totalFloors}</div>
          <div><strong>Facing:</strong> {item.facing}</div>
          <div><strong>Gated Community:</strong> {item.gatedCommunity}</div>
          <div><strong>Parking:</strong> {item.parking}</div>
          <div><strong>Power Backup:</strong> {item.powerBackup}</div>
          <div><strong>Agreement Duration:</strong> {item.rentDuration}</div>
          <div><strong>Property Age:</strong> {item.propertyAge}</div>
          <div><strong>Flooring:</strong> {item.flooring}</div>
        </div>
      </div>
    </div>
  );
}

export default CategoryPage;

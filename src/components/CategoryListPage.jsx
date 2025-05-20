import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import icon2 from "../assets/asset1.jpg";
import icon3 from "../assets/asset3.jpg";
import icon4 from "../assets/asset5.jpg";
import icon5 from "../assets/asset6.jpg";
import icon6 from "../assets/asset7.jpg";
import icon1 from "../assets/asset1.jpg";

// Sample data (this would come from an API or database in a real app)
const sampleData = {
    'Luxury Home': [
      { id: 1, name: 'Luxury Villa in Beachside', image: icon2, area: 3000, location: 'Vijay Nagar' },
      { id: 2, name: 'Modern Villa in the City', image: icon5, area: 2500, location: 'Rao' },
      { id: 3, name: 'Cozy Villa in Countryside', image: icon4, area: 1500, location: 'Vijay Nagar' },
      { id: 4, name: 'Spacious Villa in Suburb', image: icon3, area: 2000, location: 'Bicholi Mardana' },
      { id: 5, name: 'Elegant Villa in Downtown', image: icon6, area: 2800, location: 'Rao' }
    ],
    'fishing-gear': [
      { id: 1, name: 'Cozy 2BHK Apartment', image: icon6, area: 1200, location: 'Vijay Nagar' },
      { id: 2, name: 'Spacious 3BHK Apartment', image: icon2, area: 1500, location: 'Rao' },
      { id: 3, name: 'Luxury 4BHK Apartment', image: icon5, area: 1800, location: 'Bicholi Mardana' },
      { id: 4, name: 'Affordable 1BHK Apartment', image: icon3, area: 900, location: 'Vijay Nagar' },
      { id: 5, name: 'Penthouse Apartment in the City', image: icon4, area: 3500, location: 'City Center' }
    ],
    studios: [
      { id: 1, name: 'Compact Studio in Downtown', image: icon3, area: 500, location: 'Downtown' },
      { id: 2, name: 'Affordable Studio in the Suburbs', image: icon4, area: 600, location: 'Suburbs' },
      { id: 3, name: 'Luxury Studio by the Beach', image: icon5, area: 700, location: 'Beachside' },
      { id: 4, name: 'Cozy Studio in City Center', image: icon2, area: 550, location: 'City Center' },
      { id: 5, name: 'Modern Studio in Tech Park', image: icon1, area: 600, location: 'Tech Park' }
    ],
    'shared-rooms': [
      { id: 1, name: 'Shared Room in Vijay Nagar', image: icon1, area: 250, location: 'Vijay Nagar' },
      { id: 2, name: 'Affordable Shared Room in Rao', image: icon3, area: 300, location: 'Rao' },
      { id: 3, name: 'Spacious Shared Room in Suburbs', image: icon4, area: 350, location: 'Suburbs' },
      { id: 4, name: 'Shared Room in City Center', image: icon5, area: 280, location: 'City Center' },
      { id: 5, name: 'Comfortable Shared Room near College', image: icon2, area: 300, location: 'College Road' }
    ],
    'pg-paying-guest': [
      { id: 1, name: 'PG for Boys in Vijay Nagar', image: icon2, area: 350, location: 'Vijay Nagar' },
      { id: 2, name: 'PG for Girls in Rao', image: icon5, area: 300, location: 'Rao' },
      { id: 3, name: 'Comfortable PG near College', image: icon6, area: 250, location: 'College Road' },
      { id: 4, name: 'Luxury PG in City Center', image: icon3, area: 400, location: 'City Center' },
      { id: 5, name: 'Affordable PG for Students', image: icon1, area: 280, location: 'Suburbs' }
    ],
    hostels: [
      { id: 1, name: 'Boys Hostel in Vijay Nagar', image: icon3, area: 400, location: 'Vijay Nagar' },
      { id: 2, name: 'Girls Hostel in City Center', image: icon4, area: 500, location: 'City Center' },
      { id: 3, name: 'Hostel with Parking in Suburbs', image: icon5, area: 450, location: 'Suburbs' },
      { id: 4, name: 'Luxury Hostel in Tech Park', image: icon6, area: 600, location: 'Tech Park' },
      { id: 5, name: 'Affordable Hostel near College', image: icon2, area: 350, location: 'College Road' }
    ],
    'co-living-spaces': [
      { id: 1, name: 'Co-living Space in Vijay Nagar', image: icon4, area: 500, location: 'Vijay Nagar' },
      { id: 2, name: 'Modern Co-living Space in City Center', image: icon5, area: 600, location: 'City Center' },
      { id: 3, name: 'Budget Co-living Space in Suburbs', image: icon2, area: 550, location: 'Suburbs' },
      { id: 4, name: 'Exclusive Co-living Space in Beachside', image: icon3, area: 650, location: 'Beachside' },
      { id: 5, name: 'Stylish Co-living Space in Tech Park', image: icon6, area: 700, location: 'Tech Park' }
    ],
    'luxury-homes': [
      { id: 1, name: 'Luxury Home in Downtown', image: icon5, area: 3500, location: 'Downtown' },
      { id: 2, name: 'Exclusive Villa in Suburbs', image: icon2, area: 5000, location: 'Suburbs' },
      { id: 3, name: 'Elegant Luxury Home in Beachside', image: icon3, area: 4000, location: 'Beachside' },
      { id: 4, name: 'Opulent Mansion in the City', image: icon4, area: 6000, location: 'City Center' },
      { id: 5, name: 'Gated Luxury Home in Bicholi Mardana', image: icon6, area: 4500, location: 'Bicholi Mardana' }
    ],
    'budget-rentals': [
      { id: 1, name: 'Budget-Friendly Apartment in Vijay Nagar', image: icon2, area: 1000, location: 'Vijay Nagar' },
      { id: 2, name: 'Affordable Studio in Suburbs', image: icon5, area: 800, location: 'Suburbs' },
      { id: 3, name: 'Budget Villa in Rao', image: icon6, area: 1500, location: 'Rao' },
      { id: 4, name: 'Cheap Shared Room near College', image: icon3, area: 350, location: 'College Road' },
      { id: 5, name: 'Economical PG in Bicholi Mardana', image: icon1, area: 300, location: 'Bicholi Mardana' }
    ],
    'short-term-rentals': [
      { id: 1, name: 'Short-Term Rental in Vijay Nagar', image: icon4, area: 800, location: 'Vijay Nagar' },
      { id: 2, name: 'Flexible Stay in City Center', image: icon5, area: 1200, location: 'City Center' },
      { id: 3, name: 'Affordable Short-Term Villa', image: icon2, area: 1500, location: 'Rao' },
      { id: 4, name: 'Short-Term Apartment in Suburbs', image: icon6, area: 1000, location: 'Suburbs' },
      { id: 5, name: 'Vacation Home in Beachside', image: icon3, area: 2000, location: 'Beachside' }
    ],
    'long-term-leases': [
      { id: 1, name: 'Long-Term Lease in Downtown', image: icon2, area: 1500, location: 'Downtown' },
      { id: 2, name: 'Spacious Long-Term Lease in Suburbs', image: icon3, area: 2000, location: 'Suburbs' },
      { id: 3, name: 'Luxury Long-Term Villa in City Center', image: icon4, area: 3000, location: 'City Center' },
      { id: 4, name: 'Long-Term Apartment in Vijay Nagar', image: icon5, area: 1800, location: 'Vijay Nagar' },
      { id: 5, name: 'Elegant Long-Term Lease in Beachside', image: icon6, area: 2500, location: 'Beachside' }
    ],
    'pet-friendly': [
      { id: 1, name: 'Pet-Friendly Villa in Vijay Nagar', image: icon2, area: 3000, location: 'Vijay Nagar' },
      { id: 2, name: 'Pet-Friendly Apartment in Rao', image: icon3, area: 1200, location: 'Rao' },
      { id: 3, name: 'Cozy Pet-Friendly Studio', image: icon5, area: 600, location: 'Suburbs' },
      { id: 4, name: 'Pet-Friendly Shared Room', image: icon6, area: 350, location: 'City Center' },
      { id: 5, name: 'Pet-Friendly PG in Bicholi Mardana', image: icon4, area: 400, location: 'Bicholi Mardana' }
    ],
    'furnished-rentals': [
      { id: 1, name: 'Fully Furnished Villa', image: icon1, area: 3000, location: 'Vijay Nagar' },
      { id: 2, name: 'Furnished 2BHK Apartment', image: icon2, area: 1200, location: 'City Center' },
      { id: 3, name: 'Luxury Furnished Home', image: icon3, area: 2500, location: 'Downtown' },
      { id: 4, name: 'Fully Furnished Shared Room', image: icon4, area: 350, location: 'Rao' },
      { id: 5, name: 'Furnished PG in Bicholi Mardana', image: icon5, area: 400, location: 'Bicholi Mardana' }
    ],
    'unfurnished-rentals': [
      { id: 1, name: 'Unfurnished Apartment in Suburbs', image: icon6, area: 1400, location: 'Suburbs' },
      { id: 2, name: 'Unfurnished Villa in Beachside', image: icon1, area: 2500, location: 'Beachside' },
      { id: 3, name: 'Unfurnished Studio in City Center', image: icon2, area: 600, location: 'City Center' },
      { id: 4, name: 'Unfurnished PG in Vijay Nagar', image: icon3, area: 300, location: 'Vijay Nagar' },
      { id: 5, name: 'Unfurnished Co-living Space', image: icon4, area: 550, location: 'Rao' }
    ],
    'near-public-transport': [
      { id: 1, name: 'Near Public Transport in City Center', image: icon5, area: 1200, location: 'City Center' },
      { id: 2, name: 'Apartment near Metro Station', image: icon2, area: 1500, location: 'Vijay Nagar' },
      { id: 3, name: 'Co-living Space near Bus Stop', image: icon3, area: 600, location: 'Suburbs' },
      { id: 4, name: 'PG near Railway Station', image: icon6, area: 350, location: 'Rao' },
      { id: 5, name: 'Hostel near Metro', image: icon4, area: 450, location: 'Tech Park' }
    ],
    'parking-included': [
      { id: 1, name: 'Villa with Parking in Vijay Nagar', image: icon2, area: 3000, location: 'Vijay Nagar' },
      { id: 2, name: 'Apartment with Parking in Rao', image: icon3, area: 1200, location: 'Rao' },
      { id: 3, name: 'Luxury Home with Parking', image: icon4, area: 2500, location: 'Beachside' },
      { id: 4, name: 'Co-living Space with Parking', image: icon5, area: 550, location: 'City Center' },
      { id: 5, name: 'PG with Parking in Suburbs', image: icon6, area: 400, location: 'Suburbs' }
    ]
  };

function CategoryListPage() {
  const { name } = useParams(); // The category name (like 'villa', 'apartment')
  const items = sampleData[name] || [];
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');

  // Filter the items based on the search term and selected location
  const filteredItems = items.filter((item) => {
    const matchesSearch = item.name.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = selectedLocation ? item.location === selectedLocation : true;
    return matchesSearch && matchesLocation;
  });

  // Unique location options (you can modify this according to your data)
  const locationOptions = ['Vijay Nagar', 'Rao', 'Bicholi Mardana', 'City Center', 'Beachside'];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="px-8 bg-white shadow-md rounded-2xl overflow-hidden">
        <h1 className="text-3xl font-semibold text-gray-800">{name.toUpperCase()}</h1>
        
        {/* Search Bar */}
        <div className="mt-6 flex items-center">
          <input
            type="text"
            className="border p-2 w-[20%] rounded-lg"
            placeholder="Search by name"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* Location Filter */}
        <div className="mt-4 flex items-center">
          <select
            className="border p-2 w-[20%] rounded-lg"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            <option value="">Select Location</option>
            {locationOptions.map((location, index) => (
              <option key={index} value={location}>
                {location}
              </option>
            ))}
          </select>
        </div>

        {/* Display Filtered Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 py-6">
          {filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div key={item.id} className="border p-4 rounded-lg">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h3 className="mt-4 text-xl font-semibold">{item.name}</h3>
                <p className="mt-2 text-gray-600">{item.location}</p>
                <Link
                  to={`/category/${name}/${item.id}`}
                  className="text-blue-500 mt-2 inline-block"
                >
                  View Details
                </Link>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No results found</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default CategoryListPage;

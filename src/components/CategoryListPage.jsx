import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import { getPropertiesList } from '../Api/services/propertyServices';
import { useSelector } from 'react-redux';

function CategoryListPage() {
  const { name } = useParams(); // The category slug (like 'villa', 'apartment')
  const [properties, setProperties] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [loading, setLoading] = useState(true);

  // Get categories from Redux
  const categories = useSelector((state) => state.categories.categories || []);
  // Find the category object by slug
  const selectedCategory = categories.find(
    (cat) => cat.slug === name
  );
  const selectedCategoryId = selectedCategory ? selectedCategory.id : null;
  const selectedCategoryName = selectedCategory ? selectedCategory.category_name : name;

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      try {
        const allProperties = await getPropertiesList();
        // Filter by category_id
        const filtered = selectedCategoryId
          ? allProperties.filter((prop) => prop.category_id === selectedCategoryId)
          : [];
        setProperties(filtered);
      } catch (error) {
        setProperties([]);
      } finally {
        setLoading(false);
      }
    };
    if (selectedCategoryId) {
      fetchProperties();
    } else {
      setProperties([]);
      setLoading(false);
    }
  }, [selectedCategoryId]);

  // Filter the items based on the search term and selected location
  const filteredItems = properties.filter((item) => {
    const matchesSearch = item.property_name?.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesLocation = selectedLocation ? item.address === selectedLocation : true;
    return matchesSearch && matchesLocation;
  });

  // Unique location options from properties
  const locationOptions = Array.from(new Set(properties.map((item) => item.address))).filter(Boolean);

  return (
    <div className="min-h-screen bg-gray-50 p-6 pt-[100px]">
      <div className="px-8 bg-white shadow-md rounded-2xl overflow-hidden">
        <h1 className="text-3xl font-semibold text-gray-800">{selectedCategoryName?.toUpperCase()}</h1>
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
          {loading ? (
            <p className="text-gray-500">Loading...</p>
          ) : filteredItems.length > 0 ? (
            filteredItems.map((item) => (
              <div key={item.id} className="border p-4 rounded-lg">
                <img
                  src={item.property_images && item.property_images[0] ? item.property_images[0] : 'https://via.placeholder.com/400x300'}
                  alt={item.property_name}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h3 className="mt-4 text-xl font-semibold">{item.property_name}</h3>
                <p className="mt-2 text-gray-600">{item.address}</p>
                <Link
                  to={`/property/${item.id}`}
                  state={{ property: item }}
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

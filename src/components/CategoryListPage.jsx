import React, { useState, useEffect } from 'react';
import { Link, useParams, useLocation } from 'react-router-dom';
import { getPropertiesList } from '../Api/services/propertyServices';
import { useSelector } from 'react-redux';

function CategoryListPage() {
  const { id, areaId } = useParams();
  const [properties, setProperties] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedLocation, setSelectedLocation] = useState('');
  const [selectedAreaId, setSelectedAreaId] = useState('');
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const categories = useSelector((state) => state.categories.categories || []);
  const selectedCategory = categories.find(cat => String(cat.id) === String(id));
  const categoryImage = location.state?.image || selectedCategory?.category_image;
  const categoryName = selectedCategory?.category_name;
  const areas = useSelector((state) => state.area.areas || []);
  const selectedArea = areas.find(area => String(area.id) === String(areaId));
  const areaImage = selectedArea?.image;
  const areaName = selectedArea?.name;

  useEffect(() => {
    const fetchProperties = async () => {
      setLoading(true);
      try {
        const allProperties = await getPropertiesList();
        console.log(allProperties ,"all property")
        console.error(allProperties)
        // Filter by category_id and area_id
        let filtered = allProperties;
        if (id) filtered = filtered.filter((prop) => String(prop.category_id) === String(id));
        if (areaId) filtered = filtered.filter((prop) => String(prop.area_id) === String(areaId));
        console.log( filtered ,"filtered" , allProperties)
        setProperties(filtered);
      } catch (error) {
        setProperties([]);
      } finally {
        setLoading(false);
      }
    };
    if (id || areaId) {
      fetchProperties();
    } else {
      setProperties([]);
      setLoading(false);
    }
  }, [id, areaId]);

  const locationOptions = Array.from(new Set(properties.map((item) => item.address))).filter(Boolean);

  return (
    <div className="min-h-screen bg-gray-50 p-6 pt-[100px]">
      <div className="px-8 bg-white shadow-md rounded-2xl overflow-hidden text-center p-4">
        {areaId && selectedArea ? (
          <div className="flex flex-col items-center mb-4 text-center">
            <img src={areaImage} alt={areaName} className="w-16 h-16 rounded-full mb-2" />
            <h1 className="text-3xl font-semibold">{areaName}</h1>
          </div>
        ) : categoryImage && (
          <div className="flex items-center mb-4 text-center justify-center">
            <img src={categoryImage} alt={categoryName} className="w-16 h-16 rounded-full mr-4" />
            <h1 className="text-3xl font-semibold">{categoryName}</h1>
          </div>
        )}
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
        {/* Area Filter */}
        <div className="mt-4 flex items-center">
          <select
            className="border p-2 w-[20%] rounded-lg"
            value={selectedAreaId}
            onChange={(e) => setSelectedAreaId(e.target.value)}
          >
            <option value="">Select Area</option>
            {Array.from(new Set(properties.map((item) => item.area_id))).filter(Boolean).map((areaId, index) => (
              <option key={index} value={areaId}>
                {areaId}
              </option>
            ))}
          </select>
        </div>
        {/* Display Filtered Items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 py-6">
          {loading ? (
            <p className="text-gray-500">Loading...</p>
          ) : properties.length > 0 ? (
            properties.map((item) => (
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

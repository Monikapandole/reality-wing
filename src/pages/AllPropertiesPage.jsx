import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPropertiesList } from "../Api/services/propertyServices";
import Loader from "../components/common/Loader";
import { setProperties } from "../redux/Slice/propertySlice";
import PropertyCard from "../components/PropertyCard";
import { setProperties as setReduxProperties } from "../redux/Slice/propertySlice";

const AllPropertiesPage = () => {
    const [properties, setLocalProperties] = useState([]);
    const [loading, setLoading] = useState(true);
    const dispatch = useDispatch();
    const { categories, loading: categoriesLoading } = useSelector((state) => state.categories);
    const [filteredProperties, setFilteredProperties] = useState([]);

    // filters
    const [searchTerm, setSearchTerm] = useState("");
    const [selectedLocation, setSelectedLocation] = useState("");
    const [selectedAreaId, setSelectedAreaId] = useState("");
    useEffect(() => {
        const fetchAll = async () => {
            try {
                const data = await getPropertiesList();
                dispatch(setProperties(data));
                setLocalProperties(data);
            } catch (err) {
                console.error("Error fetching properties:", err);
            } finally {
                setLoading(false);
            }
        };
        fetchAll();
    }, [dispatch]);
    useEffect(() => {
        const fetchProperties = async () => {
            if (!categoriesLoading && categories.length > 0) {
                try {
                    const propertiesData = await getPropertiesList();
                    if (propertiesData) {
                        dispatch(setReduxProperties(propertiesData));
                        setProperties(propertiesData);
                    }
                } catch (error) {
                    console.error("Failed to fetch properties:", error);
                }
            }
        };

        fetchProperties();
    }, [categories, categoriesLoading, dispatch]);
    // Apply filters
    useEffect(() => {
        let filtered = [...properties];

        if (searchTerm) {
            filtered = filtered.filter((item) =>
                item.property_name?.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        if (selectedLocation) {
            filtered = filtered.filter((item) => item.address === selectedLocation);
        }

        if (selectedAreaId) {
            filtered = filtered.filter(
                (item) => String(item.area_id) === String(selectedAreaId)
            );
        }

        setFilteredProperties(filtered);
    }, [searchTerm, selectedLocation, selectedAreaId, properties]);

    if (loading) return <Loader />;

    // unique dropdown values
    const locationOptions = Array.from(
        new Set(properties.map((item) => item.address))
    ).filter(Boolean);

    const areaOptions = Array.from(
        new Set(properties.map((item) => item.area_id))
    ).filter(Boolean);


    return (
        <div className="min-h-screen bg-gray-50 p-6 pt-[100px]">
            <div className="px-8 bg-white shadow-md rounded-2xl overflow-hidden p-6">
                {/* 🔑 Heading */}
                <h1 className="text-3xl font-semibold mb-6 text-center">
                    All Properties
                </h1>
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
                <div className="my-4 flex items-center ">
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

                {/* 🏠 Property Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl2:grid-cols-4 gap-4">
                    {filteredProperties.length > 0 ? (
                        filteredProperties.map((prop, index) => {
                            const formattedProp = {
                                id: prop.id,
                                image:
                                    prop.property_images && prop.property_images.length > 0
                                        ? prop.property_images[0]
                                        : "https://via.placeholder.com/400x300",
                                bhk: `${prop.number_of_rooms} BHK Flat`,
                                price: prop.rent_amount,
                                area: prop.area_sqft,
                                location: prop.address,
                                images: prop.property_images
                                    ? prop.property_images.length
                                    : 0,
                                name: prop.property_name || "Property",
                            };

                            return (
                                <PropertyCard
                                    key={index}
                                    {...formattedProp}
                                    prop={prop}
                                />
                            );
                        })
                    ) : (
                        <p className="text-gray-500 text-center col-span-3">
                            No properties found
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AllPropertiesPage;

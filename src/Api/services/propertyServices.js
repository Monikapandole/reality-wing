import axios, { Axios } from 'axios';
import axiosInstance from '../axiosInstance';

// Default values for property creation/update
const DEFAULT_VALUES = {
  CATEGORY_ID: '1',
  AREA_ID: '10',
  TENANT_ID: '2',
  LOCATION_LAT: '22.6673',
  LOCATION_LONG: '75.8884',
  DEFAULT_AVAILABILITY_DATE: '2025-06-15'
};

// Property purpose mapping
const PURPOSE_MAPPING = {
  'For Sale': 'FOR_SALE',
  'For Rent': 'FOR_RENT'
};

// Furnished status mapping
const FURNISHED_MAPPING = {
  'None': 'UNFURNISHED',
  'Semi-Furnished': 'SEMI_FURNISHED',
  'Fully Furnished': 'FULLY_FURNISHED'
};

export const getPropertiesList = async () => {
  const response = await axiosInstance.get('/getPropertiesList');
  console.log(response?.data?.data ,"response?.data?.data;")
  return response?.data?.data;
}; 


export const getResidentialProjectList = async () => {
  const response = await axiosInstance.get('/viewResidentialProject');
  console.log(response?.data?.data ,"response?.data?.data;")
  return response?.data?.data;
}; 

export const sendPropertyRequest = async ({ property_id, user_id, status = '0', token }) => {
  const formData = new FormData();
  formData.append('property_id', property_id);
  formData.append('user_id', user_id);
  formData.append('status', status);

  const response = await axiosInstance.post('/sendPropertyRequest', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Authorization': `Bearer ${token}`,
    },
  });
  return response.data;
};

// Utility function to transform form data to API format
const transformPropertyData = (propertyData) => {
  const formData = new FormData();
  
  // Append all the form data
  formData.append('owner_name', propertyData.owner);
  formData.append('owner_contact', propertyData.mobile);
  formData.append('category_id', DEFAULT_VALUES.CATEGORY_ID);
  formData.append('purpose', PURPOSE_MAPPING[propertyData.purpose] || 'FOR_RENT');
  formData.append('area_id', DEFAULT_VALUES.AREA_ID);
  formData.append('address', propertyData.address);
  formData.append('location', propertyData.location);
  formData.append('location_lat', DEFAULT_VALUES.LOCATION_LAT);
  formData.append('location_long', DEFAULT_VALUES.LOCATION_LONG);
  formData.append('number_of_rooms', propertyData.rooms);
  formData.append('square_footage', propertyData.sqft);
  
  // Handle bathroom image
  if (propertyData.bathroomImage) {
    formData.append('bathroom_image', propertyData.bathroomImage);
  }
  
  formData.append('floor', propertyData.floor);
  formData.append('furnished', FURNISHED_MAPPING[propertyData.furnished] || 'UNFURNISHED');
  formData.append('amenities', propertyData.amenities);
  formData.append('tenant_id', DEFAULT_VALUES.TENANT_ID);
  formData.append('availability_date', propertyData.availableDate || DEFAULT_VALUES.DEFAULT_AVAILABILITY_DATE);
  formData.append('additional_detail', propertyData.description);
  formData.append('price', propertyData.price);

  return formData;
};

// Utility function to validate property data before API call
const validatePropertyData = (propertyData) => {
  const errors = [];
  
  if (!propertyData.owner || propertyData.owner.trim() === '') {
    errors.push('Owner name is required');
  }
  
  if (!propertyData.mobile || !/^\d{10}$/.test(propertyData.mobile)) {
    errors.push('Valid 10-digit mobile number is required');
  }
  
  if (!propertyData.address || propertyData.address.trim() === '') {
    errors.push('Address is required');
  }
  
  if (!propertyData.rooms || propertyData.rooms <= 0) {
    errors.push('Valid number of rooms is required');
  }
  
  if (!propertyData.sqft || propertyData.sqft <= 0) {
    errors.push('Valid square footage is required');
  }
  
  if (!propertyData.price || propertyData.price <= 0) {
    errors.push('Valid price is required');
  }
  
  return errors;
};

// Add new property
export const addProperty = async (propertyData,token) => {
  try {
    // Validate data before API call
    const validationErrors = validatePropertyData(propertyData);
    if (validationErrors.length > 0) {
      throw new Error(`Validation failed: ${validationErrors.join(', ')}`);
    }
    
    const formData = transformPropertyData(propertyData);
    
    
    const response = await axios.post(`https://realitywing.com/api_admin/addProperties`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error adding property:', error);
    throw error;
  }
};

// Update existing property
export const updateProperty = async ({ id, data ,token}) => {
  try {
    // Validate data before API call
    const validationErrors = validatePropertyData(data);
    if (validationErrors.length > 0) {
      throw new Error(`Validation failed: ${validationErrors.join(', ')}`);
    }
    
    const formData = transformPropertyData(data);
    const response = await axios.post(`https://realitywing.com/api_admin/${id}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${token}`,
      },
    });

    return response.data;
  } catch (error) {
    console.error('Error updating property:', error);
    throw error;
  }
};

// Get property by ID
export const getPropertyById = async (id) => {
  try {
    const response = await axiosInstance.get(`/getProperty/${id}`);
    return response?.data?.data;
  } catch (error) {
    console.error('Error fetching property:', error);
    throw error;
  }
};

// Delete property
export const deleteProperty = async (id) => {
  try {
    const token = localStorage.getItem('token') || '';
    
    if (!token) {
      throw new Error('Authentication token not found');
    }
    
    const response = await axiosInstance.delete(`/deleteProperty/${id}`, {
      headers: {
        'Authorization': `Bearer ${token}`,
      },
    });
    
    return response.data;
  } catch (error) {
    console.error('Error deleting property:', error);
    throw error;
  }
};

// Search properties with filters
export const searchProperties = async (filters = {}) => {
  try {
    const queryParams = new URLSearchParams();
    
    // Add filters to query params
    Object.keys(filters).forEach(key => {
      if (filters[key] !== undefined && filters[key] !== null && filters[key] !== '') {
        queryParams.append(key, filters[key]);
      }
    });
    
    const response = await axiosInstance.get(`/searchProperties?${queryParams.toString()}`);
    return response?.data?.data;
  } catch (error) {
    console.error('Error searching properties:', error);
    throw error;
  }
};

// Get properties by category
export const getPropertiesByCategory = async (categoryId) => {
  try {
    const response = await axiosInstance.get(`/getPropertiesByCategory/${categoryId}`);
    return response?.data?.data;
  } catch (error) {
    console.error('Error fetching properties by category:', error);
    throw error;
  }
};

// Get properties by area
export const getPropertiesByArea = async (areaId) => {
  try {
    const response = await axiosInstance.get(`/getPropertiesByArea/${areaId}`);
    return response?.data?.data;
  } catch (error) {
    console.error('Error fetching properties by area:', error);
    throw error;
  }
};

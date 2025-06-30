import axiosInstance from '../axiosInstance';

export const getPropertiesList = async () => {
  const response = await axiosInstance.get('/getPropertiesList');
  console.log(response?.data?.data ,"response?.data?.data;")
  return response?.data?.data;
}; 

export const getPropertyById = async (id) => {
    const url = `/getPropertyDetails?property_id=${id}`;
    console.log(`Fetching property from URL: ${url}`);
    try {
      const response = await axiosInstance.get(url);
      console.log('Raw API response:', response);
      return response.data;
    } catch (error) {
      console.error('API call failed:', error.response || error.message);
      throw error;
    }
  }; 
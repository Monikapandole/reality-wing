import axiosInstance from '../axiosInstance';

export const getAllCategory = async () => {
  const response = await axiosInstance.get('/getCategoryList');
  console.log(response?.data?.data ,"response test")
  return response?.data?.data;
};

export const getUserById = async (userId) => {
  const response = await axiosInstance.get(`/users/${userId}`);
  return response.data;
};



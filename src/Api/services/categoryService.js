import axiosInstance from '../axiosInstance';

// Example: Fetch all users
export const getAllUsers = async () => {
  const response = await axiosInstance.get('/users');
  return response.data;
};

// Example: Fetch single user
export const getUserById = async (userId) => {
  const response = await axiosInstance.get(`/users/${userId}`);
  return response.data;
};

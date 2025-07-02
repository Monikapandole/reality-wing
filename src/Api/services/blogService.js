import axiosInstance from '../axiosInstance';

export const getBlogList = async () => {
  try {
    const response = await axiosInstance.get('/getBlogList');
    return response?.data;
  } catch (error) {
    throw new Error('Failed to load blog list.');
  }
}; 
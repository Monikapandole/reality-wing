import axiosInstance from '../axiosInstance';

export const getAreas = async () => {
  const response = await axiosInstance.get('/getAreaList');
  console.log(response?.data?.data ,"response ares")
  return response?.data?.data;
};
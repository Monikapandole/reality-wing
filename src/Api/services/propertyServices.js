import axiosInstance from '../axiosInstance';

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

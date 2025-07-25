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

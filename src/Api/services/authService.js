import axiosInstance from '../axiosInstance';

export const userSignup = async (formData) => {
  const response = await axiosInstance.post('/userSignup', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};


export const userLogin = async (formData, token) => {
    const response = await axiosInstance.post('/login', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        'Cookie': `token=${token}`, // Set the token in the Cookie header
      },
    });
    return response.data;
  };
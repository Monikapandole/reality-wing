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


// api/auth.js or similar
export const userLogout = async (userId, token) => {
  const formData = new FormData();
  formData.append('user_id', userId);

  const response = await axiosInstance.post('/Logout', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
      'Cookie': `token=${token}`, // Send token in Cookie header
    },
  });

  return response.data;
};

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
    const response = await axiosInstance.post('/userLogin', formData, {
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

// Get user profile
export const getUserProfile = async (token) => {
  const response = await axiosInstance.post('/getUserProfile', {}, {
    headers: {
      'Authorization': `Bearer ${token}`,
      'Cookie': `token=${token}`,
    },
  });
  return response.data;
};

// Forgot Password
export const forgotPassword = async (newPassword, confirmPassword) => {
  const formData = new FormData();
  formData.append('newPassword', newPassword);
  formData.append('confirmPassword', confirmPassword);
  const response = await axiosInstance.post('/forgotPassword', formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  return response.data;
};

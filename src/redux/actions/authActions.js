// actions/authActions.js

import { userLogout } from "../../Api/services/authService";

export const setUser = (userData) => {
    return {
      type: 'SET_USER',
      payload: userData,
    };
  };
  
  export const clearUser = () => {
    return {
      type: 'CLEAR_USER',
    };
  };
  

  export const logoutUser = (userId, token) => {
  return async (dispatch) => {
    try {
      await userLogout(userId, token);
      dispatch(clearUser());
    } catch (error) {
      console.error('Logout failed:', error);
      // Optionally dispatch an error action here
    }
  };
};
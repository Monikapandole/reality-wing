// reducers/authReducer.js

const initialState = {
    user: null,
    token: null,
  };
  
  const authReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER':
        return {
          ...state,
          user: action.payload.user,
          token: action.payload.JWT,  // Corrected 'JMT' to 'JWT'
        };
      case 'CLEAR_USER':
        return initialState;
      default:
        return state;
    }
  };
  
  export default authReducer;
  
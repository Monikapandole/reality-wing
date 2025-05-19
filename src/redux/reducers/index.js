// reducers/index.js

import { combineReducers } from 'redux';
import authReducer from './authReducer';
import categorySlice from './categoryReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  categories: categorySlice,
  // other reducers can go here
});

export default rootReducer;

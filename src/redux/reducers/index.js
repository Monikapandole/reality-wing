// reducers/index.js

import { combineReducers } from 'redux';
import authReducer from './authReducer';
import categorySlice from './categoryReducer';
import areasReducer from './areasReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  categories: categorySlice,
  areas:areasReducer
  // other reducers can go here
});

export default rootReducer;

// reducers/index.js

import { combineReducers } from 'redux';
import authReducer from './authReducer';
import categoryReducer from './categoryReducer';
import areasReducer from './areasReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  category: categoryReducer,
  areas:areasReducer
  // other reducers can go here
});

export default rootReducer;

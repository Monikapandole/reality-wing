// store.js
import { configureStore } from '@reduxjs/toolkit';
import storage from 'redux-persist/lib/storage';
import { persistReducer, persistStore } from 'redux-persist';
import { combineReducers } from 'redux';
import authReducer from './reducers/authReducer';
import categoryReducer from './reducers/categoryReducer';
import propertyReducer from './Slice/propertySlice';
import areasReducer from './reducers/areasReducer';

const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  auth: authReducer,
  categories: categoryReducer, 
  property: propertyReducer,
  area:areasReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
});

export const persistor = persistStore(store);

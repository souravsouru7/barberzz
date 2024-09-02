import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import shopkeeperSlice from './slices/shopkeeperSlice';


const loadAuthToken = () => {
  const token = localStorage.getItem('token');
  if (token) {
    return { shopkeeper: { isAuthenticated: true, shopkeeper: null } };
  }
  return { shopkeeper: { isAuthenticated: false, shopkeeper: null } };
};

const store = configureStore({
  reducer: {
    auth: authReducer,
    shopkeeper: shopkeeperSlice,
  },
  preloadedState: loadAuthToken(),
  
});

export default store;

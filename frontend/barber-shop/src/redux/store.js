import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import shopkeeperSlice from './slices/shopkeeperSlice';
const store = configureStore({
  reducer: {
    auth: authReducer,
    shopkeeper: shopkeeperSlice,
  },
});

export default store;

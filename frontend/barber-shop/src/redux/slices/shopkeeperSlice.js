import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';

// Async thunk for registering a shopkeeper
export const registerShopkeeper = createAsyncThunk(
  'shopkeeper/registerShopkeeper',
  async (formData, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/shopkeepers/register', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Async thunk for logging in a shopkeeper
export const loginShopkeeper = createAsyncThunk(
  'shopkeeper/loginShopkeeper',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await axios.post('/api/shopkeepers/login', credentials);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

const shopkeeperSlice = createSlice({
  name: 'shopkeeper',
  initialState: {
    shopkeeper: null,
    loading: false,
    error: null,
    success: false,
    isAuthenticated: false,
    status: 'idle',
  },
  reducers: {
    logoutShopkeeper: (state) => {
      state.shopkeeper = null;
      state.isAuthenticated = false;
      localStorage.removeItem('token');  // Clear token from localStorage
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerShopkeeper.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.status = 'loading';
      })
      .addCase(registerShopkeeper.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.shopkeeper = action.payload;
        state.isAuthenticated = false;
        state.status = 'succeeded';
      })
      .addCase(registerShopkeeper.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
        state.status = 'failed';
      })
      .addCase(loginShopkeeper.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginShopkeeper.fulfilled, (state, action) => {
        state.loading = false;
        state.isAuthenticated = true;
        state.shopkeeper = action.payload.shopkeeper;
        localStorage.setItem('token', action.payload.token);  // Store token in localStorage
      })
      .addCase(loginShopkeeper.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logoutShopkeeper } = shopkeeperSlice.actions;

export default shopkeeperSlice.reducer;

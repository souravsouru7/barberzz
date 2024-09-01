import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

axios.defaults.baseURL = 'http://localhost:5000';
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

const shopkeeperSlice = createSlice({
  name: 'shopkeeper',
  initialState: {
    shopkeeper: null,
    loading: false,
    error: null,
    success: false,
    isAuthenticated: false,
  },
  reducers: {
    logoutShopkeeper: (state) => {
      state.shopkeeper = null;
      state.isAuthenticated = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(registerShopkeeper.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(registerShopkeeper.fulfilled, (state, action) => {
        state.loading = false;
        state.success = true;
        state.shopkeeper = action.payload;
        state.isAuthenticated = true;
      })
      .addCase(registerShopkeeper.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { logoutShopkeeper } = shopkeeperSlice.actions;

export default shopkeeperSlice.reducer;

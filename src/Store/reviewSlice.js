import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchReview = createAsyncThunk('Review/fetchReview', async () => {
  const response = await axios.get(`http://localhost:3001/review`);
  return response.data;
});

const reviewSlice = createSlice({
  name: 'reviews',
  initialState: {
    allReview: [], 
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchReview.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchReview.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.allReview = action.payload; 
      })
      .addCase(fetchReview.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default reviewSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const fetchReview = createAsyncThunk('Review/fetchReview', async () => {
  const response = await axios.get(`http://localhost:3001/review`);
  return response.data;
});

export const fetchNewReview = createAsyncThunk('Review/fetchNewReview', async (reviewData) => {
  const { userName, points,  review } = reviewData;
  const response = await axios.post('http://localhost:3001/review', { userName, points,  review });
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
      })
       .addCase(fetchNewReview.pending, (state) => {
        state.status = 'loading';
      })
   .addCase(fetchNewReview.fulfilled, (state) => {
  state.status = 'succeeded';
})
      .addCase(fetchNewReview.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default reviewSlice.reducer;
import { configureStore } from '@reduxjs/toolkit';
import reviewsReducer from './reviewSlice';

const store = configureStore({
  reducer: {
   
    reviews: reviewsReducer,
  },
});

export default store;


    
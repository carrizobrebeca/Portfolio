import { configureStore } from '@reduxjs/toolkit';
import reviewsReducer from './reviewSlice';

const store = configureStore({
  reducer: {
    // start: startReducer,
    // end: endReducer,
    reviews: reviewsReducer,
  },
});

export default store;


    
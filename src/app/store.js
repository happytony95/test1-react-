import { configureStore } from '@reduxjs/toolkit';
import carReducer  from './slice/carSlice';

export default configureStore({
  reducer: {
      car: carReducer
  } 
})
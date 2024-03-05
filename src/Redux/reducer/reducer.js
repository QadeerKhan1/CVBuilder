// reducers.js
import { combineReducers } from '@reduxjs/toolkit';
import accordionSlice from '../slices/accordionSlice/accordionSlice';

const rootReducer = combineReducers({
  counter: accordionSlice,
  // Add more reducers as needed
});

export default rootReducer;

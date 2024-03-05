// store.js
import { configureStore } from '@reduxjs/toolkit';
import rootReducer from '../reducer/reducer';

import {  dataFormSlice } from '../slices/formDataSlice/formDataSlice';// Assuming you have reducers in a separate file
const store = configureStore({
  reducer: {
    accordion: rootReducer,
    dataForm:dataFormSlice.reducer,
    
  },
});

export default store;
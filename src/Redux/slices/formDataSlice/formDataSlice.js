import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  basicInfo: [],
  workExperience: [],
  skills: [],
  projects: [],
  education: [],
  interests: [],
  languages: [],
  certification: [],
};

export const dataFormSlice = createSlice({
  name: 'dataForm',
  initialState,
  reducers: {
    addItem: (state, action) => {      
      const { key, item } = action.payload;
      if (key === 'basicInfo') {
        state[key] = [item]; // Replace the entire basicInfo array with the new item
      } else {
        state[key].push(item); // Push the new item to other arrays
      }
      
    },
    updateItem: (state, action) => {
      const { key, index, data } = action.payload;
      console.log(index,data,'updated item');
  state[key] = state[key].map((item, idx) =>
    idx === index ? data : item
  );
    },
    deleteItem: (state, action) => {
      const { key, index } = action.payload;
      state[key].splice(index, 1);
    },
  },
});


// Export action creators
export const { addItem, updateItem, deleteItem } = dataFormSlice.actions;

export default dataFormSlice.reducer;

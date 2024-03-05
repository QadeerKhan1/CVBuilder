// accordionSlice.js
import { createSlice } from '@reduxjs/toolkit';
import { usePDF } from 'react-to-pdf';
import { Box ,Button} from "@mui/material";
const options = {
  filename: "using-function.pdf",
  page: {
    margin: 20
  }
};
export const accordionSlice = createSlice({
  name: 'accordion',
  initialState: {
    
  },
  reducers: {
    toggleAccordion: (state, action) => {
        const accordionName = action.payload;
        state[accordionName] = !state[accordionName];
      },
      printtPDF: (state, action) => {
        const { toPDF, targetRef } = usePDF({filename: 'page.pdf'});

      },
  },
});

export const { toggleAccordion } = accordionSlice.actions;

export default accordionSlice.reducer;

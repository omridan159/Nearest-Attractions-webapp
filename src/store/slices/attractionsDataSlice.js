import { createSlice } from '@reduxjs/toolkit';
import { attractionsData } from '../../constants/Attractions';

const initialState = {
   data: attractionsData,
};

export const attractionsDataSlice = createSlice({
   name: 'attractionsData',
   initialState,
   reducers: {
      updateAttractionsData: (state, action) => {
         const index = action.payload.key;
         const filed = action.payload.columnId;
         const value = action.payload.value;

         state.data[index][filed] = value;
      },
   },
   extraReducers: {},
});

export const { updateAttractionsData } = attractionsDataSlice.actions;

export default attractionsDataSlice.reducer;

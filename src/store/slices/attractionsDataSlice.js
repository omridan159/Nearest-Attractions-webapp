import { createSlice } from '@reduxjs/toolkit';
import { attractionsData } from '../../constants/Attractions';
import { fetchAttractions } from '../actions/attractions';

const initialState = {
   data: [],
   error: null,
};

const failedRequestAttractions = (state, action) => {
   state.error = action.payload;
};

export const attractionsDataSlice = createSlice({
   name: 'attractionsData',
   initialState,
   reducers: {
      [fetchAttractions.fulfilled]: (state, action) => {
         state.data = action.payload;
         state.error = false;
      },
      [fetchAttractions.rejected]: (state, action) => {
         failedRequestAttractions(state, action);
      },
   },
   extraReducers: {},
});

export const { updateAttractionsData } = attractionsDataSlice.actions;

export default attractionsDataSlice.reducer;

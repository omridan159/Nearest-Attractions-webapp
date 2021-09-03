import { createSlice } from '@reduxjs/toolkit';
import { fetchAttractions } from '../actions/attractions';

const initialState = {
   attractions: [],
   isDataLoading: true,
   error: null,
};

const failedRequestAttractions = (state, action) => {
   state.isDataLoading = false;
   state.error = action.payload;
};

export const attractionsSlice = createSlice({
   name: 'attractionsSlice',
   initialState,
   reducers: {},
   extraReducers: {
      [fetchAttractions.fulfilled]: (state, action) => {
         state.attractions = action.payload;
         state.isDataLoading = false;
         state.error = false;
      },
      [fetchAttractions.rejected]: (state, action) => {
         failedRequestAttractions(state, action);
      },
   },
});

export const {} = attractionsSlice.actions;

export default attractionsSlice.reducer;

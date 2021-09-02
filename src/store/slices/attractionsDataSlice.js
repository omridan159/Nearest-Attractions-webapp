import { createSlice } from '@reduxjs/toolkit';
import { attractionsData } from '../../constants/Attractions';
import { fetchAttractions } from '../actions/attractions';

const initialState = {
   data: [],
   isDataLoading: true,
   error: null,
};

const failedRequestAttractions = (state, action) => {
   state.isDataLoading = false;
   state.error = action.payload;
};

export const attractionsDataSlice = createSlice({
   name: 'attractionsData',
   initialState,
   reducers: {},
   extraReducers: {
      [fetchAttractions.fulfilled]: (state, action) => {
         state.data = action.payload;
         state.isDataLoading = false;
         state.error = false;
      },
      [fetchAttractions.rejected]: (state, action) => {
         failedRequestAttractions(state, action);
      },
   },
});

export const {} = attractionsDataSlice.actions;

export default attractionsDataSlice.reducer;

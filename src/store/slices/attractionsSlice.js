import { createSlice } from '@reduxjs/toolkit';
import {
   fetchAttractions,
   updateAttractionFavoriteStatus,
} from '../actions/attractions';

const initialState = {
   attractions: [],
   attractionsTypes: [],
   unfavoriteAttractions: {},
   isDataLoading: true,
   error: false,
   error_message: null,
};

const failedRequestAttractions = (state, action) => {
   state.isDataLoading = false;
   state.error = true;
   state.error_message = action.payload.message;
};

export const attractionsSlice = createSlice({
   name: 'attractionsSlice',
   initialState,
   reducers: {},
   extraReducers: {
      [fetchAttractions.fulfilled]: (state, action) => {
         state.attractions = action.payload.data;
         state.unfavoriteAttractions = action.payload.unfavoriteAttractions;
         state.attractionsTypes = action.payload.attractionsTypes;
         state.isDataLoading = false;
         state.error = false;
      },
      [fetchAttractions.rejected]: (state, action) => {
         failedRequestAttractions(state, action);
      },
      [updateAttractionFavoriteStatus.fulfilled]: (state, action) => {
         const index = action.payload.id - 1;
         const status = action.payload.favoriteStatus;
         state.attractions[index]['favorite'] = status;
      },
      [updateAttractionFavoriteStatus.pending]: (state, action) => {},
      [updateAttractionFavoriteStatus.rejected]: (state, action) => {
         failedRequestAttractions(state, action);
      },
   },
});

export default attractionsSlice.reducer;

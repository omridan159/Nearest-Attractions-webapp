import { createSlice, current } from '@reduxjs/toolkit';
import {
   fetchAttractions,
   updateAttractionFavoriteStatus,
} from '../actions/attractions';

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
      [updateAttractionFavoriteStatus.fulfilled]: (state, action) => {
         const index = action.payload.id - 1;
         const status = action.payload.favoriteStatus;
         console.log(action.payload.favoriteStatus);
         state.attractions[index]['favorite'] = status;
         state.isDataLoading = false;
      },
      [updateAttractionFavoriteStatus.pending]: (state, action) => {
         state.isDataLoading = true;
      },
      [updateAttractionFavoriteStatus.rejected]: (state, action) => {
         failedRequestAttractions(state, action);
      },
   },
});

export const {} = attractionsSlice.actions;

export default attractionsSlice.reducer;

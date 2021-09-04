import { createAsyncThunk } from '@reduxjs/toolkit';
import {
   getAttractionsData,
   updateOneAttractionFavoriteStatus,
} from '../../api/attractions';

export const fetchAttractions = createAsyncThunk(
   'attractions/fetchAttractions',
   async (_, { rejectWithValue }) => {
      try {
         const res = await getAttractionsData().then((res) => {
            return res.json();
         });

         return res;
      } catch (err) {
         console.error(err);
         return rejectWithValue(err);
      }
   }
);

export const updateAttractionFavoriteStatus = createAsyncThunk(
   'attractions/updateAttractionFavoriteStatus',
   async (params, { rejectWithValue }) => {
      try {
         const { id, favoriteStatus } = params;
         const res = await updateOneAttractionFavoriteStatus(
            id,
            favoriteStatus
         ).then((res) => {
            return res.json();
         });

         return res;
      } catch (err) {
         console.error(err);
         return rejectWithValue(err);
      }
   }
);

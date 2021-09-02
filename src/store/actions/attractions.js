import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAttractionsData } from '../../utils/api';

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

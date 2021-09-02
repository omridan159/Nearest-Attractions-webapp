import { createAsyncThunk } from '@reduxjs/toolkit';
import { getAttractionsData } from '../../utils/api';

export const fetchAttractions = createAsyncThunk(
   'attractions/fetchAttractions',
   async (_, { rejectWithValue }) => {
      try {
         const res = await getAttractionsData();
         console.log(res);
         return res.json;
      } catch (err) {
         console.error(err);
         return rejectWithValue(err);
      }
   }
);

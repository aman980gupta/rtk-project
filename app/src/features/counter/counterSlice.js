import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchproduct } from './counterAPI';

const initialState = {
 products:[],
  status: 'idle',
};

export const fetchProductsAsync = createAsyncThunk(
  'product/fetchproduct',
  async () => {
    const response = await fetchproduct();
    return response.data.products;
  }
);

export const counterSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {
    
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductsAsync.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProductsAsync.fulfilled, (state, action) => {
        state.status = 'idle';
        console.log("fetchAssync",action.payload)
        state.products = action.payload;
      })
      .addCase(fetchProductsAsync.rejected, (state) => {
        state.status = 'rejected';
        
        return state;
      });
  },
});

// export const { } = counterSlice.actions;


export default counterSlice.reducer;

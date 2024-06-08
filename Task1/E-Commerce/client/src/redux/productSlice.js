import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Create an async thunk for fetching products
export const fetchProducts = createAsyncThunk('product/fetchProducts', async () => {
  const response = await fetch("http://127.0.0.1:7000/api/product/all");
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  const data = await response.json();
  return data;
});

const productSlice = createSlice({
  name: "product",
  initialState: {
    items: [],
    status: 'idle',
    error: null
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProducts.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchProducts.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.items = action.payload;
      })
      .addCase(fetchProducts.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  }
});

export default productSlice.reducer;

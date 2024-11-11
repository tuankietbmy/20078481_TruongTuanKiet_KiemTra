import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedProduct: null,
};

const selectedProductSlice = createSlice({
  name: 'selectedProduct',
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    clearSelectedProduct: (state) => {
      state.selectedProduct = null;
    },
  },
});

export const { setSelectedProduct, clearSelectedProduct } = selectedProductSlice.actions;
export const selectSelectedProduct = (state) => state.selectedProduct.selectedProduct;
export default selectedProductSlice.reducer;

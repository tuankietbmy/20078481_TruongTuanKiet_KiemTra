import { configureStore } from '@reduxjs/toolkit';
import navigationReducer from './navigationSlice';
import productsReducer from './productsSlice';
import selectedProductReducer from './selectedProductSlice';

const store = configureStore({
  reducer: { 
    navigation: navigationReducer,
    products: productsReducer,
    selectedProduct: selectedProductReducer,
  },
});

export default store;

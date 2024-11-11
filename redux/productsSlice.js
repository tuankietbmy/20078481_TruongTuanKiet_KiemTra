import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  products: [
    { id: 1, name: 'Pinaredo', price: 1800, image: require('../assets/xexanh.png') },
    { id: 2, name: 'Pina Motai', price: 1700, image: require('../assets/xedo.png') },
    { id: 3, name: 'Pinaredo', price: 1800, image: require('../assets/daptim.png') },
    { id: 4, name: 'Pina Motai', price: 1700, image: require('../assets/dapdo.png') },
    { id: 5, name: 'Pinaredo', price: 1800, image: require('../assets/daptim.png') },
    { id: 6, name: 'Pina Motai', price: 1700, image: require('../assets/xedo.png') },
  ],
};

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {},
});

export const selectProducts = (state) => state.products.products;
export default productsSlice.reducer;

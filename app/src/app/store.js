import { configureStore } from '@reduxjs/toolkit';
import productReducer from '../features/counter/counterSlice';
import loginReducer from '../features/login/loginSlice';

export const store = configureStore({
  reducer: {
    product: productReducer,
    login:loginReducer
  },
});

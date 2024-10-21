import { configureStore } from '@reduxjs/toolkit';
import authReducer from './reducers/authReducer';
import cartReducer from './reducers/cartSlice';
import logger from 'redux-logger';

const store = configureStore({
  reducer: {
    auth: authReducer,
    cart: cartReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
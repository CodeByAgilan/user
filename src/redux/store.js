import { configureStore } from '@reduxjs/toolkit';
import authReducer from './slices/authSlice';
import usersReducer from './slices/usersSlice';
import searchReducer from './slices/searchSlice';
import formReducer from './slices/formSlice';

export const store = configureStore({
  reducer: {
    auth: authReducer,
    users: usersReducer,
    search: searchReducer,
    form: formReducer,
  },
});

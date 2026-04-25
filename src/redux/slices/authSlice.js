import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isAuthenticated: localStorage.getItem("auth") === "true",
  isActive: true,
  password: "",
  dash: false,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    setDash: (state, action) => {
      state.dash = action.payload;
    },

    setPassword: (state, action) => {
      state.password = action.payload;
    },

    setIsActive: (state, action) => {
      state.isActive = action.payload;
    },

    login: (state) => {
      state.isAuthenticated = true;
      localStorage.setItem("auth", "true");
    },

    logout: (state) => {
      state.isAuthenticated = false;
      state.isActive = true;
      state.password = "";
      state.dash = false;
      localStorage.removeItem("auth");
    },

    handlePasswordChange: (state, action) => {
      const value = action.payload;
      state.dash = true;
      if (value === "favoriteFruit") {
        state.isActive = false;
        state.password = "favoriteFruit";
      } else {
        state.isActive = true;
        state.isAuthenticated = true;
        localStorage.setItem("auth", "true");
      }
    },
  },
});

export const {
  setDash,
  setPassword,
  setIsActive,
  login,
  logout,
  handlePasswordChange,
} = authSlice.actions;

export default authSlice.reducer;

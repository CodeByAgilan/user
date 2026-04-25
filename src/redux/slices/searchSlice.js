import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  search: "",
  debouncedSearch: "",
  currentPage: 1,
  itemsPerPage: 5,
};

const searchSlice = createSlice({
  name: 'search',
  initialState,
  reducers: {
    setSearch: (state, action) => {
      state.search = action.payload;
    },
    setDebouncedSearch: (state, action) => {
      state.debouncedSearch = action.payload;
      state.currentPage = 1;
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    resetSearch: (state) => {
      state.search = "";
      state.debouncedSearch = "";
      state.currentPage = 1;
    },
  },
});

export const {
  setSearch,
  setDebouncedSearch,
  setCurrentPage,
  resetSearch,
} = searchSlice.actions;

export default searchSlice.reducer;

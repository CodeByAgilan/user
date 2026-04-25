import { createSlice } from '@reduxjs/toolkit';

const initialNewUserState = {
  name: "",
  email: "",
  phone: "",
  company: "",
  age: "",
  gender: "male",
  address: "",
  latitude: "",
  longitude: "",
  favoriteFruit: "",
  profilePicture: "",
  tags: "",
  friends: "",
  about: "",
};

const initialState = {
  newUser: initialNewUserState,
  formErrors: {},
  isSubmitting: false,
  editId: null,
  editFormData: {
    name: "",
    email: "",
    company: "",
    age: "",
    phone: "",
    gender: "male",
    address: "",
    about: "",
    latitude: "",
    longitude: "",
    favoriteFruit: "",
    profilePicture: "",
    tags: "",
    friends: "",
  },
  editFormErrors: {},
};

const formSlice = createSlice({
  name: 'form',
  initialState,
  reducers: {
    setNewUser: (state, action) => {
      state.newUser = { ...state.newUser, ...action.payload };
    },
    setFormErrors: (state, action) => {
      state.formErrors = action.payload;
    },
    clearFormError: (state, action) => {
      const field = action.payload;
      delete state.formErrors[field];
    },
    setIsSubmitting: (state, action) => {
      state.isSubmitting = action.payload;
    },
    resetNewUserForm: (state) => {
      state.newUser = initialNewUserState;
      state.formErrors = {};
      state.isSubmitting = false;
    },
    setEditId: (state, action) => {
      state.editId = action.payload;
    },
    setEditFormData: (state, action) => {
      state.editFormData = { ...state.editFormData, ...action.payload };
    },
    setEditFormErrors: (state, action) => {
      state.editFormErrors = action.payload;
    },
    clearEditFormError: (state, action) => {
      const field = action.payload;
      delete state.editFormErrors[field];
    },
    resetEditForm: (state) => {
      state.editId = null;
      state.editFormData = {
        name: "",
        email: "",
        company: "",
        age: "",
        phone: "",
        gender: "male",
        address: "",
        about: "",
        latitude: "",
        longitude: "",
        favoriteFruit: "",
        profilePicture: "",
        tags: "",
        friends: "",
      };
      state.editFormErrors = {};
    },
  },
});

export const {
  setNewUser,
  setFormErrors,
  clearFormError,
  setIsSubmitting,
  resetNewUserForm,
  setEditId,
  setEditFormData,
  setEditFormErrors,
  clearEditFormError,
  resetEditForm,
} = formSlice.actions;

export default formSlice.reducer;

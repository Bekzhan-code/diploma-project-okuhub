import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axios from "../../axios.js";

export const fetchLogin = createAsyncThunk(
  "auth/fetchLogin",
  async (userCredentials) => {
    const { data } = await axios.post(`/auth/login`, userCredentials);
    return data;
  }
);

export const fetchSignUp = createAsyncThunk(
  "auth/fetchSignUp",
  async (userCredentials) => {
    const { data } = await axios.post(`/auth/signUp`, userCredentials);
    return data;
  }
);

const initialState = {
  userData: null,
  userStatus: "logged out", // исправить функционал
  status: "loading",
};

export const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    // fetch login
    builder.addCase(fetchLogin.pending, (state) => {
      state.userData = null;
      state.userStatus = "logged out";
      state.status = "loading";
    });

    builder.addCase(fetchLogin.fulfilled, (state, action) => {
      state.userData = action.payload;
      state.userStatus = "logged in";
      state.status = "success";
    });

    builder.addCase(fetchLogin.rejected, (state) => {
      state.userData = null;
      state.userStatus = "logged out";
      state.status = "error";
    });

    // fetch sign up
    builder.addCase(fetchSignUp.pending, (state) => {
      state.userData = null;
      state.userStatus = "logged out";
      state.status = "loading";
    });

    builder.addCase(fetchSignUp.fulfilled, (state, action) => {
      state.userData = action.payload;
      state.userStatus = "logged in";
      state.status = "success";
    });

    builder.addCase(fetchSignUp.rejected, (state) => {
      state.userData = null;
      state.userStatus = "logged out";
      state.status = "error";
    });
  },
});

export const selectIsAuth = (state) => Boolean(state.auth.data);

export default authSlice.reducer;

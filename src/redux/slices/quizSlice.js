import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { logout } from "./authSlice.js";
import axios from "../../axios.js";

export const fetchQuiz = createAsyncThunk(
  "quiz/fetchQuiz",
  async ({ grade, section }) => {
    const { data } = await axios.get(
      `/testQuestions?grade=${grade}&section=${section}`
    );

    return data;
  }
);

const initialState = {
  quizQuestions: [],
  grade: 0,
  section: "",
  status: "loading",
};

export const quizSlice = createSlice({
  name: "quiz",
  initialState,
  extraReducers: (builder) => {
    // get quiz
    builder.addCase(fetchQuiz.pending, (state) => {
      state.quizQuestions = [];
      state.status = "loading";
    });

    builder.addCase(fetchQuiz.fulfilled, (state, action) => {
      state.quizQuestions = action.payload.questions;
      state.grade = action.payload.grade;
      state.section = action.payload.section;
      state.status = "success";
    });

    builder.addCase(fetchQuiz.rejected, (state) => {
      state.quizQuestions = [];
      state.status = "error";
    });

    // clear data when logged out
    builder.addCase(logout,state => {
      state.quizQuestions = []
      state.grade = 0
      state.section = ""
      state.status = "success"
  })
  },
});

export default quizSlice.reducer;

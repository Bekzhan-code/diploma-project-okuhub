import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
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
    builder.addCase(fetchQuiz.pending, (state) => {
      state.quizQuestions = [];
      state.status = "loading";
    });

    builder.addCase(fetchQuiz.fulfilled, (state, action) => {
      state.quizQuestions = action.payload[0].questions;
      state.grade = action.payload[0].grade;
      state.section = action.payload[0].section;
      state.status = "success";
    });

    builder.addCase(fetchQuiz.rejected, (state) => {
      state.quizQuestions = [];
      state.status = "error";
    });
  },
});

export default quizSlice.reducer;

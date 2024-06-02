import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { logout } from "./authSlice.js";
import axios from "../../axios.js";

export const fetchFlashcards = createAsyncThunk(
  "flashcard/fetchFlashcards",
  async ({ grade, section }) => {
    const { data } = await axios.get(
      `/flashcards?grade=${grade}&section=${section}`
    );
    return data;
  }
);

const initialState = {
  flashcardQuestions: [],
  totalCardsNum: 0,
  grade: 0,
  section: "",
  status: "loading",
};

export const flashcardSlice = createSlice({
  name: "flashcards",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchFlashcards.pending, (state) => {
      state.flashcardQuestions = [];
      state.status = "loading";
    });

    builder.addCase(fetchFlashcards.fulfilled, (state, action) => {
      state.flashcardQuestions = action.payload[0].questions;
      state.totalCardsNum = action.payload[0].questions.length;
      state.grade = action.payload[0].grade;
      state.section = action.payload[0].section;
      state.status = "success";
    });

    builder.addCase(fetchFlashcards.rejected, (state) => {
      state.flashcardQuestions = [];
      state.status = "error";
    });

    // clear data when logged out
    builder.addCase(logout,state => {
      state.flashcardQuestions = []
      state.totalCardsNum = 0
      state.grade = 0
      state.section = ""
      state.status = "success"
  })
  },
});

export default flashcardSlice.reducer;

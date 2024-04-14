import { configureStore } from "@reduxjs/toolkit";
import flashcards from "./slices/flashcardSlice";

export const store = configureStore({
  reducer: {
    flashcards,
  },
});

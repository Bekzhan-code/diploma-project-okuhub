import { configureStore } from "@reduxjs/toolkit";
import flashcards from "./slices/flashcardSlice";
import quiz from "./slices/quizSlice";
import auth from "./slices/authSlice";
import userActions from "./slices/userActionSlice";

export const store = configureStore({
  reducer: {
    flashcards,
    quiz,
    auth,
    userActions
  },
});

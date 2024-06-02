import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import { logout } from "./authSlice.js";
import axios from "../../axios.js";

export const fetchUserActions = createAsyncThunk(
    "userAction/fetchUserActions",
    async () => {
        const { data } = await axios.get('/userActions')
        return data
    }
)

export const fetchUserProgress = createAsyncThunk(
    "userAction/fetchUserProgress",
    async () => {
        const { data } = await axios.get('/userProgress')
        return data
    }
)

export const postUserAction = async (params) => {
    try {
        const { data } = await axios.post(`/userActions`, params);

        return data;
    } catch (error) {
        console.log(error);
    }
};

const initialState = {
    userActions: [],
    userProgress: [],
    status: "loading",
}

export const userActionSlice = createSlice({
    name: "userAction",
    initialState,
    extraReducers: (builder) => {
        // fetch user actions
        builder.addCase(fetchUserActions.pending, (state) => {
            state.userActions = null;
            state.status = "loading"
        });

        builder.addCase(fetchUserActions.fulfilled, (state, action) => {
            state.userActions = action.payload;
            state.status = "success"
        });

        builder.addCase(fetchUserActions.rejected, (state) => {
            state.userActions = null;
            state.status = "error";
        });

        // fetch user progress
        builder.addCase(fetchUserProgress.pending, (state) => {
            state.userProgress = null;
            state.status = "loading"
        });

        builder.addCase(fetchUserProgress.fulfilled, (state, action) => {
            state.userProgress = action.payload;
            state.status = "success"
        });

        builder.addCase(fetchUserProgress.rejected, (state) => {
            state.userProgress = null;
            state.status = "error";
        });

        // clear data when logged out
        builder.addCase(logout,state => {
            state.userActions = []
            state.userProgress = []
            state.status = "success"
        })
    },
});

export default userActionSlice.reducer;
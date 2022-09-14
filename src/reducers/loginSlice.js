import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        isLoading: false,
        loggedin: false,
        user: null,
        error: null,
    },
    reducers: {
        loginRequested: (state) => {
            state.isLoading = true;
            state.loggedin = false;
            state.user = null;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.isLoading = false;
            state.loggedin = true;
            state.user = action.payload;
            state.error = null;
        },
        loginError: (state, action) => {
            state.isLoading = false;
            state.loggedin = false;
            state.user = null;
            state.error = action.payload;
        }
    },
});

export const selectLoggedin = (state) => state.login.loggedin;

export const { loginRequested, loginSuccess, loginError } = loginSlice.actions;

export default loginSlice.reducer;
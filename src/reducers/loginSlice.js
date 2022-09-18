import { createSlice } from '@reduxjs/toolkit';

export const loginSlice = createSlice({
    name: 'login',
    initialState: {
        isLoading: false,
        loggedin: false,
        token: null,
        error: null,
    },
    reducers: {
        loginRequested: (state) => {
            state.isLoading = true;
            state.loggedin = false;
            state.token = null;
            state.error = null;
        },
        loginSuccess: (state, action) => {
            state.isLoading = false;
            state.loggedin = true;
            state.token = action.payload;
            state.error = null;
        },
        loginError: (state, action) => {
            state.isLoading = false;
            state.loggedin = false;
            state.token = null;
            state.error = action.payload;
        },
        logoutRequested: (state) => {
            state.isLoading = true;
            state.loggedin = true;
        },
        logoutSuccess: (state) => {
            state.isLoading = false;
            state.loggedin = false;
            state.token = null;
        }
    },
});

export const selectLoggedin = (state) => state.login.loggedin;

export const { loginRequested, loginSuccess, loginError, logoutRequested, logoutSuccess } = loginSlice.actions;

export default loginSlice.reducer;
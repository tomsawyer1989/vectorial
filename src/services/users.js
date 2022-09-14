import { optionsGET, optionsPOST, optionsDELETE } from './config/options';
import { login, getUsers, postUser, deleteUser } from './config/endpoints';
import { loginRequested, loginSuccess, loginError, logoutRequested, logoutSuccess } from '../reducers/loginSlice';

export const fetchLogin = (body) => async (dispatch) => {
    dispatch(loginRequested());
    try {
        const response = await fetch(login(), optionsPOST(body));

        dispatch(loginSuccess(response.json()));
        return response.json();
    } catch (error) {
        console.log(error);

        dispatch(loginError('Server error'));
        throw error;
    }
}

export const fetchLogout = () => async (dispatch) => {
    dispatch(logoutRequested());
    dispatch(logoutSuccess());
}

export const fetchUsers = async (params) => {
    try {
        const response = await fetch(getUsers(params), optionsGET());
        return response.json();
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const fetchPostUser = async (body) => {
    try {
        const response = await fetch(postUser(), optionsPOST(body));
        return response.json();
    } catch (error) {
        console.log(error);
        throw error;
    }
}

export const fetchDeleteUser = async (body) => {
    try {
        const response = await fetch(deleteUser(), optionsDELETE(body));
        return response.json();
    } catch (error) {
        console.log(error);
        throw error;
    }
}
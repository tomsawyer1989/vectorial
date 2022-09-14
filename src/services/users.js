import { optionsGET, optionsPOST, optionsDELETE } from './config/options';
import { login, getUsers, postUser, deleteUser } from './config/endpoints';
import { loginRequested, loginSuccess, loginError } from '../reducers/loginSlice';

export const fetchLogin = (body) => async (dispatch) => {
    dispatch(loginRequested());
    try {
        const response = await fetch(login(), optionsPOST(body));

        dispatch(loginSuccess(response.json()));
        return response.json();
    } catch (err) {
        console.log(err);

        dispatch(loginError(err));
        throw err;
    }
}

export const fetchUsers = async (params) => {
    try {
        const response = await fetch(getUsers(params), optionsGET());
        return response.json();
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export const fetchPostUser = async (body) => {
    try {
        const response = await fetch(postUser(), optionsPOST(body));
        return response.json();
    } catch (err) {
        console.log(err);
        throw err;
    }
}

export const fetchDeleteUser = async (body) => {
    try {
        const response = await fetch(deleteUser(), optionsDELETE(body));
        return response.json();
    } catch (err) {
        console.log(err);
        throw err;
    }
}
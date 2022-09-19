import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import LoginForm from '../components/forms/LoginForm';
import { selectLoggedin } from '../reducers/loginSlice';
import { fetchLogin } from '../services/users';

function LoginPage() {
    const loggedin = useSelector(selectLoggedin);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        loggedin && navigate('/home');
    }, [loggedin]);

    const handleSubmit = (credentials) => {
        dispatch(fetchLogin(credentials));
    }

    return (
        <div className='container vh-100 d-flex justify-content-center align-items-center'>
            <div className='p-4 border rounded'>
                <div className='d-flex align-items-center mb-4'>
                    <h4>Iniciar sesión</h4>
                </div>
                <LoginForm handleSubmit={handleSubmit} />
            </div>
        </div>
    );
}

export default LoginPage;
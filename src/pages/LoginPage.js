import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { selectLoggedin } from '../reducers/loginSlice';
import { fetchLogin } from '../services/users';

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const loggedin = useSelector(selectLoggedin);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        loggedin && navigate('/home');
    }, [loggedin]);

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(fetchLogin({ username, password }));
    }

    return (
        <div className='container vh-100 d-flex justify-content-center align-items-center'>
            <div className='p-4 border rounded'>
                <div className='d-flex align-items-center mb-4'>
                    <h4>Iniciar sesión</h4>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label">Usuario</label>
                        <input type="username" className="form-control" onChange={(event) => setUsername(event.target.value)} aria-label="Input username" />
                    </div>
                    <div className="mb-3">
                        <label className="form-label">Contraseña</label>
                        <input type="password" className="form-control" onChange={(event) => setPassword(event.target.value)} aria-label="Input password" />
                    </div>
                    <div className="alert text-warning" role="alert">
                        <i className="bi bi-info-circle"></i> Nunca compartas tus credenciales a terceros.
                    </div>
                    <button type="submit" className="btn btn-light">Ingresar</button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
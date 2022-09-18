import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import { selectLoggedin } from '../reducers/loginSlice';
import { fetchLogout } from '../services/users';

function HeaderComponent() {
    const [isNavCollapsed, setIsNavCollapsed] = useState(true);
    const loggedin = useSelector(selectLoggedin);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        !loggedin && navigate('/login');
    }, [loggedin]);

    const onLogout = () => {
        dispatch(fetchLogout());
    }

    return (
        <nav className="navbar navbar-expand-md bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="https://www.vectorial.co/" target="_blank">
                    <img width={200} height={40} src={require('../assets/images/vectorial.png')} alt="vectorial" />
                </a>
                <button className="navbar-toggler" type="button" onClick={() => setIsNavCollapsed(!isNavCollapsed)} aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`${isNavCollapsed ? 'collapse' : ''} navbar-collapse justify-content-end`} id="navbarNav">
                    {<ul className="navbar-nav">
                        <li className="nav-item d-flex">
                            <div className="d-flex flex-column justify-content-center">
                                <strong>admin</strong>
                                <small className="text-secondary">Administrador</small>
                            </div>
                        </li>
                        <li className="nav-item">
                            <button className="btn btn-light" type="button" onClick={() => onLogout()} aria-label="Header logout">
                                <i className="bi bi-box-arrow-left" style={{ fontSize: '2em' }}></i>
                            </button>
                        </li>
                    </ul>}
                </div>
            </div>
        </nav>
    );
}

export default HeaderComponent;
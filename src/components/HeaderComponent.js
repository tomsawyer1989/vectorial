import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { BoxArrowLeft } from 'react-bootstrap-icons';
import { fetchLogout } from '../services/users';

function HeaderComponent() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onLogout = () => {
        dispatch(fetchLogout());
        navigate('/login');
    }

    return (
        <Navbar bg="dark" variant="dark">
            <Container fluid>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                    <Navbar.Text>
                        Signed in as: Mark Otto
                    </Navbar.Text>
                    <Button variant="dark" onClick={() => onLogout()}><BoxArrowLeft size={25}/> Salir</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
}

export default HeaderComponent;
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { PersonFill } from 'react-bootstrap-icons';
import { fetchLogin } from '../services/users';

const styles = {
    container: {
        height: '100vh'
    },
    loginContainer: {
        height: '100%',
        alignItems: 'center'
    },
    loginForm: {
        padding: 0,
        border: '1px solid gray',
        borderRadius: '15px'
    },
    loginTitle: {
        display: 'flex',
        justifyContent: 'center',
        padding: '10px',
        borderRadius: '15px 15px 0px 0px'
    }
};

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [validated, setValidated] = useState(false);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        if (form.checkValidity() !== false) {
            dispatch(fetchLogin({ username, password }));
        }

        setValidated(true);
    }

    return (
        <Container style={styles.container}>
            <Row style={styles.loginContainer}>
                <Col xs={12} md={{span: 4, offset: 4}} style={styles.loginForm}>
                    <div className='text-white-50 bg-dark' style={styles.loginTitle}>
                        <PersonFill size={30} /><h4>Iniciar sesión</h4>
                    </div>
                    <Form className='m-4' noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className='mt-3' controlId="validationUser">
                            <Form.Control
                                required
                                type="text"
                                placeholder="Usuario"
                                defaultValue={username}
                                onChange={(event) => setUsername(event.target.value)}
                            />
                            <Form.Control.Feedback className='m-0' type="invalid">Usuario es requerido</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className='mt-4' controlId="validationPassword">
                            <Form.Control
                                required
                                type="password"
                                placeholder="Contraseña"
                                defaultValue={password}
                                onChange={(event) => setPassword(event.target.value)}
                            />
                            <Form.Control.Feedback className='m-0' type="invalid">Contraseña es requerida</Form.Control.Feedback>
                        </Form.Group>
                        <Button className='mt-4 bg-dark' type="submit" style={{width: '100%'}}>Ingresar</Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default LoginPage;
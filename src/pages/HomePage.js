import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import { PlusLg, Trash3 } from 'react-bootstrap-icons';
import DefaultLayout from '../components/DefaultLayout';
import { fetchUsers, fetchPostUser } from '../services/users';

function HomePage() {
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [validated, setValidated] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.currentTarget;

        if (form.checkValidity() !== false) {
            fetchPostUser({ name, lastname, company, email });
        }

        setValidated(true);
    };

    const onCloseModal = () => {
        setName('');
        setLastname('');
        setCompany('');
        setEmail('');
        setValidated(false);
        setShow(false);
    }

    return (
        <DefaultLayout>
            <Container>
                <Row className='mt-5'>
                    <Col>
                        <Button className='p-1 bg-dark' onClick={() => setShow(true)}><PlusLg size={18}/> Añadir usuario</Button>
                    </Col>
                </Row>
                <Row className='mt-2'>
                    <Col>
                        <Table responsive>
                            <thead>
                                <tr>
                                    <th>Nombre</th>
                                    <th>Apellido</th>
                                    <th>Empresa</th>
                                    <th>Email</th>
                                    <th>Acción</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>Mark</td>
                                    <td>Otto</td>
                                    <td>Imexhs</td>
                                    <td>@hotmail</td>
                                    <td><Button className='p-1 bg-dark'><Trash3 size={18} /></Button></td>
                                </tr>
                            </tbody>
                        </Table>
                    </Col>
                </Row>
            </Container>
            <Modal show={show} onHide={() => onCloseModal()}>
                <Modal.Header closeButton>
                    <Modal.Title>Modal heading</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Form className='m-4' noValidate validated={validated} onSubmit={handleSubmit}>
                        <Form.Group className='mt-3' controlId="validationName">
                            <Form.Control
                                required
                                type="text"
                                placeholder="Nombre"
                                defaultValue={name}
                                onChange={(event) => setName(event.target.value)}
                            />
                            <Form.Control.Feedback className='m-0' type="invalid">Nombre es requerido</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className='mt-4' controlId="validationLastname">
                            <Form.Control
                                required
                                type="text"
                                placeholder="Apellido"
                                defaultValue={lastname}
                                onChange={(event) => setLastname(event.target.value)}
                            />
                            <Form.Control.Feedback className='m-0' type="invalid">Apellido es requerido</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className='mt-3' controlId="validationCompany">
                            <Form.Control
                                required
                                type="text"
                                placeholder="Empresa"
                                defaultValue={company}
                                onChange={(event) => setCompany(event.target.value)}
                            />
                            <Form.Control.Feedback className='m-0' type="invalid">Empresa es requerida</Form.Control.Feedback>
                        </Form.Group>
                        <Form.Group className='mt-3' controlId="validationEmail">
                            <Form.Control
                                required
                                type="text"
                                placeholder="Email"
                                defaultValue={email}
                                onChange={(event) => setEmail(event.target.value)}
                            />
                            <Form.Control.Feedback className='m-0' type="invalid">Email es requerido</Form.Control.Feedback>
                        </Form.Group>
                        <Button className='mt-4 bg-dark' type="submit" style={{width: '100%'}}>Ingresar</Button>
                    </Form>
                </Modal.Body>
            </Modal>
        </DefaultLayout>
    );
}

export default HomePage;
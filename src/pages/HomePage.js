import React, { useState } from 'react';
import DefaultLayout from '../components/DefaultLayout';
import { fetchUsers, fetchPostUser } from '../services/users';

function HomePage() {
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        onCloseModal();
    }

    const onCloseModal = () => {
        setName('');
        setLastname('');
        setCompany('');
        setEmail('');
        setShow(false);
    }

    return (
        <DefaultLayout>
            <div className="row">
                <div className="col">
                    <button className="btn btn-light" type="button" onClick={() => setShow(true)}>
                        <i className="bi bi-plus-lg" style={{ fontSize: '1em' }}></i>
                        Añadir usuario
                    </button>
                </div>
            </div>
            <div className="row mt-2">
                <div className="col">
                    <table className="w-100 table-responsive">
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
                                <td>
                                    <button className="btn btn-light" type="button" onClick={() => { }} aria-label="Table delete">
                                        <i className="bi bi-trash" style={{ fontSize: '1em' }}></i>
                                    </button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className={`modal ${show ? 'd-block' : 'd-none'}`} style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} tabIndex="-1">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Añadir usuario</h5>
                            <button type="button" className="btn-close" onClick={() => onCloseModal()} aria-label="Modal close"></button>
                        </div>
                        <div className="modal-body">
                            <form onSubmit={handleSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">Nombre</label>
                                    <input type="name" className="form-control" value={name} onChange={(event) => setName(event.target.value)} aria-label="Input name" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Apellido</label>
                                    <input type="lastname" className="form-control" value={lastname} onChange={(event) => setLastname(event.target.value)} aria-label="Input lastname" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Empresa</label>
                                    <input type="company" className="form-control" value={company} onChange={(event) => setCompany(event.target.value)} aria-label="Input company" />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">Email</label>
                                    <input type="email" className="form-control" value={email} onChange={(event) => setEmail(event.target.value)} aria-label="Input email" />
                                </div>
                                <button type="submit" className="btn btn-light">Aceptar</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}

export default HomePage;
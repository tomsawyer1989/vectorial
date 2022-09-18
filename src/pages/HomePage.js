import React, { useState, useEffect } from 'react';
import DefaultLayout from '../components/DefaultLayout';
import { fetchUsers, fetchPostUser, fetchDeleteUser } from '../services/users';

function HomePage() {
    const [show, setShow] = useState(false);
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');
    const [users, setUsers] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);

    useEffect(() => {
        getUsers(currentPage);
    }, []);

    const getUsers = async (current) => {
        const response = await fetchUsers({ _page: current });
        setUsers(response);
    }

    const onPrevPage = () => {
        const current = currentPage - 1;

        if (current < 1) {
            return;
        }

        setCurrentPage(current);
        getUsers(current);
    }

    const onNextPage = () => {
        const current = currentPage + 1;

        if (users.length === 0 || users.length < 10) {
            return;
        }

        setCurrentPage(current);
        getUsers(current);
    }

    const onDelete = async (id) => {
        await fetchDeleteUser(id);
        getUsers(currentPage);
    }

    const onCloseModal = () => {
        setName('');
        setLastname('');
        setCompany('');
        setEmail('');
        setShow(false);
    }

    const handleSubmit = async () => {
        const body = {
            name,
            lastname,
            company,
            email
        };

        await fetchPostUser(body);
        getUsers(currentPage);
        onCloseModal();
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
                <div className="col-12">
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
                            {users.map((item, index) => (
                                <tr key={index}>
                                    <td>{item.name}</td>
                                    <td>{item.lastname}</td>
                                    <td>{item.company}</td>
                                    <td>{item.email}</td>
                                    <td>
                                        <button className="btn btn-light" type="button" onClick={() => onDelete(item.id)} aria-label="Table delete">
                                            <i className="bi bi-trash" style={{ fontSize: '1em' }}></i>
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <nav className='w-100' aria-label="Page navigation">
                        <ul className="pagination justify-content-evenly">
                            <li className="page-item">
                                <button className="btn btn-light" type="button" onClick={() => onPrevPage()} aria-label="Previous">
                                    <span style={{ fontSize: '1.6em' }} aria-hidden="true">&laquo;</span>
                                </button>
                            </li>
                            <li className="page-item">
                                <button className="btn btn-light" type="button" onClick={() => onNextPage()} aria-label="Next">
                                    <span style={{ fontSize: '1.6em' }} aria-hidden="true">&raquo;</span>
                                </button>
                            </li>
                        </ul>
                    </nav>
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
                            <form>
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
                            </form>
                        </div>
                        <div className="modal-footer">
                            <button className="btn btn-light" type="button" onClick={() => handleSubmit()}>Aceptar</button>
                        </div>
                    </div>
                </div>
            </div>
        </DefaultLayout>
    );
}

export default HomePage;
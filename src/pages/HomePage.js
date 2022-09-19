import React, { useState, useEffect } from 'react';
import DefaultLayout from '../components/DefaultLayout';
import UserForm from '../components/forms/UserForm';
import ModalComponent from '../components/ModalComponent';
import PaginatorComponent from '../components/PaginatorComponent';
import TableComponent from '../components/TableComponent';
import { fetchUsers, fetchPostUser, fetchDeleteUser } from '../services/users';

function HomePage() {
    const [show, setShow] = useState(false);
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
        setShow(false);
    }

    const handleSubmit = async (user) => {
        await fetchPostUser(user);
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
            <div className="row mt-2 mb-5">
                <div className="d-flex flex-column justify-content-between p-2 border rounded" style={{ height: '512px' }}>
                    <TableComponent users={users} onDelete={onDelete} />
                    <PaginatorComponent onPrevPage={onPrevPage} currentPage={currentPage} onNextPage={onNextPage} />
                </div>
            </div>
            {show && <ModalComponent title="Añadir usuario" onCloseModal={onCloseModal}>
                <UserForm handleSubmit={handleSubmit} />
            </ModalComponent>}
        </DefaultLayout>
    );
}

export default HomePage;
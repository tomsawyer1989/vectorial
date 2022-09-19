import React from "react";

function TableComponent({ users, onDelete }) {
    return (
        <table className="table">
            {users.length !== 0 ? <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>Empresa</th>
                    <th>Email</th>
                    <th>Acción</th>
                </tr>
            </thead>
            :
            <thead>
                <tr className='text-center'>
                    <th>No hay resultados...</th>
                </tr>
            </thead>}
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
    );
}

export default TableComponent;
import React, { useState } from "react";

function UserForm({ handleSubmit }) {
    const [name, setName] = useState('');
    const [lastname, setLastname] = useState('');
    const [company, setCompany] = useState('');
    const [email, setEmail] = useState('');

    return (
        <form>
            <div>
                <label className="form-label">Nombre</label>
                <input type="name" className="form-control" value={name} onChange={(event) => setName(event.target.value)} aria-label="Input name" />
            </div>
            <div>
                <label className="form-label">Apellido</label>
                <input type="lastname" className="form-control" value={lastname} onChange={(event) => setLastname(event.target.value)} aria-label="Input lastname" />
            </div>
            <div>
                <label className="form-label">Empresa</label>
                <input type="company" className="form-control" value={company} onChange={(event) => setCompany(event.target.value)} aria-label="Input company" />
            </div>
            <div>
                <label className="form-label">Email</label>
                <input type="email" className="form-control" value={email} onChange={(event) => setEmail(event.target.value)} aria-label="Input email" />
            </div>
            <div className="mt-4">
                <button className="form-control btn btn-primary" type="button" onClick={() => handleSubmit({ name, lastname, company, email })}>Aceptar</button>
            </div>
        </form>
    );
}

export default UserForm;
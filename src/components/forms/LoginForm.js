import React, { useState } from "react";

function LoginForm({ handleSubmit }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    return (
        <form>
            <div>
                <label className="form-label">Usuario</label>
                <input type="username" className="form-control" onChange={(event) => setUsername(event.target.value)} aria-label="Input username" />
            </div>
            <div>
                <label className="form-label">Contraseña</label>
                <input type="password" className="form-control" onChange={(event) => setPassword(event.target.value)} aria-label="Input password" />
            </div>
            <div className="mt-4">
                <button className="form-control btn btn-light" type="button" onClick={() => handleSubmit({ username, password })}>Ingresar</button>
            </div>
            <div className="alert text-warning" role="alert">
                <i className="bi bi-info-circle"></i> Nunca compartas tus credenciales a terceros.
            </div>
        </form>
    );
}

export default LoginForm;
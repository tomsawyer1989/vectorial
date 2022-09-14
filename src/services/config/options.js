const headers = jwt => {
    const session = JSON.parse(localStorage.getItem('session'));
    return {
        'Content-Type': 'application/json',
        Authorization: jwt ? `Bearer ${session.jwt}` : null,
        // 'app-id': `${ process.env.REACT_APP_DUMMY_API }`
    }
}

export const optionsGET = (jwt = false) => ({
    method: 'GET',
    headers: headers(jwt),
});

export const optionsPOST = (body, jwt = false) => ({
    method: 'POST',
    headers: headers(jwt),
    body: JSON.stringify(body),
});

export const optionsDELETE = (body, jwt = false) => ({
    method: 'DELETE',
    headers: headers(jwt),
    body: JSON.stringify(body),
});
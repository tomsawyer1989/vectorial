const headers = () => {
    const token = JSON.parse(localStorage.getItem('token'));

    return token ? {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${token}`
    }
    : { 'Content-Type': 'application/json' }
}

export const optionsGET = () => ({
    method: 'GET',
    headers: headers(),
});

export const optionsPOST = (body) => ({
    method: 'POST',
    headers: headers(),
    body: JSON.stringify(body),
});

export const optionsDELETE = () => ({
    method: 'DELETE',
    headers: headers()
});
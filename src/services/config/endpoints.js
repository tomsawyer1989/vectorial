const baseUrl = 'http://localhost:8000/';

function serialize(obj) {
    const serialzedParams = Object.keys(obj)
        .reduce((accumulator, currentValue) => {
            accumulator.push(`${currentValue}=${encodeURIComponent(obj[currentValue])}`);
            return accumulator;
        }, [])
        .join('&');

    return `?${serialzedParams}`;
}

export const login = () => `${ baseUrl }test_users_login`;
export const getUsers = (params) => `${ baseUrl }users${params ? serialize(params) : ''}`;
export const postUser = () => `${ baseUrl }users`;
export const deleteUser = (id) => `${ baseUrl }users/${id}`;
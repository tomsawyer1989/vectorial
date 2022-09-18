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
export const getUsers = (params) => `${ baseUrl }test_users_list${serialize(params)}`;
export const postUser = () => `${ baseUrl }test_users_new`;
export const deleteUser = (id) => `${ baseUrl }test_users_delete/${id}`;
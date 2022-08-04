const authenticate = async (userData) => {
    const response = await fetch('/api/v1/users/login', {
        method: 'POST',
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify(userData),
    });

    const data = await response.json();

    return data;
};

const register = async (newUserData) => {};

const getUserInformations = async (token) => {
    const response = await fetch('api/v1/users', {
        headers: {
            method: 'GET',
            authorization: 'Bearer ' + token,
        },
    });

    return response;
};

export { authenticate, register, getUserInformations };

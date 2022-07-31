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

export { authenticate, register };

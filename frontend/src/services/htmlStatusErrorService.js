const handleError = async (response) => {
    if (response.status === 500) {
        throw new Error(
            'A problem occured with the server, please try again later.'
        );
    }
    const payload = await response.text();
    console.log(payload);

    switch (response.status) {
        case 401:
            console.log(401);
            localStorage.removeItem('user');
            throw new Error(payload);
        case 500:
            throw new Error('manon me pousse');
        default:
            throw new Error(payload ?? 'Server Error');
    }
};

export default handleError;

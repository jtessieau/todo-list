import { authenticate } from '../services/authService';
import Navbar from '../components/shared/Navbar';
import { Navigate } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { storeUser } from '../features/userSlice';

function Login() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const userData = {
            email: formData.get('email'),
            password: formData.get('password'),
        };

        console.log(userData);

        authenticate(userData).then((response) => {
            console.log(response);
            if (response.token) {
                localStorage.setItem('user', JSON.stringify(response));
                dispatch(storeUser(response));
                setIsLoggedIn(true);
            }
        });
    };

    return (
        <>
            {isLoggedIn && <Navigate to={'/dashboard'} />}

            <Navbar />
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    Email:
                    <input type="email" name="email" />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" />
                </label>
                <button type="submit">Login</button>
            </form>
        </>
    );
}

export default Login;

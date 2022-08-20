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

            <div class="container">
                <h1>Login</h1>

                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" class="form-label">
                            Email:
                        </label>
                        <input
                            className="form-control"
                            type="email"
                            name="email"
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" class="form-label">
                            Password:
                        </label>
                        <input
                            className="form-control"
                            type="password"
                            name="password"
                        />
                    </div>
                    <button className="btn btn-primary" type="submit">
                        Login
                    </button>
                </form>
            </div>
        </>
    );
}

export default Login;

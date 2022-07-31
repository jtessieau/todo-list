import { authenticate } from '../services/authService';
import Navbar from '../components/shared/Navbar';

function Login() {
    const handleSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData(e.target);

        const userData = {
            email: formData.get('email'),
            password: formData.get('password'),
        };

        console.log(userData);

        authenticate(userData).then((token) => {
            console.log(token);
            localStorage.setItem('token', token);
        });
    };

    return (
        <>
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

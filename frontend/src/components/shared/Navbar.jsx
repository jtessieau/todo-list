import { NavLink, useNavigate } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const isUserConnected = localStorage.getItem('user');
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('user');
        navigate('/');
    };

    return (
        <nav className="navbar">
            <ul>
                {isUserConnected && (
                    <>
                        <li>
                            <NavLink to="/dashboard">Dashboard</NavLink>
                        </li>
                        <li>
                            <button
                                onClick={() => {
                                    logout();
                                }}
                            >
                                Logout
                            </button>
                        </li>
                    </>
                )}
                {!isUserConnected && (
                    <>
                        <li>
                            <NavLink to="/register">Register</NavLink>
                        </li>
                        <li>
                            <NavLink to="/login">Login</NavLink>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}
export default Navbar;

import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const isUserConnected = localStorage.getItem('token');

    return (
        <nav className="navbar">
            <ul>
                {isUserConnected && (
                    <li>
                        <NavLink to="/dashboard">Dashboard</NavLink>
                    </li>
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

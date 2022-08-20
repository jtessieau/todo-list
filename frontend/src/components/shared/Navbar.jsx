import { NavLink, useNavigate } from 'react-router-dom';

function Navbar() {
    const isUserConnected = localStorage.getItem('user');
    const navigate = useNavigate();

    const logout = () => {
        localStorage.removeItem('user');
        navigate('/');
    };

    return (
        <nav className="navbar navbar-expand bg-light justify-content-between px-4">
            <div className="nav-brand ">TODO</div>
            <ul className="navbar-nav">
                {isUserConnected && (
                    <>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/dashboard">
                                Dashboard
                            </NavLink>
                        </li>
                        <li>
                            <button
                                className="btn btn-primary"
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
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/register">
                                Register
                            </NavLink>
                        </li>
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/login">
                                Login
                            </NavLink>
                        </li>
                    </>
                )}
            </ul>
        </nav>
    );
}
export default Navbar;

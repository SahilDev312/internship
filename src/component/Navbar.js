import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
    const navigate = useNavigate();
    let user = null;

    // Retrieve and parse user data from local storage
    try {
        const userString = localStorage.getItem('user');
        user = userString ? JSON.parse(userString) : null;
    } catch (error) {
        console.error('Error parsing user data:', error);
    }

    const handleLogout = () => {
        // Clear user data from local storage
        localStorage.removeItem('user');
        // Redirect to the landing page
        navigate('/');
    };

    return (
        <>
            <style>
                {`
                    .navbar {
                        background-color: #f8f9fa;
                        box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
                    }
                    .navbar-brand {
                        font-size: 1.5rem;
                        font-weight: bold;
                        color: #007bff;
                        text-decoration: none;
                    }
                    .navbar-brand:hover {
                        color: #0056b3;
                    }
                    .navbar-nav .nav-link {
                        color: #555;
                        font-weight: 500;
                        padding: 0.5rem 1rem;
                        text-decoration: none;
                    }
                    .navbar-nav .nav-link:hover {
                        color: #007bff;
                    }
                    .navbar-text {
                        font-weight: 500;
                        color: #333;
                    }
                    .btn-logout {
                        background-color: #dc3545;
                        color: white;
                        border: none;
                        padding: 0.5rem 1rem;
                        font-size: 0.9rem;
                        cursor: pointer;
                        border-radius: 4px;
                        transition: background-color 0.3s;
                    }
                    .btn-logout:hover {
                        background-color: #c82333;
                    }
                    .navbar-toggler {
                        border-color: rgba(0, 0, 0, 0.1);
                    }
                `}
            </style>
            <nav className="navbar navbar-expand-lg">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">CollabTool</Link>
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarNav"
                        aria-controls="navbarNav"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav me-auto">
                            {user && (
                                <li className="nav-item">
                                    <Link className="nav-link" to="/dashboard">Dashboard</Link>
                                </li>
                            )}
                        </ul>
                        <ul className="navbar-nav">
                            {user ? (
                                <>
                                    <li className="nav-item">
                                        <span className="navbar-text me-3">
                                            Hello, {user.username}
                                        </span>
                                    </li>
                                    <li className="nav-item">
                                        <button
                                            className="btn-logout"
                                            onClick={handleLogout}
                                        >
                                            Logout
                                        </button>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/login">Login</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" to="/register">Register</Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
};

export default Navbar;

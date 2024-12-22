import React, { useState } from 'react';

const Register = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleRegister = async (e) => {
        e.preventDefault();
        // Uncomment below to handle register logic when backend API is available.
        /*
        try {
            const { data } = await axios.post('http://localhost:5000/api/auth/register', { name, email, password });
            localStorage.setItem('token', data.token);
            navigate('/'); // Redirect to login if registration is successful
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                setError(error.response.data.message); // Set error message if registration fails
            } else {
                setError('An unexpected error occurred. Please try again later.');
            }
        }
        */
    };

    return (
        <>
            <style>
                {`
                    .container {
                        max-width: 400px;
                        margin: 50px auto;
                        padding: 20px;
                        border: 1px solid #ddd;
                        border-radius: 8px;
                        background-color: #f9f9f9;
                        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
                    }

                    h2 {
                        text-align: center;
                        margin-bottom: 20px;
                        color: #333;
                    }

                    .form-label {
                        font-weight: 500;
                        color: #555;
                    }

                    .form-control {
                        padding: 10px;
                        border-radius: 4px;
                        border: 1px solid #ddd;
                        font-size: 1rem;
                    }

                    .form-control:focus {
                        border-color: #007bff;
                        box-shadow: 0 0 4px rgba(0, 123, 255, 0.3);
                    }

                    .btn-primary {
                        width: 100%;
                        padding: 10px;
                        background-color: #007bff;
                        border: none;
                        border-radius: 4px;
                        color: #fff;
                        font-size: 1rem;
                        cursor: pointer;
                    }

                    .btn-primary:hover {
                        background-color: #0056b3;
                    }

                    .text-danger {
                        text-align: center;
                        margin-top: 10px;
                        font-size: 0.9rem;
                    }

                    a {
                        color: #007bff;
                        text-decoration: none;
                    }

                    a:hover {
                        text-decoration: underline;
                    }
                `}
            </style>
            <div className="container">
                <h2>Register</h2>
                <form onSubmit={handleRegister}>
                    <div className="mb-3">
                        <label htmlFor="name" className="form-label">Username</label>
                        <input
                            type="text"
                            className="form-control"
                            id="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label">Email address</label>
                        <input
                            type="email"
                            className="form-control"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary">Register</button>
                </form>
                {error && <p className="text-danger mt-3">{error}</p>} {/* Display error message */}
                <p>Already have an account? <a href="/">Login</a></p>
            </div>
        </>
    );
};

export default Register;

import React from 'react';
import { Link } from 'react-router-dom';

const LandingPage = () => {
    // Inline CSS styles
    const styles = {
        container: {
            textAlign: 'center',
            marginTop: '5rem',
        },
        jumbotron: {
            backgroundColor: '#f8f9fa',
            padding: '3rem',
            borderRadius: '10px',
            boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
        },
        header: {
            fontSize: '2.5rem',
            fontWeight: 'bold',
            marginBottom: '1rem',
        },
        lead: {
            fontSize: '1.2rem',
            color: '#6c757d',
        },
        hr: {
            margin: '1.5rem 0',
            borderColor: '#dee2e6',
        },
        buttonContainer: {
            marginTop: '2rem',
        },
        button: {
            fontSize: '1rem',
            padding: '0.75rem 1.5rem',
            marginRight: '1rem',
            borderRadius: '5px',
        },
        registerButton: {
            backgroundColor: '#007bff',
            color: '#fff',
            textDecoration: 'none',
        },
        loginButton: {
            backgroundColor: '#dc3545',
            color: '#fff',
            textDecoration: 'none',
        },
    };

    return (
        <div style={styles.container}>
            <div style={styles.jumbotron}>
                <h1 style={styles.header}>Welcome to CollabTool</h1>
                <p style={styles.lead}>
                    CollabTool is your go-to platform for seamless real-time collaboration. 
                    Work together on documents, share ideas, and communicate effortlessly with your team.
                </p>
                <hr style={styles.hr} />
                <p>
                    Whether you're working on a team project or just need to organize your thoughts, 
                    CollabTool offers all the features you need to stay productive.
                </p>
                <div style={styles.buttonContainer}>
                    <Link
                        to="/register"
                        style={{ ...styles.button, ...styles.registerButton }}
                        className="btn"
                    >
                        Register
                    </Link>
                    <Link
                        to="/login"
                        style={{ ...styles.button, ...styles.loginButton }}
                        className="btn"
                    >
                        Login
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;

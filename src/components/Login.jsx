import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import '../styles/styles.css'; // Import the CSS file

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate hook

    const handleSubmit = (e) => {
        e.preventDefault();
        // Dummy login logic
        if (username !== 'jeewaniSaranga' || password !== '12345678') { // Ensure password is a string
            setErrorMessage('Invalid username or password. Please try again.');
        } else {
            setErrorMessage('');
            // Proceed with successful login logic
            console.log("Username:", username);
            console.log("Password:", password);
            navigate('/'); // Redirect to home page after successful login
        }
    };

    return (
        <div className="login-background">
            <div className="w-full max-w-xs">
                <form onSubmit={handleSubmit} className="px-8 pt-6 pb-8 mb-4 bg-white border-4 rounded shadow-md border-gradient-to-r from-green-400 via-blue-500 to-purple-600">
                    <h2 className="mb-4 text-2xl text-center text-green-500">Login</h2>
                    {errorMessage && (
                        <div className="mb-4 text-center text-red-500">
                            {errorMessage}
                        </div>
                    )}
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="username">
                            Username
                        </label>
                        <input
                            type="text"
                            id="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="password">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        />
                        <p className="mt-2 text-xs text-right text-blue-500">
                            <a href="mailto:your-email@example.com?subject=Password%20Reset">Forgot Password?</a>
                        </p>
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            type="submit"
                            className="px-4 py-2 font-bold text-center text-white bg-green-500 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline"
                        >
                            Login
                        </button>
                    </div>
                    <p className="mt-4 text-sm text-center">
                        Don't have an account?{' '}
                        <NavLink to="/register" className="text-blue-500">
                            Register
                        </NavLink>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Login;

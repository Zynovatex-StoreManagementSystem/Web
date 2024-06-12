// src/components/Register.jsx
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/styles.css'; // Import the CSS file

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [agreeTerms, setAgreeTerms] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const validateUsername = (username) => {
        return username.length >= 10;
    };

    const validateEmail = (email) => {
        // Simple email regex for validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        return password.length >= 8;
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!validateUsername(username)) {
            setErrorMessage('Username must be at least 10 characters long.');
            return;
        }

        if (!validateEmail(email)) {
            setErrorMessage('Please enter a valid email address.');
            return;
        }

        if (!validatePassword(password)) {
            setErrorMessage('Password must be at least 8 characters long.');
            return;
        }

        if (password !== confirmPassword) {
            setErrorMessage('Passwords do not match. Please try again.');
            return;
        }

        if (!agreeTerms) {
            setErrorMessage('You must agree to the terms & conditions.');
            return;
        }

        // If all validations pass
        setErrorMessage('');
        setSuccessMessage('Registration successful!');
        console.log("Username:", username);
        console.log("Email:", email);
        console.log("Password:", password);

        // Proceed with registration logic here (e.g., API call)
    };

    return (
        <div className="register-background">
            <div className="w-full max-w-xs">
                <form onSubmit={handleSubmit} className="px-8 pt-6 pb-8 mb-4 bg-white border-4 rounded shadow-md border-gradient-to-r from-green-400 via-blue-500 to-purple-600">
                    <h2 className="mb-4 text-2xl text-center text-green-500">Registration</h2>
                    {errorMessage && (
                        <div className="mb-4 text-center text-red-500">
                            {errorMessage}
                        </div>
                    )}
                    {successMessage && (
                        <div className="mb-4 text-center text-green-500">
                            {successMessage}
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
                    <div className="mb-4">
                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="email">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
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
                    </div>
                    <div className="mb-6">
                        <label className="block mb-2 text-sm font-bold text-gray-700" htmlFor="confirm-password">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            id="confirm-password"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-3 py-2 leading-tight text-gray-700 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        />
                    </div>
                    <div className="mb-4">
                        <label className="inline-flex items-center">
                            <input
                                type="checkbox"
                                checked={agreeTerms}
                                onChange={(e) => setAgreeTerms(e.target.checked)}
                                className="form-checkbox"
                            />
                            <span className="ml-2 text-sm text-gray-700">I agree to the terms & conditions</span>
                        </label>
                    </div>
                    <div className="flex items-center justify-center">
                        <button
                            type="submit"
                            className="px-4 py-2 font-bold text-center text-white bg-green-500 rounded hover:bg-green-700 focus:outline-none focus:shadow-outline"
                        >
                            Register
                        </button>
                    </div>
                    <p className="mt-4 text-sm text-center">
                        Already have an account?{' '}
                        <NavLink to="/login" className="text-blue-500">
                            Login
                        </NavLink>
                    </p>
                </form>
            </div>
        </div>
    );
}

export default Register;


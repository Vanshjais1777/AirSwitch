import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = ({ setIsFirstTime, setVisibleGrid }) => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});

    const validateForm = () => {
        let formErrors = {};
        let isValid = true;

        if (!username) {
            formErrors.username = 'Username is required';
            isValid = false;
        }
        if (!email) {
            formErrors.email = 'Email is required';
            isValid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            formErrors.email = 'Email is invalid';
            isValid = false;
        }
        if (!password) {
            formErrors.password = 'Password is required';
            isValid = false;
        } else if (password.length < 6) {
            formErrors.password = 'Password must be at least 6 characters';
            isValid = false;
        }

        setErrors(formErrors);
        return isValid;
    };

    const navigate = useNavigate();

    const handleSignup = () => {
        if (validateForm()) {
            // Save user signup status
            localStorage.setItem('userSignedUp', true);

            // Set parent state to hide signup and show grid
            setIsFirstTime(false);
            setVisibleGrid(true);

            // Redirect to the homepage
            navigate('/');
        }
    };

    return (
        <div className="h-screen flex justify-center items-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-lg w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

                <input
                    type="text"
                    placeholder="Username"
                    className="w-full p-3 border border-gray-300 rounded mb-4"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
                {errors.username && <p className="text-red-500">{errors.username}</p>}

                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 border border-gray-300 rounded mb-4"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}

                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 border border-gray-300 rounded mb-6"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {errors.password && <p className="text-red-500">{errors.password}</p>}

                <button
                    onClick={handleSignup}
                    className="w-full bg-blue-600 text-white p-3 rounded"
                >
                    Sign Up
                </button>
            </div>
        </div>
    );
};

export default SignUp;

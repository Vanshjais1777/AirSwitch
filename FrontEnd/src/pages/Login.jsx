import React from 'react'

const Login = () => {
    return (
        <div className="h-screen flex justify-center items-center bg-gray-100">
            <div className="bg-white p-8 rounded shadow-lg w-96">
                <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>
                <input
                    type="text"
                    placeholder="Username"
                    className="w-full p-3 border border-gray-300 rounded mb-4"
                />
                <input
                    type="email"
                    placeholder="Email"
                    className="w-full p-3 border border-gray-300 rounded mb-4"
                />
                <input
                    type="password"
                    placeholder="Password"
                    className="w-full p-3 border border-gray-300 rounded mb-6"
                />
                <button
                    className="w-full bg-blue-600 text-white p-3 rounded"
                >
                    Login
                </button>
            </div>
        </div>
    )
}

export default Login
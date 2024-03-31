'use client'
import React, { useState,useEffect } from 'react';
import { setCookie, getCookie } from 'cookies-next';
import { useRouter } from 'next/navigation';


const LoginForm: React.FC = () => {

    const { push } = useRouter()
    const [username, setUsername] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const [validations, setValidations] = useState<string[]>([]);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        // const url = '${process.env.BASE_URL}/api/v1/sessions'
        const url = 'http://127.0.0.1:8000/api/v1/sessions'
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();

        if (response.ok) {
            // console.log(data.data.access_token.token);
            setCookie('access-token', data.data.access_token.token, {
                maxAge: 60 * 60 * 24 * 3, // 1 week
            });
            push('/dashboard');
        } else {
            setValidations(data.validations);
        }
    }

    useEffect(() => {
        if (getCookie('access-token') !== undefined) {
            push('/dashboard');
        }
    });

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                    Username 
                    {validations.map((validation, index) => (
                        <p key={index} className="text-red-500 text-xs italic">{validation}</p>
                    ))}
                </label>
                <input
                    type="username"
                    id="username"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    placeholder="Enter your email"
                    onChange={(e) => setUsername(e.target.value)}
                />
               
            </div>
            <div className="mb-4">
                <label htmlFor="password" className="block text-gray-700 font-bold mb-2">
                    Password
                    {validations.map((validation, index) => (
                        <p key={index} className="text-red-500 text-xs italic">{validation}</p>
                    ))}
                </label>
                <input
                    type="password"
                    id="password"
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                    placeholder="Enter your password"
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
                Login
            </button>
        </form>
    );
};

export default LoginForm;
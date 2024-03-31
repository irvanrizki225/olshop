// import React from 'react';
import LoginForm from '../components/LoginForm';
import { useState, useEffect } from 'react';
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation';

const LoginPage: React.FC = () => {
    const cookieStore = cookies()
    if (cookieStore.get('token') !== undefined) {
        redirect('/dashboard')
    }    

    return (
        <div className="flex justify-center items-center h-screen bg-gray-100">
            <div className="bg-white p-8 rounded shadow">
                <h1 className="text-2xl font-bold mb-4">Login</h1>
                <LoginForm />
            </div>
        </div>
    );
};

export default LoginPage;
'use client'
import React from 'react';

const Sidebar: React.FC = () => {
    const Logout = async () => {
        document.cookie = 'access-token =; Max-Age=0; path=/';
        window.location.href = '/';
    }

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <a href="/">
                    <h1 className="mx-[10px] my-[10px] px-[10px] py-[10px] text-xl font-bold">Olshop Management</h1>
                </a>
            </div>
            <nav className="sidebar-nav">
                <ul>
                    <li>
                        <a href="/orders" className="block p-4 hover:bg-gray-200 mx-[10px] my-[10px] px-[10px] py-[10px]">Order</a>
                    </li>
                    <li>
                        <a href="/product" className="block p-4 hover:bg-gray-200 mx-[10px] my-[10px] px-[10px] py-[10px]">Stock Product</a>
                    </li>
                    <li>
                        <a href="/list-product" className="block p-4 hover:bg-gray-200 mx-[10px] my-[10px] px-[10px] py-[10px]">Daftar Product</a>
                    </li>
                    <li>
                        <a href="/profile" className="block p-4 hover:bg-gray-200 mx-[10px] my-[10px] px-[10px] py-[10px]">Profile</a>
                    </li>
                    <li>
                        {/* <a href="/" className="block p-4 hover:bg-gray-200 mx-[10px] my-[10px] px-[10px] py-[10px]" onClick={() => Logout()}>
                            Logout
                        </a> */}
                        <button onClick={() => Logout()} className="block p-4 hover:bg-gray-200 mx-[10px] my-[10px] px-[10px] py-[10px]">
                            Logout

                        </button>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Sidebar;
// src/admin/components/AdminLayout.jsx
import React, { useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { FiLogOut, FiGrid, FiFolder, FiUsers, FiMenu, FiX } from 'react-icons/fi';

const AdminLayout = () => {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('isAdmin');
        navigate('/admin/login');
    };

    return (
        <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <div
                className={`fixed inset-y-0 left-0 z-30 w-64 bg-gradient-to-b from-indigo-700 to-indigo-900 text-white transition-transform duration-300 transform ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0 lg:static lg:flex lg:flex-shrink-0`}
            >
                <div className="flex flex-col flex-1 pt-5 pb-4">
                    <div className="flex items-center justify-between px-4">
                        <div className="flex items-center">
                            <div className="bg-indigo-500 rounded-lg p-2">
                                <FiGrid className="h-6 w-6" />
                            </div>
                            <span className="ml-3 text-xl font-bold">Admin Panel</span>
                        </div>
                        <button
                            className="lg:hidden text-white"
                            onClick={() => setSidebarOpen(false)}
                        >
                            <FiX className="h-6 w-6" />
                        </button>
                    </div>

                    <nav className="mt-8 flex-1 px-2 space-y-1">
                        <Link
                            to="/admin"
                            className="flex items-center px-4 py-3 text-sm font-medium rounded-md text-indigo-100 hover:bg-indigo-600 hover:bg-opacity-25"
                            onClick={() => setSidebarOpen(false)}
                        >
                            <FiGrid className="mr-3 h-5 w-5" />
                            Dashboard
                        </Link>
                        <Link
                            to="/admin/projects"
                            className="flex items-center px-4 py-3 text-sm font-medium rounded-md bg-indigo-800 text-white"
                            onClick={() => setSidebarOpen(false)}
                        >
                            <FiFolder className="mr-3 h-5 w-5" />
                            Projects
                        </Link>
                        <Link
                            to="/admin/contacts"
                            className="flex items-center px-4 py-3 text-sm font-medium rounded-md text-indigo-100 hover:bg-indigo-600 hover:bg-opacity-25"
                            onClick={() => setSidebarOpen(false)}
                        >
                            <FiUsers className="mr-3 h-5 w-5" />
                            Contacts
                        </Link>
                    </nav>

                    <div className="px-4 py-3 border-t border-indigo-800">
                        <button
                            onClick={handleLogout}
                            className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            <FiLogOut className="mr-2 h-5 w-5" />
                            Logout
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col flex-1 overflow-hidden">
                {/* Top Bar */}
                <header className="flex items-center justify-between px-6 py-4 bg-white border-b border-gray-200">
                    <button
                        className="text-gray-500 focus:outline-none lg:hidden"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <FiMenu className="h-6 w-6" />
                    </button>
                    <div className="flex items-center">
                        <div className="ml-3">
                            <p className="text-sm font-medium text-gray-700">Admin User</p>
                        </div>
                    </div>
                </header>

                {/* Content */}
                <main className="flex-1 overflow-y-auto p-6 bg-gray-50">
                    <div className="max-w-7xl mx-auto">
                        <Outlet />
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AdminLayout;
// src/admin/pages/AdminLogin.jsx
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const AdminLogin = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");

    // Agar admin already logged-in hai to direct /admin bhejo
    useEffect(() => {
        if (localStorage.getItem("isAdmin") === "true") {
            navigate("/admin");
        }
    }, [navigate]);

    const handleLogin = (e) => {
        e.preventDefault();
        if (email === " " && password === "admin123") {
            localStorage.setItem("isAdmin", "true");
            navigate("/admin");
        } else {
            setError("Invalid credentials");
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-500/40 via-slate-100/40 to-blue-500/40 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 transition-all">
            <div className="relative w-full max-w-md rounded-2xl backdrop-blur-md bg-white/70 dark:bg-slate-900/80 shadow-2xl overflow-hidden border border-white/30 dark:border-slate-700/50">
                <div className="bg-gradient-to-r from-indigo-600 to-blue-500 p-6 text-center">
                    <h1 className="text-3xl font-extrabold text-white tracking-wide">
                        Admin Panel
                    </h1>
                </div>

                <form onSubmit={handleLogin} className="p-8">
                    <h2 className="text-xl mb-6 text-center font-semibold text-slate-800 dark:text-slate-100">
                        Sign in to continue
                    </h2>
                    {error && (
                        <p className="text-red-500 text-center text-sm mb-4 font-medium">
                            {error}
                        </p>
                    )}

                    <div className="mb-5">
                        <label htmlFor="email" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                            Email address
                        </label>
                        <input
                            type="email"
                            id="email"
                            className="w-full px-4 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-slate-900 dark:text-slate-100 transition"
                            placeholder="you@example.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </div>

                    <div className="mb-6">
                        <label htmlFor="password" className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
                            Password
                        </label>
                        <input
                            type="password"
                            id="password"
                            className="w-full px-4 py-2 rounded-lg bg-white dark:bg-slate-800 border border-slate-300 dark:border-slate-600 focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 text-slate-900 dark:text-slate-100 transition"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full py-3 rounded-lg bg-gradient-to-r from-indigo-600 to-blue-500 text-white font-medium shadow-lg hover:scale-[1.02] hover:shadow-xl active:scale-95 transition-transform duration-300"
                    >
                        Sign in
                    </button>

                    <div className="mt-4 text-center text-xs text-slate-500 dark:text-slate-400">
                        <p>Use <b>admin@example.com</b> / <b>admin123</b></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AdminLogin;

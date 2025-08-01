// src/App.js
import React from 'react';
import { BrowserRouter, Outlet, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Portfolio from './pages/Portfolio';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Admin imports
import AdminLogin from './admin/pages/AdminLogin';
import AdminLayout from './admin/components/AdminLayout';
import Dashboard from './admin/pages/Dashboard';
import Projects from './admin/pages/Projects';
import Contacts from './admin/pages/Contacts';
import ProtectedRoute from './admin/components/ProtectedRoute';

const App = () => {
  return (
    <>
      <ToastContainer
        position='bottom-right'
        toastClassName="bg-white shadow-lg rounded-lg text-slate-700"
        progressClassName="bg-gradient-to-r from-blue-500 to-indigo-600"
      />

      <BrowserRouter>
        <Routes>
          {/* USER ROUTES */}
          <Route
            path='/'
            element={
              <>
                <Navbar />
                <Outlet />
              </>
            }
          >
            <Route index element={<Portfolio />} />
          </Route>

          {/* ADMIN ROUTES */}
          <Route path='/admin/login' element={<AdminLogin />} />

          <Route
            path='/admin'
            element={
              <ProtectedRoute>
                <AdminLayout /> {/* WRAPPER */}
              </ProtectedRoute>
            }
          >
            <Route index element={<Dashboard />} /> {/* Dashboard stats */}
            <Route path='projects' element={<Projects />} />
            <Route path='contacts' element={<Contacts />} />
          </Route>

          {/* 404 PAGE */}
          <Route
            path='*'
            element={
              <div className="min-h-screen flex items-center justify-center bg-slate-50">
                <h1 className="text-2xl font-medium text-slate-700">
                  Page Not Found
                </h1>
              </div>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

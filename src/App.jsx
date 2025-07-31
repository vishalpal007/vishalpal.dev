import React from 'react';
import { BrowserRouter, Outlet, Routes, Route } from 'react-router-dom';
import Navbar from './component/Navbar';
import Portfolio from './pages/Portfolio';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'
import Admin from './pages/Admin';
import Secret from './pages/Secret';

const App = () => {
  return (
    <>
      <ToastContainer
        position='bottom-left'
      />
      <BrowserRouter>
        <Routes>
          <Route path='/' element={
            <>
              <Navbar />
              <Outlet />
            </>
          }
          >
            <Route index element={<Portfolio />} />
          </Route>


          {/* <Route path='/admin' element={<Admin />} /> */}
          <Route path='/admin' element={<Secret />} />

          <Route path='*' element={<h1>Page Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;

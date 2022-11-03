import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { AppBar } from './AppBar';

export const Layout = () => (
  <div className="container px-12 mx-auto">
    <AppBar />
    <Suspense fallback={null}>
      <Outlet />
    </Suspense>
    <ToastContainer position="bottom-center" reverseOrder={false} />
  </div>
);

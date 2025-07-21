import React from 'react';
import AdminSidebar from '../pages/AdminPages/AdminSidebar';
import { Outlet } from 'react-router-dom';
const Adminlayout = () => {
  return (
    <div>
        <AdminSidebar/>
        <Outlet/>
    </div>
  );
}

export default Adminlayout;

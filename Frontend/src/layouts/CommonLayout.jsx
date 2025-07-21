import React from 'react';
import Navbar from '../components/CommonNavbar'
import {Outlet} from 'react-router-dom'
import Login from '../pages/CommonPages/Login'
const CommonLayout = () => {
  return (
    <div>
      <Navbar/>
      <Outlet/>
    </div>
  );
}

export default CommonLayout;

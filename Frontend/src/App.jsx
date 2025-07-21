import React from 'react';
import { Route, Routes } from 'react-router-dom'
import CommonLayout from './layouts/CommonLayout'
import Login from './pages/CommonPages/Login';
import Signup from './pages/CommonPages/Signup'
import Adminlayout from './layouts/Adminlayout';
import AddProducts from './pages/AdminPages/AddProducts';
import User from './pages/AdminPages/User';
import Shoplayout from './layouts/Shoplayout'
import Cartpage from './pages/ShopPages/Cartpage';
const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<CommonLayout />}>
            <Route path="login" element={<Login/>}></Route>
            <Route path="signup" element ={<Signup/>}></Route>
        </Route>
        <Route path="/admin" element={<Adminlayout/>}>
          <Route path="add-product" element={<AddProducts/>}></Route>
          <Route path="user" element={<User/>}></Route>
        </Route>
        <Route path="/shop" element={<Shoplayout/>}>
          <Route path="cart" element={<Cartpage/>}></Route>
        </Route>
        <Route path="*" element={<h1>404 page not Found 😬</h1>}></Route>
      </Routes>
    </div>
  );
}

export default App;

import React from 'react';
import CommonNavbar from '../components/CommonNavbar';
import { Outlet } from 'react-router-dom';
import Itemspage from '../pages/ShopPages/Itemspage'
import Cartpage from '../pages/ShopPages/Cartpage'
import { useLocation } from 'react-router-dom';
const Shoplayout = () => {
    const location = useLocation();
    const isShop = location.pathname === "/shop" || location.pathname==="/shop/"
    return (
        <div>
            <CommonNavbar />

            {
                isShop ?
                    <>
                        <Itemspage/>
                        <Cartpage/>
                    </> 
                    :
                    <>
                    <Outlet/>
                    </>
            }

        </div>
    );
}

export default Shoplayout;

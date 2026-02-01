import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Outlet, useNavigate } from "react-router-dom";
import { Menu, X } from "lucide-react";
import Sidebar from "../components/Sidebar";
import { SignIn, useUser } from "@clerk/clerk-react";
import { HiOutlineShoppingBag } from "react-icons/hi2";
import { dataContext } from "../context/UserContext";
import { useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Layout = () => {
  const location = useLocation();
  const isNotRentedCarsPage = !(location.pathname.includes("rented-cars"));

  let items = useSelector(state => state);
  let {input, setInput, category, setCategory, showCart, setShowCart} = useContext(dataContext);
  
  const navigate = useNavigate();
  const [sidebar, setSidebar] = useState(false);
  const { user } = useUser();

  return user ? (
    <div className="flex flex-col items-start justify-center h-screen">
      <nav className="w-full px-8 min-h-14 flex items-center justify-between border-b border-gray-200 bg-white">
        <img
          src={assets.logo}
          alt="logo"
          className="h-15 w-32 sm:w-25"
          onClick={() => {
            navigate("/");
          }}
        />

        <div className="flex items-center">
          {isNotRentedCarsPage && (<div
            className="w-[60px] h-[60px] cursor-pointer flex justify-center items-center rounded-md relative"
            onClick={() => {
              setShowCart(true);
            }}
          >
            <span className='absolute top-1.5 right-4'>{items.cart.length}</span>
            <HiOutlineShoppingBag className="w-[20px] h-[20px] text-orange-500" />
          </div>)}
          {sidebar ? (
            <X
              onClick={() => {
                setSidebar(false);
              }}
              className="w-6 h-6 text-gray-600 sm:hidden"
            />
          ) : (
            <Menu
              onClick={() => {
                setSidebar(true);
              }}
              className="w-6 h-6 text-gray-600 sm:hidden"
            />
          )}
        </div>
      </nav>

      <div className="flex-1 w-full flex h-[calc(100vh-64px)]">
        <Sidebar sidebar={sidebar} setSidebar={setSidebar} />
        <div className="flex-1 bg-[#F4F7FB">
          <Outlet />
        </div>
      </div>
    </div>
  ) : (
    <div className="flex items-center justify-center h-screen">
      <SignIn />
    </div>
  );
};

export default Layout;

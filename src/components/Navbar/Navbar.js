import React from "react";
import Logo from '../../assets/images/logo_pink.png';
import { Link } from "react-router-dom";
import {BsCart} from "react-icons/bs";
import {AiOutlineSearch} from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { CartState } from "../../context/Context";


function Navbar({toggleMenu,toggleCart}) {
  const {
    state: { cart },
  } = CartState();
  return (
    <nav className="bg-white px-2 sm:px-4 py-2.5 text-secondary fixed top-0 left-0 right-0 z-[2000] max-h-[100px] border-1 border-b border-primary">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <div className="md:hidden text-3xl cursor-pointer" onClick={toggleMenu}>
          <GiHamburgerMenu />
        </div>
        {/* logo */}
        <Link to="/" class="flex md:mr-8 max-h-18 ">
          <img src={Logo} className="w-32 h-[4.5rem]" />
        </Link>
        {/* Links */}
        <div
          className="hidden justify-between items-center text-sm w-full md:flex md:w-auto"
          id="mobile-menu-2"
        >
          <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium">
            <li className="relative">
              <Link
                to="/"
                className="block py-2 pr-4 pl-3 md:bg-transparent md:p-0 dark:text-white hover:text-primary link-hover"
              >
                Home
              </Link>
            </li>
            <li className="relative">
              <Link
                to="/new_arrivals"
                className="block py-2 pr-4 pl-3 md:bg-transparent md:p-0 dark:text-white hover:text-primary link-hover"
              >
                New Arrivals
              </Link>
            </li>
            <li className="relative">
              <Link
                to="/products"
                className="block py-2 pr-4 pl-3 md:bg-transparent md:p-0 dark:text-white hover:text-primary link-hover"
              >
                Products
              </Link>
            </li>
            <li className="relative">
              <Link
                to="/collections"
                className="block py-2 pr-4 pl-3 md:bg-transparent md:p-0 dark:text-white hover:text-primary link-hover"
              >
                Shop By Set
              </Link>
            </li>

            <li className="relative">
              <Link
                to="/contact_us"
                className="block py-2 pr-4 pl-3 md:bg-transparent md:p-0 dark:text-white hover:text-primary link-hover"
              >
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
        {/* Icons */}
        <div className=" flex items-center text-3xl  gap-x-4">
          <div className="">
            <AiOutlineSearch />
          </div>
          <div className="cursor-pointer relative mr-3" onClick={toggleCart}>
            <BsCart />
            <div className="absolute -top-3 -right-2 bg-secondary py-1 px-2 text-white text-xs rounded-full">
              {cart.length}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
